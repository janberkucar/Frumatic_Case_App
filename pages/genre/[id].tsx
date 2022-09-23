import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import GenrePageContent from "../../components/GenrePageContent";
import { trpc } from "../../utils/trpc";
import { prisma } from "../../db/client";
import { Film } from "../../utils/interfaces";

const GenrePage: React.FC<{ films: Film[] }> = ({ films }) => {
  const { query } = useRouter();
  const { id } = query;

  if (!id || typeof id !== "string") {
    return <div>No Genre ID</div>;
  }

  return <GenrePageContent id={id} films={films as Film[]} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const filmData = await prisma.film.findMany();

  return {
    props: {
      films: JSON.stringify(filmData),
    },
  };
};

export default GenrePage;
