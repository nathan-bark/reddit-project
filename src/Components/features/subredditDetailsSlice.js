import { createSlice } from "@reduxjs/toolkit";

const subredditDetailsSlice = createSlice({
    name: 'subredditDetails',
    initialState: {
        subArray: []
    },
    reducers: {
        updateDetails: (state, action) => {
            state.subArray = action.payload
        }
    }
})

export const { updateDetails } = subredditDetailsSlice.actions;

export default subredditDetailsSlice.reducer;