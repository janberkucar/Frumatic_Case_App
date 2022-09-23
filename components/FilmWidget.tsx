import { NextPage } from "next";
import React from "react";
import { Film } from "../utils/interfaces";

const FilmWidget: NextPage<{ films: Film[] }> = ({ films }) => {
  return <div>FilmWidget</div>;
};

export default FilmWidget;
