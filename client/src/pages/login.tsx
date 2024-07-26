import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase";
import { getUser, useLoginMutation } from "../redux/api/userAPI";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { MessageResponse } from "../types/api-types";
import { userExist, userNotExist } from "../redux/reducer/userReducer";
import { useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const [login] = useLoginMutation();

  const loginHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user) {
        throw new Error("User information is missing");
      }

      const userData = {
        name: user.displayName!,
        email: user.email!,
        photo: user.photoURL!,
        gender,
        role: "user",
        dob: date,
        _id: user.uid,
      };

      console.log(userData);

      const res = await login(userData);

      if ("data" in res) {
        toast.success(res.data.message);
        const data = await getUser(user.uid);
        if (data?.user) {
          dispatch(userExist(data.user));
        } else {
          throw new Error("User data not found");
        }
      } else {
        const error = res.error as FetchBaseQueryError;
        const message = (error.data as MessageResponse).message;
        toast.error(message);
        dispatch(userNotExist());
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Sign In Failed";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="login min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <main className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <FaShoppingCart className="text-4xl mx-auto mb-4 text-gray-800" />
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Shoppy
        </h1>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 mb-2">
            Gender
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            aria-label="Select Gender"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="dob" className="block text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            aria-label="Date of Birth"
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-gray-700 mb-4">Already signed in once?</p>
          <button
            onClick={loginHandler}
            className="flex items-center bg-blue-600 text-white p-2 rounded-lg shadow hover:bg-blue-700 transition-all"
            aria-label="Sign in with Google"
          >
            <FcGoogle className="text-2xl mr-2" />
            <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
