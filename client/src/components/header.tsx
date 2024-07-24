import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";

interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };

  return (
    <nav className="header bg-gradient-to-r from-purple-400 to-indigo-800 text-white">
      <div className="flex items-center justify-between">
        <FaCartShopping className="text-4xl" />
        <Link
          className="text-white font-bold text-4xl"
          onClick={() => setIsOpen(false)}
          to={"/"}
        >
          Shoppy
        </Link>
      </div>

      <Link
        className="text-white"
        onClick={() => setIsOpen(false)}
        to={"/search"}
      >
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog
            className="bg-gradient-to-r from-purple-400 to-indigo-800 z-50"
            open={isOpen}
          >
            <div className="bg-gradient-to-r from-purple-400 to-indigo-800">
              {user.role === "admin" && (
                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                  Admin
                </Link>
              )}

              <Link onClick={() => setIsOpen(false)} to="/orders">
                Orders
              </Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
