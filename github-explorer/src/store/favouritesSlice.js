import { createSlice } from "@reduxjs/toolkit";

const savedFavourites =
  localStorage.getItem("favourites");

const initialState = savedFavourites
  ? JSON.parse(savedFavourites)
  : [];

const favouritesSlice = createSlice({
  name: "favourites",

  initialState,

  reducers: {
    addFavourite: (state, action) => {
      const exists = state.some(
        (user) => user.login === action.payload.login
      );

      if (!exists) {
        state.push(action.payload);
      }

      localStorage.setItem(
        "favourites",
        JSON.stringify(state)
      );
    },

    removeFavourite: (state, action) => {
      const updated = state.filter(
        (user) => user.login !== action.payload
      );

      localStorage.setItem(
        "favourites",
        JSON.stringify(updated)
      );

      return updated;
    },
  },
});

export const {
  addFavourite,
  removeFavourite,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;