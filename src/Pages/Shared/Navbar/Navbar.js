import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext/UserContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
    .then(() => { })
    .catch( error => console.error(error));
  }
  
  return (
    <div className="bg-slate-700 text-white sticky top-0 z-10">
      <nav className="container w-11/12 mx-auto flex justify-between items-center py-3">
        <div>
          <Link to="/" className="text-[20px]">Study Trend</Link>
        </div>

        <div className="hidden lg:block text-[20px] absolute lg:static">
            <Link to='/home' className="mr-4">Home</Link>
            <Link to='/courses' className="mr-4">Courses</Link>
            <Link to='/blogs' className="mr-4">Blogs</Link>
            <Link to='/faq' className="mr-4">FAQ</Link>
            <div onClick={() => setTheme(!theme)} className="mr-4 inline">
              {
                theme ? <button className="btn btn-sm btn-primary">Dark</button> : <button className="btn btn-sm">Light</button>
              }
            </div>
        </div>

        <div className="flex items-center">
          {
          user?.uid ? <>
          <h1 className="mr-2 hidden lg:block">{user?.displayName ? user.displayName : "No User Name"}</h1>
           {
            user.photoURL ? <img title={user?.displayName ? user.displayName : "No User Name"} style={{width: "35px"}} className='rounded-full mr-2' src={user.photoURL} alt="" />
            : <FaUser title={user?.displayName ? user.displayName : "No User Name"} className="text-white mr-2"/>
          }
          <button onClick={handleLogOut} className="btn btn-sm btn-outline btn-success ">Logout</button>
          </> 
          : <><button className="btn btn-sm btn-outline btn-success mr-2">
            <Link to='/login'>Login</Link></button>
          <button className="btn btn-sm btn-outline btn-success">
          <Link to='/register'>Register</Link></button></>
          }
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
          <Link to='/faq' className="mb-2">FAQ</Link>
          <div onClick={() => setTheme(!theme)} className="mr-4 inline">
              {
                theme ? <button className="btn btn-sm btn-primary">Dark</button> : <button className="btn btn-sm">Light</button>
              }
          </div>
        </div>
    </div>
  );
};

export default Navbar;
