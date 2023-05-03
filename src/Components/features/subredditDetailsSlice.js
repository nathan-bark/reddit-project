import { createSlice } from "@reduxjs/toolkit";

const subredditDetailsSlice = createSlice({
    name: 'subredditDetails',
    initialState: {
        displayName: '', //display_name_prefixed r/name
        description: '', //public_description
    },
    reducers: {
        updateDetails: (state, action) => {
            state.displayName = action.payload.display_name
            state.description = action.payload.description
        }
    }
})

export const { updateDetails } = subredditDetailsSlice.actions;

export default subredditDetailsSlice.reducer;