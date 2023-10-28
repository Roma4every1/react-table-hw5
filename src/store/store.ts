import { logger } from "redux-logger";
import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import filmReducer from "./reducers/filmReducer";

export const store = configureStore({
  reducer: filmReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export type AppStateType = ReturnType<typeof filmReducer>;
export type AppDispatchType = ThunkDispatch<AppStateType, null, AnyAction>;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
