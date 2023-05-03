import { createSlice } from "@reduxjs/toolkit";

const searchSubredditsSlice = createSlice({
  name: "searchSubreddit",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { updateSearchTerm, clearSearchTerm } = searchSubredditsSlice.actions;

export default searchSubredditsSlice.reducer;
