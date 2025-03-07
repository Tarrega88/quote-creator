import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0,
    quotes: []
};

const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
        setTotal(state, action) {
            state.total += action.payload;
        },
        addQuote(state, action) {
            state.quotes.push(action.payload);
        }
    },
});

export const { setTotal, addQuote } = quoteSlice.actions;
export default quoteSlice.reducer;