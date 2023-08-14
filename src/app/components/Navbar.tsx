"use client";
import React from "react";

function Navbar() {
  return (
    <nav className="flex w-full bg-[#1d232a] h-28 border-b justify-around border-b-black  relative">
      <div className="flex p-8 text-3xl font-bold cursor-pointer ">
        Movi<span className="text-red-600 ">List</span>
      </div>
      <div className="mt-[40px] ">
        <input
          type="text"
          placeholder="Search movies..."
          className="h-[25px] rounded-full p-4 bg-gray-800 text-white focus:outline-none"
        />
      </div>
    </nav>
  );
}

export default Navbar;
