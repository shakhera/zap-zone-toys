import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaUser } from "react-icons/fa";

import logo from "../../../assets/zToys-logo.png";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar h-24 mb-6 px-12">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-full flex-wrap"
        >
          <span>
            {isOpen === true ? (
              <XMarkIcon className="h-6 w-6 text-black font-bold" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black font-bold" />
            )}
          </span>
        </div>
        <div className="navbar-start  ">
          <Link to="/" className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">
              Zap<span className="text-red-500">Zone</span>Toys
            </h2>
            <img src={logo} alt="" className=" w-20 right-0 " />
          </Link>
        </div>
        <div className="navbar-center ">
          <ul
            className={`md:flex md:items-center md:z-auto md:static absolute w-full md:w-auto py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500 ${
              isOpen
                ? "opacity-100 top-[80px]"
                : "opacity-0 absolute -left-full md:left-0"
            }`}
          >
            {/* <ul
            className={`md:flex md:items-center  md:z-auto md:static absolute  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
              isOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"
            } transition-all ease-in duration-500`}
          > */}
            <li className="mx-4 md:my-0 font-bold">
              <Link to="/" className="text-xl hover:text-cyan-500 duration-500">
                Home
              </Link>
            </li>
            <li className="mx-4 md:my-0 font-bold">
              <Link to="#" className="text-xl hover:text-cyan-500 duration-500">
                About Us
              </Link>
            </li>
            <li className="mx-4 md:my-0 font-bold">
              <Link to="#" className="text-xl hover:text-cyan-500 duration-500">
                Blog
              </Link>
            </li>

            <li className="mx-4 md:my-0 font-bold">
              <Link to="#" className="text-xl hover:text-cyan-500 duration-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
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
                        className="rounded-full h-10 w-10"
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
      </div>
      <hr className="" />
    </div>
  );
};

export default Navbar;
