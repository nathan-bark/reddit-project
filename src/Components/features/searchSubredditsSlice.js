import { createSlice } from "@reduxjs/toolkit";

const searchSubredditsSlice = createSlice({
  name: "searchSubreddit",
  initialState: {
    searchTerm: "",
    searchClicked: false,
  },
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleSearchClicked: (state) => {
      if (!state.searchClicked){
        state.searchClicked = true
      } else {
        state.searchClicked = false
      }
    }
  },
});

export const { updateSearchTerm, toggleSearchClicked } = searchSubredditsSlice.actions;

export default searchSubredditsSlice.reducer;
