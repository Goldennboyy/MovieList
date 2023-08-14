import React from "react";
import { useQuery } from "react-query";
import { MovieApi, Result } from "../interfaces/Movies";
import MovieItem from "./MovieItem";

export default function Movies() {
  const apiKey = "89d6c10c1df79dfb6a461aeae58d5c5c";
  const { data: movies, isLoading } = useQuery("movies", async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    if (!res.ok) {
      throw new Error("Something went bad...");
    }

    const jsonData = (await res.json()) as unknown as MovieApi;
    return jsonData.results;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container items-center justify-center p-8 mx-auto gap-y-4 md:gap-8 md:grid sm:flex sm:flex-col md:grid-cols-4">
      {movies?.map((movie, index) => {
        return <MovieItem key={index} {...movie} />;
      })}
    </div>
  );
}
