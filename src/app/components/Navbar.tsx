"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  const [search, setSearch] = useState<string>();

  console.log(search);

  return (
    <nav className="flex w-full bg-[#1d232a] h-28 border-b justify-around border-b-black  relative">
      <div className="flex p-8 text-3xl font-bold cursor-pointer ">
        Movi<span className="text-red-600 ">List</span>
      </div>
      <div className="mt-[40px] flex px-2 ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="h-[25px] rounded-full p-4 bg-gray-800 text-white focus:outline-none"
        />
        <BsSearch size={20} className="mt-1.5 ml-3" />
      </div>
    </nav>
  );
}

export default Navbar;
