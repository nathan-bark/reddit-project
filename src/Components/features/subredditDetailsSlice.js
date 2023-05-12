import { createSlice } from "@reduxjs/toolkit";

const subredditDetailsSlice = createSlice({
    name: 'subredditDetails',
    initialState: {
        subArray: [],
        selectedSubName: '',
        subPosts: [],
    },
    reducers: {
        updateDetails: (state, action) => {
            state.subArray = action.payload
        },
        updatePosts: (state, action) => {
            state.subPosts = action.payload
        },
        updateSelectedName: (state, action) => {
            state.selectedSubName = action.payload
        }
    }
})

export const { updateDetails, updatePosts, updateSelectedName } = subredditDetailsSlice.actions;

export default subredditDetailsSlice.reducer;