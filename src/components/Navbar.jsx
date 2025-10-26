import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import MyContainer from "./MyContainer";
import logo from "../assets/paw.jpg";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout failed!");
      });
  };

  return (
    <div className="bg-pink-100 py-2 border-b border-pink-200 shadow-md">
      <MyContainer className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-">
          <img
            src={logo}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-pink-300"
            alt="Logo"
          />
          <h1 className="text-xl md:text-3xl font-bold text-pink-500">
            Pet Care
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 ml-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 font-semibold"
                  : "text-gray-700 hover:text-pink-500 transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 font-semibold"
                  : "text-gray-700 hover:text-pink-500 transition"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myProfile"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 font-semibold"
                  : "text-gray-700 hover:text-pink-500 transition"
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <Link
              to="/login"
              className="bg-pink-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-500 transition"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-3 relative">
              {/* Avatar */}
              {user.photoURL ? (
                <div className="relative group">
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-pink-300"
                  />
                  <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    {user.displayName || "No Name"}
                  </span>
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center border-2 border-pink-300">
                  <span className="text-gray-700 font-semibold text-sm">
                    {user.email.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-pink-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </MyContainer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-50 px-4 pt-2 pb-4 border-t border-pink-200">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-500 transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-500 transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myProfile"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-500 transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </NavLink>
            </li>
            {!user ? (
              <li>
                <Link
                  to="/login"
                  className="bg-pink-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-500 transition block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 transition w-full"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
