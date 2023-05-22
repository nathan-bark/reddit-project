import { createSlice } from "@reduxjs/toolkit";

const postCommentsSlice = createSlice({
    name: 'postComments',
    initialState: {
        postTitle: '',
        postLink: '',
        postAuthor: '',

    }
})

