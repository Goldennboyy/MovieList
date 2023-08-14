"use client";
import Image from "next/image";
import React from "react";
import { IMGPATH, Result } from "../interfaces/Movies";

export default function MovieItem(props: Result) {
  return (
    <div className="w-64 card">
      <figure className="object-cover">
        <Image
          src={IMGPATH + props.poster_path}
          alt={props.title}
          width={250}
          height={300}
        />
      </figure>
      <div className="card-body bg-slate-800/70">
        <div className="flex flex-col">
          <h2 className="text-sm card-title">{props.title}</h2>
          <div className="flex flex-row">
            <span>{props.release_date}</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
