import Film from "./Film";

export default interface Genre {
  genre_id: string;
  film?: Film;
  filmdId?: string;
  name: string;
}
