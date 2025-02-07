import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className=" w-full p-4 shadow-md   ">
      <div className=" max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="flex justify-between items-center gap-4">
            <span className="md:hidden block " onClick={toggleMenu}>
              {isOpen ? <IoClose size={25} /> : <HiOutlineMenuAlt1 size={25} />}
            </span>
            <span>
              {" "}
              <h1 className=" font-bold text-2xl">Exclusive</h1>
            </span>
          </div>
          {/* navitems */}
          <div className="hidden md:block">
            <ul className="flex items-center font-normal text-base  py-3 gap-5 cursor-pointer">
              <li className=" px-2 border-black hover:border-b">Home</li>
              <li className=" px-2 border-black hover:border-b">Contact</li>
              <li className=" px-2 border-black hover:border-b">About</li>
              <li className=" px-2 border-black hover:border-b">Sign Up</li>
            </ul>
          </div>

          {/* leftnav  */}
          <div className="flex justify-center items-center gap-4">
            {/* searchBar */}
            <div className=" flex items-center justify-between px-4 py-2 rounded-lg text-sm bg-gray-200 gap-2">
              <input
                type="text"
                placeholder="what are you looking for?"
                className=" w-[153px] "
              />
              <IoSearchOutline />
            </div>
            {/*  */}
            <div className="hidden md:flex items-center gap-4">
              <IoMdHeartEmpty size={25} />
            </div>
            <div className="hidden md:flex items-center gap-4">
              <AiOutlineShoppingCart size={25} />
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`fixed top-0 left-0 bg-white backdrop-blur-2xl transition-all duration-300 ease-in-out overflow-hidden z-50 md:hidden ${
          isOpen ? "w-1/2 h-screen" : "w-0 h-0"
        } `}
      >
        <div className=" flex flex-col items-start px-5 ">
          <div className="cursor-pointer flex items-center justify-center gap-4 absolute top-4 left-4">
            <span>
              {" "}
              <IoClose size={25} onClick={closeMenu} />
            </span>
            <span>
              <h1 className=" font-bold text-2xl">Exclusive</h1>
            </span>
          </div>
          {/* items */}
          <div className=" absolute top-16">
            <ul>
              <li className=" ">Home</li>
              <li className="">Contact</li>
              <li className=" ">About</li>
              <li className="">Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
