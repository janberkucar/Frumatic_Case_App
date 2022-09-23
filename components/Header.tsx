import React, { useState, useEffect } from "react";

import Link from "next/link";
import { Genre } from "../utils/interfaces";
import { NextPage } from "next";

const Header: NextPage<{ genres: Genre[] }> = ({ genres }) => {
  //   useEffect(() => {
  //     getGenres().then((newGenres) => {
  //       setGenres(newGenres);
  //     });
  //   }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-purple-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-gray-500">
              Seashore Theatre
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {genres.map((genre: any, index: number) => (
            <Link key={index} href={`/genre/${genre?.genre_id}`}>
              <span className="md:float-right mt-2 align-middle text-purple-500 ml-4 font-semibold cursor-pointer">
                {genre?.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
