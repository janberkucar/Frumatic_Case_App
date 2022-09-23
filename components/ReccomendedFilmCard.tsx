import React from "react";
import moment from "moment";
import Link from "next/link";
import { Film } from "../utils/interfaces";

const ReccomendedFilmCard: React.FC<{ film: Film; position: any }> = ({
  film,
  position,
}) => {
  return (
    <div>
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-9/12 h-72"
        style={{ backgroundImage: `url('${film?.poster_path}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-9/12 h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-9/12 h-full">
        <p className="text-black text-shadow font-semibold text-xs">
          {moment(film?.createdAt).format("MMM DD, YYYY")}
        </p>
        <p className="text-black text-shadow font-semibold text-2xl text-center">
          {film?.title}
        </p>
      </div>
      <Link href={`/film/${film?.id}`}>
        <span className="z-10 cursor-pointer absolute w-full h-full" />
      </Link>
      {position === "LEFT" && (
        <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 left-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 text-black w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
      )}
      {position === "RIGHT" && (
        <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 right-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 text-black w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
export default ReccomendedFilmCard;
