import { useRouter } from "next/router";
import { Film } from "../utils/interfaces";
import { trpc } from "../utils/trpc";
import FilmCard from "./FilmCard";
import Genres from "./Genres";
import Loader from "./Loader";

const GenrePageContent: React.FC<{ id: string; films: Film[] }> = ({
  id,
  films,
}) => {
  const { data, isLoading, error } = trpc.useQuery(["genres.getById", { id }]);
  console.log(films);
  if (!isLoading && !data) {
    return <div>Genre not found</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {/* {films.map((film: Film, index: any) => (
            <FilmCard key={index} film={film} />
          ))} */}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            {/* <Genres genres={data as Genre[]} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenrePageContent;
