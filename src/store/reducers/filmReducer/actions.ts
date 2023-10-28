import { Film } from "../../../models/Film";

export const setFilms = (films: Film[]) => {
  return {
    type: "SET_FILMS",
    films,
  };
};
