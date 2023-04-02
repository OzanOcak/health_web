import React from "react";

function Navbar() {
  return (
    <div className="flex w-full items-center justify-between h-30 md:h-20  bg-slate-700 bg-opacity-0 px-4 absolute z-10 delay-500 top-0">
      {/* Logo */}
      <div className="text-white text-3xl uppercase top-0">My Site</div>
      {/* Links */}
      <div className="md:flex  items-center justify-center text-white text-xl gap-[4rem]  ">
        <a href="#" className="group text-white transition duration-300">
          Home
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white rounded-xl"></span>
        </a>
        <a href="#" className="group text-white transition duration-300">
          Service
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white rounded-xl"></span>
        </a>
        <a href="#" className="group text-white transition duration-300">
          About
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white rounded-xl"></span>
        </a>
        <a
          href="#"
          className="border md:border-4 px-2 rounded-xl border-white hover:bg-white hover:text-black "
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
