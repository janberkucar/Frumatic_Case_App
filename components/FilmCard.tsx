import Link from "next/link";
import React from "react";
import Film from "../utils/interfaces/Film";

const FilmCard = (film: Film) => {
  return (
    <div key={film?.id} className="">
      <Link href={`film//${film?.id}`}>
        <a>
          <h3>Title: {film?.title}</h3>
          <h3>Overview: {film?.overview}</h3>

          <h3>Popularity: {film?.popularity}</h3>
          <h3>Vote Average: {film?.vote_average}</h3>
          <h3>Vote Count: {film?.vote_count}</h3>
          <h3>Budget: {film?.budget}</h3>

          <h3>Release Date: {film?.release_date.toLocaleDateString()}</h3>
          <h3>Created At: {film?.createdAt.toLocaleDateString()}</h3>
        </a>
      </Link>
    </div>
  );
};

export default FilmCard;
