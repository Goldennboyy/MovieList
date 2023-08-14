"use client";
import Image from "next/image";
import React from "react";
import { IMGPATH, Result } from "../interfaces/Movies";
import VotingColor from "./VotingColor";

export default function MovieItem(props: Result) {
  return (
    <div className="w-72 card">
      <figure className="object-fill">
        <Image
          src={IMGPATH + props.poster_path}
          alt={props.title}
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body bg-slate-900/50">
        <div className="flex flex-col">
          <h2 className="text-sm card-title">{props.title}</h2>
          <div className="flex flex-row justify-between">
            <span>{props.release_date}</span>
            <VotingColor {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}
