import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import logo from "../../../assets/zToys-logo.png";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const [hover, setHover] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="mx-10">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className=" flex flex-wrap items-center justify-between  p-4">
          <Link to="/" className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">
              Zap<span className="text-red-500">Zone</span>Toys
            </h2>
            <img src={logo} alt="" className=" w-20 right-0 " />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col  md:flex-row  font-medium p-4 md:p-0 mt-4 border  md:border-0 border-gray-100 rounded-lg bg-gray-50  md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="mx-4 md:my-0 ">
                <Link
                  to="/"
                  className="text-xl hover:text-cyan-500 duration-500"
                >
                  Home
                </Link>
              </li>
              <li className="mx-4 md:my-0 ">
                <Link
                  to="#"
                  className="text-xl hover:text-cyan-500 duration-500"
                >
                  About Us
                </Link>
              </li>
              <li className="mx-4 md:my-0 ">
                <Link
                  to="alltoys"
                  className="text-xl hover:text-cyan-500 duration-500"
                >
                  All Toys
                </Link>
              </li>

              {user && (
                <li className="mx-4 md:my-0 ">
                  <Link
                    to="mytoys"
                    className="text-xl hover:text-cyan-500 duration-500"
                  >
                    My Toys
                  </Link>
                </li>
              )}
              {user && (
                <li className="mx-4 md:my-0 ">
                  <Link
                    to="addatoys"
                    className="text-xl hover:text-cyan-500 duration-500"
                  >
                    Add a Toys
                  </Link>
                </li>
              )}

              <li className="mx-4 md:my-0 ">
                <Link
                  to="#"
                  className="text-xl hover:text-cyan-500 duration-500"
                >
                  Blog
                </Link>
              </li>

              <li className="mx-4 md:my-0 ">
                <Link
                  to="#"
                  className="text-xl hover:text-cyan-500 duration-500"
                >
                  Contact Us
                </Link>
              </li>
              <div className="flex items-center ml-4 md:items-end mt-4 md:mt-0">
                {user ? (
                  <>
                    <>
                      <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                      >
                        {user.photoURL ? (
                          <>
                            <img
                              src={user.photoURL}
                              alt=""
                              className="rounded-full h-10 w-10 "
                            />
                            {hover && <span>{user.displayName}</span>}
                          </>
                        ) : (
                          <FaUser className="size-8"></FaUser>
                        )}
                      </div>
                    </>

                    <button
                      onClick={handleLogOut}
                      className="px-6 ml-4 py-3 text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-red-400 to-slate-600 hover:from-teal-800 hover:to-cyan-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="px-6 ml-4 py-3 text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-red-400 to-slate-600 hover:from-teal-800 hover:to-cyan-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    Login
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </div>
        <hr />
      </nav>
    </div>
  );
};

export default Header;
