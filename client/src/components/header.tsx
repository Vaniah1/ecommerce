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
      toast.error("Sign Out Failed");
    }
  };

  return (
    <nav className="header bg-gradient-to-r from-purple-400 to-indigo-800 text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link
          to="/"
          className="text-white font-bold text-4xl mr-4"
          onClick={() => setIsOpen(false)}
        >
          <FaCartShopping className="text-4xl" />
        </Link>
        <Link
          className="text-white font-bold text-4xl"
          onClick={() => setIsOpen(false)}
          to="/"
        >
          Shoppy
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          className="text-white"
          onClick={() => setIsOpen(false)}
          to="/search"
          aria-label="Search"
        >
          <FaSearch className="text-2xl" />
        </Link>
        <Link
          className="text-white"
          onClick={() => setIsOpen(false)}
          to="/cart"
          aria-label="Cart"
        >
          <FaShoppingBag className="text-2xl" />
        </Link>

        {user?._id ? (
          <>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="User menu"
            >
              <FaUser className="text-2xl" />
            </button>
            <dialog
              className="bg-gradient-to-r from-purple-600 to-indigo-900 z-50 p-6 rounded-xl shadow-2xl mr-5 w-64 backdrop-blur-sm"
              open={isOpen}
              onClick={() => setIsOpen(false)}
            >
              <div className="space-y-4">
                {user.role === "admin" && (
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/admin/dashboard"
                    aria-label="Admin Dashboard"
                    className="block text-white hover:text-purple-200 transition-colors duration-200 font-semibold"
                  >
                    Admin
                  </Link>
                )}

                <Link
                  onClick={() => setIsOpen(false)}
                  to="/orders"
                  aria-label="Orders"
                  className="block text-white hover:text-purple-200 transition-colors duration-200 font-semibold"
                >
                  Orders
                </Link>
                <button
                  onClick={logoutHandler}
                  aria-label="Sign Out"
                  className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors duration-200 font-semibold"
                >
                  <FaSignOutAlt className="text-xl" />
                  <span>Sign Out</span>
                </button>
              </div>
            </dialog>
          </>
        ) : (
          <Link to="/login" aria-label="Login">
            <FaSignInAlt className="text-2xl" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
