import { createSlice } from "@reduxjs/toolkit";

const subredditDetailsSlice = createSlice({
    name: 'subredditDetails',
    initialState: {
        subArray: [],
        selectedSubName: '',
        selectedSubImg: '',
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
        },

        updateSelectedImg: (state, action) => {
            state.selectedSubImg = action.payload
        }
    }
})

export const { updateDetails, updatePosts, updateSelectedName, updateSelectedImg } = subredditDetailsSlice.actions;

export default subredditDetailsSlice.reducer;