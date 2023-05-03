import { configureStore } from "@reduxjs/toolkit";
import searchSubredditsSliceReducer from "../Components/features/searchSubredditsSlice";
import subredditDetailsSliceReducer from "../Components/features/subredditDetailsSlice";


const store = configureStore({
  reducer: {
    searchSubreddit: searchSubredditsSliceReducer,
    subredditDetails: subredditDetailsSliceReducer,
  },
});

export default store;
