"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useQuery } from "react-query";
import { MovieApi } from "../interfaces/Movies";
import MovieItem from "./MovieItem";

function Navbar() {
  const [search, setSearch] = useState<string>("");

  const apiKey = "89d6c10c1df79dfb6a461aeae58d5c5c";

  const { data: movies, isLoading } = useQuery("search", async () => {
    if (!search) return [];
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
    );
    const jsonData = res.json() as unknown as MovieApi;

    console.log(jsonData);

    return jsonData.results;
  });

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <nav
      className="md:flex md:flex-row sm:flex-col h-full w-full  sm:justify-center py-8
     text-center md:justify-evenly  bg-[#1d232a]  border-b border-b-black "
    >
      <div className="items-start justify-start text-3xl font-bold cursor-pointer md:mt-8 md:text-left sm:flex-col md:justify-start md:flex md:flex-row ">
        <Link href={""}>
          Movi<span className="text-red-600 ">List</span>
        </Link>
      </div>
      <div className="md:mt-[42px] md:flex px-2 justify-end items-end mb-5 ">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies..."
            className="md:h-[25px] h-[5px] rounded-md mt-2 md:mt-0 p-4 bg-gray-800 text-white focus:outline-none"
          />
        </form>
        <BsSearch size={15} className="md:mb-[8px] ml-3 hidden md:block" />
      </div>
      {/* <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {movies?.map((movie, index) => {
              <MovieItem key={index} {...movie} />;
            })}
          </>
        )}
      </> */}
    </nav>
  );
}

export default Navbar;
