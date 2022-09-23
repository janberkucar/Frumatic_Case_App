import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Film, Genre } from "../utils/interfaces";
import { trpc } from "../utils/trpc";
import FilmDetail from "./FilmDetail";
import Genres from "./Genres";
import Loader from "./Loader";
import { prisma } from "../db/client";
import ReccomendedFilmCard from "./ReccomendedFilmCard";

const FilmPageContent: React.FC<{ id: string; genres: Genre[] }> = ({
  id,
  genres,
}) => {
  const { data, isLoading, error } = trpc.useQuery(["films.getById", { id }]);

  if (!isLoading && !data) {
    return <div>Film not found</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <FilmDetail film={data as Film} />
            <ReccomendedFilmCard
              film={data as Film}
              position={data?.createdAt}
            />
            {/* <CommentsForm slug={data?.id} />
            <Comments slug={data?.id} /> */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              {/* <FilmWidget
                filmId={data?.id}
                categories={data?.genres.map((genre) => genre.genre_id)}
              /> */}
              {/* <Genres genres={genres as Genre[]} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilmPageContent;
