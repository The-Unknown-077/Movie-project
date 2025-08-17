import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface SavedState {
  movies: Movie[];
}

const initialState: SavedState = {
  movies: [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    toggleSave: (state, action: PayloadAction<Movie>) => {
      const exists = state.movies.find(m => m.id === action.payload.id);
      if (exists) {
        state.movies = state.movies.filter(m => m.id !== action.payload.id);
      } else {
        state.movies.push(action.payload);
      }
    },
  },
});

export const { toggleSave } = savedSlice.actions;
export default savedSlice.reducer;
