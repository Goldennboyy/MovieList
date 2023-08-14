import React from "react";
import { useQuery } from "react-query";
import { MovieApi, Result } from "../interfaces/Movies";
import MovieItem from "./MovieItem";

export default function Movies() {
  const apiKey = "89d6c10c1df79dfb6a461aeae58d5c5c";
  const { data: movies } = useQuery("movies", async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    if (!res.ok) {
      throw new Error("Something went bad...");
    }

    const jsonData = (await res.json()) as unknown as MovieApi;
    return jsonData.results;
  });

  return (
    <div className="container justify-around w-full gap-10 p-4 mx-auto mb-2 overflow-x-auto md:items-center md:gap-y-3 md:grid sm:flex sm:flex-col md:grid-cols-2 lg:grid-cols-3">
      {movies?.map((movie, index) => {
        return <MovieItem key={index} {...movie} />;
      })}
    </div>
  );
}
