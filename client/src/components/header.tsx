import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Failed");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="User menu"
              className="flex items-center space-x-2 focus:outline-none"
            >
              <FaUser className="text-2xl" />
              <span className="hidden md:inline">{user.name}!</span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-purple-300 rounded-md shadow-lg py-1 z-10"
                >
                  {user.role === "admin" && (
                    <Link
                      onClick={() => setIsOpen(false)}
                      to="/admin/dashboard"
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 transition-colors duration-200"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/orders"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 transition-colors duration-200"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
