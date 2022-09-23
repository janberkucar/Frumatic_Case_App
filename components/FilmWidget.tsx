import moment from "moment";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Film } from "../utils/interfaces";

const FilmWidget: NextPage<{ films: Film[] }> = ({ films }) => {
  const [relatedFilms, setRelatedFilms] = useState([]);

  // useEffect(() => {
  //   if (filmId) {
  //     getSimilarfilms(categories, filmId).then((result) => {
  //       setRelatedfilms(result);
  //     });
  //   } else {
  //     getRecentfilms().then((result) => {
  //       setRelatedfilms(result);
  //     });
  //   }
  // }, [filmId]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {/* {filmId ? "Related films" : "Recent films"} */}
        Related films
      </h3>
      {films.map((film, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={film.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={film.poster_path as any}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(film.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/film/${film.id}`} className="text-md" key={index}>
              {film.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmWidget;
