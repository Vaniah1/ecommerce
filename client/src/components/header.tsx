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
              className="bg-gradient-to-r from-purple-400 to-indigo-800 z-50 p-4 rounded-lg"
              open={isOpen}
              onClick={() => setIsOpen(false)} // Close dialog when clicking outside
            >
              <div className="bg-gradient-to-r from-purple-400 to-indigo-800 p-4 rounded-lg">
                {user.role === "admin" && (
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/admin/dashboard"
                    aria-label="Admin Dashboard"
                  >
                    Admin
                  </Link>
                )}

                <Link
                  onClick={() => setIsOpen(false)}
                  to="/orders"
                  aria-label="Orders"
                >
                  Orders
                </Link>
                <button
                  onClick={logoutHandler}
                  aria-label="Sign Out"
                  className="flex items-center space-x-2"
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
