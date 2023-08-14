"use client";
import React from "react";
import { Result } from "../interfaces/Movies";

export default function votingColor(props: Result) {
  let classColor = "";

  if (props.vote_average >= 8) {
    classColor = "text-green-500";
  } else if (props.vote_average >= 5) {
    classColor = "text-orange-500";
  } else {
    classColor = "text-red-500";
  }
  return (
    <div className={`${classColor} font-bold`}>
      <span>{props.vote_average}</span>
    </div>
  );
}
