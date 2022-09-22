import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const GenrePageContent: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = trpc.useQuery(["genres.getById", { id }]);

  if (!isLoading && !data) {
    return <div>Genre not found</div>;
  }

  return <div>{data?.name}</div>;
};

const GenrePage = () => {
  const { query } = useRouter();
  const { id } = query;

  if (!id || typeof id !== "string") {
    return <div>No Genre ID</div>;
  }

  return <GenrePageContent id={id} />;
};

export default GenrePage;
