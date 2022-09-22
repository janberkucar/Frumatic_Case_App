import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const FilmPageContent: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = trpc.useQuery(["films.getById", { id }]);

  if (!isLoading && !data) {
    return <div>Film not found</div>;
  }

  return <div>{data?.title}</div>;
};

const FilmPage = () => {
  const { query } = useRouter();
  const { id } = query;

  if (!id || typeof id !== "string") {
    return <div>No Film ID</div>;
  }

  return <FilmPageContent id={id} />;
};

export default FilmPage;
