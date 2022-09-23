import Film from "./Film";

export default interface Language {
  language: string;
  film?: Film;
  filmId: string;
}
