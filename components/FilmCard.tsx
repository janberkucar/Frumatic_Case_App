import moment from "moment";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Film } from "../utils/interfaces/index";

const FilmCard: NextPage<{ film: Film }> = ({ film }) => {
  return (
    // <Link href={`film//${film?.id}`}>
    //   <a>
    //     <h3>Title: {film?.title}</h3>
    //     <h3>Overview: {film?.overview}</h3>

    //     <h3>Popularity: {film?.popularity}</h3>
    //     <h3>Vote Average: {film?.vote_average}</h3>
    //     <h3>Vote Count: {film?.vote_count}</h3>
    //     <h3>Budget: {film?.budget}</h3>

    //     <h3>Release Date: {film?.release_date.toLocaleDateString()}</h3>
    //     <h3>Created At: {film?.createdAt.toLocaleDateString()}</h3>
    //   </a>
    // </Link>

    <div key={film?.id} className="">
      <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md pb-80 mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={film?.poster_path}
            alt=""
            className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>

        <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          <Link href={`/film/${film?.id}`}>{film?.title}</Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {film?.popularity}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(film?.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
          {film?.overview}
        </p>
        <div className="text-center">
          <Link href={`/film/${film.id}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Continue Looking
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
