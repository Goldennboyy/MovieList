"use client";
import Image from "next/image";
import React from "react";
import { IMGPATH, Result } from "../interfaces/Movies";
import VotingColor from "./VotingColor";

export default function MovieItem(props: Result) {
  function formatDate(date: any) {
    return new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="items-center justify-center mx-auto w-fit md:h-fit md:w-40 lg:w-72 card">
      <figure className="object-cover">
        <Image
          src={IMGPATH + props.poster_path}
          alt={props.title}
          width={280}
          height={280}
        />
      </figure>
      <div className="w-full card-body bg-slate-900/50">
        <div className="flex flex-col">
          <h2 className="text-sm card-title">{props.title}</h2>
          <div className="flex flex-row justify-between">
            <span>{formatDate(props.release_date)}</span>
            <VotingColor {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}
