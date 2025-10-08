import React from "react";
import logoImg from "../assets/logo.png";
import { Link } from "react-router";
import githubImg from "../assets/github.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <div className="flex btn btn-ghost text-xl">
          <img src={logoImg} alt="" className="h-[40px] ml-5" />
          <a className="text-purple-600">HERO.IO</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/home" className="ml-2 text-purple-600 font-semibold">
            Home
          </Link>
          <Link to="/apps" className="ml-2 font-semibold">
            Apps
          </Link>
          <Link to="/installation" className="ml-2 font-semibold">
            Installation
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn  bg-linear-65 from-[#632EE3] to-[#9F62F2] text-white">
          <a href="https://github.com/Mahidi-Hasan-Supon" target="_blank">
          <img src={githubImg} className="h-[20px]  w-[20px]" alt="" />
          </a>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
