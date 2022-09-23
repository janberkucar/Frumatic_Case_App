import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Genre } from "../utils/interfaces";

const Genres: NextPage<{ genres: Genre[] }> = ({ genres }) => {
  // const [genres, setGenres] = useState([]);
  // useEffect(() => {
  //   getGenres().then((newGenres) => {
  //     setGenres(newGenres);
  //   });
  // }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Genres</h3>
      {genres.map((genre, index) => (
        <Link key={index} href={`/genre/${genre.genre_id}`}>
          <span
            className={`cursor-pointer block ${
              index === genres.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3`}
          >
            {genre.name.toUpperCase()}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Genres;
