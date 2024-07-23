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
    <div className="header bg-black text-white flex items-center justify-center">
      <div className="flex items-center justify-between">
        <FaCartShopping className="text-5xl" aria-hidden="true" />
        <Link
          className="text-white font-bold text-5xl"
          onClick={() => setIsOpen(false)}
          to={"/"}
          tabIndex={0}
        >
          Shoppy
        </Link>
      </div>

      <Link
        className="text-white"
        onClick={() => setIsOpen(false)}
        to={"/search"}
        tabIndex={0}
        aria-label="Search"
      >
        <FaSearch aria-hidden="true" />
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        to={"/cart"}
        tabIndex={0}
        aria-label="Cart"
      >
        <FaShoppingBag aria-hidden="true" />
      </Link>
      {user?._id ? (
        <>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            tabIndex={0}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
          >
            <FaUser />
          </button>
          <dialog className="bg-black text-white" open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/admin/dashboard"
                  tabIndex={0}
                >
                  Admin
                </Link>
              )}
              <Link onClick={() => setIsOpen(false)} to="/orders" tabIndex={0}>
                Orders
              </Link>
              <button onClick={logoutHandler} tabIndex={0}>
                Sign Out
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"} tabIndex={0} aria-label="Sign In">
          <FaSignInAlt aria-hidden="true" />
        </Link>
      )}
    </div>
  );
};

export default Header;
