import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-800 text-white">
      <nav className="container w-11/12 mx-auto flex justify-between items-center py-3">
        <div>
          <Link to="/">Study Trend</Link>
        </div>

        <div className="hidden lg:block text-[20px] absolute lg:static">
          <ul className="flex">
            <li className="mr-4">Home</li>
            <li className="mr-4">Courses</li>
            <li className="mr-4">Blogs</li>
            <li className="mr-4">FAQ</li>
            <li className="mr-4">Contact Us</li>
          </ul>
        </div>

        <div className="flex items-center">
          <button className="btn btn-sm btn-outline btn-success mr-2">
            Login
          </button>
          <button className="btn btn-sm btn-outline btn-success">
            Register
          </button>
          <div
            className="lg:hidden ml-2 text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaRegWindowClose /> : <FaBars />}
          </div>
        </div>
      </nav>
        <div className={`bg-gray-300 lg:hidden absolute flex flex-col text-black items-start pl-5 py-3 font-semibold text-[20px] w-[100%] text ${open ? "top-[55px]" : "top-[-250px]"}`}>
          <Link to='/home' className="mb-2 placeholder:">Home</Link>
          <Link to='/courses' className="mb-2 ">Courses</Link>
          <Link to='/blogs' className="mb-2 ">Blogs</Link>
          <Link to='/blogs' className="mb-2">FAQ</Link>
          <Link to='/contact' className="mb-2">Contact Us</Link>
        </div>
    </div>
  );
};

export default Navbar;
