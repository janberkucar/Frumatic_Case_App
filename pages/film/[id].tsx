import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import FilmPageContent from "../../components/FilmPageContent";
import { Genre } from "../../utils/interfaces";
import { trpc } from "../../utils/trpc";
import { prisma } from "../../db/client";

const FilmPage: React.FC<{ genres: Genre[] }> = ({ genres }) => {
  const { query } = useRouter();
  const { id } = query;

  if (!id || typeof id !== "string") {
    return <div>No Film ID</div>;
  }

  return <FilmPageContent id={id} genres={genres} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const genreData = await prisma.genre.findMany();

  return {
    props: {
      genres: JSON.stringify(genreData),
    },
  };
};

export default FilmPage;
