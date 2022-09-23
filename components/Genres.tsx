import { NextPage } from "next";
import React from "react";
import { Genre } from "../utils/interfaces";

const Genres: NextPage<{ genres: Genre[] }> = ({ genres }) => {
  return <div>Genres</div>;
};

export default Genres;
