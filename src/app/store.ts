import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "../features/bookmark/redux/saved";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("savedMovies");
  if (data) {
    return { saved: JSON.parse(data) };
  }
  return undefined;
};

const saveToLocalStorage = (state: any) => {
  localStorage.setItem("savedMovies", JSON.stringify(state.saved));
};

export const store = configureStore({
  reducer: {
    saved: savedReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
