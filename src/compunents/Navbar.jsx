import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import logoImg from "../assets/logo.png";
import { Link, NavLink, } from "react-router";

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
              <a>Home</a>
            </li>
            <li>
              <a>Apps</a>
            </li>
            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>

        <Link to='/home' className="flex btn btn-ghost text-xl">
          <img src={logoImg} alt="" className="h-[40px] ml-5" />
          <a className="text-purple-600">HERO.IO</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/home" className="ml-2  font-semibold">
            Home
          </NavLink>
          <NavLink to="/apps" className="ml-5 font-semibold">
            Apps
          </NavLink>
          <NavLink to="/installation" className="ml-5 font-semibold">
            Installation
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn  bg-linear-65 from-[#632EE3] to-[#9F62F2] text-white"
        href="https://github.com/Mahidi-Hasan-Supon" target="_blank">
         
        <FaGithub />
            Contribute
          </a>
        
       
      </div>
    </div>
  );
};

export default Navbar;
