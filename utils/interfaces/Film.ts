import Genre from "./Genre";
import Language from "./Language";

export default interface Film {
  id: string;
  createdAt?: Date;
  adult?: boolean;
  backdrop_path?: string;
  budget?: number;
  genres?: Genre[];
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: Date;
  runtime_days?: number;
  revenue?: number;
  spoken_languages?: Language[];
  status?: string;
  vote_count?: number;
  vote_average?: number;
  title?: string;
}
