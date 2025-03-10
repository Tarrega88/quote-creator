import { createSlice } from "@reduxjs/toolkit";

const initialState = { prevPage: "/", currPage: "/" };

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setPrevPage(state, action) {
            state.prevPage = action.payload;
        },
        setCurrPage(state, action) {
            state.currPage = action.payload;
        }
    },
});

export const { setCurrPage, setPrevPage } = pageSlice.actions;
export default pageSlice.reducer;