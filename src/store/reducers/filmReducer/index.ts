import { Action, Reducer } from "@reduxjs/toolkit";
import { Film } from "../../../models/Film";
import { films } from "../../../data/films";

type FilmReducerType = {
  films: Film[];
};

const defaultState: FilmReducerType = {
  films: films,
};

const filmReducer: Reducer<FilmReducerType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case "SET_FILMS":
      return {
        ...state,
        films: action.films,
      };
    default:
      return state;
  }
};
export default filmReducer;
