import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    client: false,
    quoteNumber: 0,
    total: 0,
    quote: [],
};

const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
        setTotal(state, action) {
            state.total += action.payload;
        },
        addQuote(state, action) {
            state.quote.push(action.payload);
        },
        createQuote(state, action) {
            state.client = action.payload;
            state.quoteNumber++;
        }
    },
});

export const { setTotal, addQuote, createQuote } = quoteSlice.actions;
export default quoteSlice.reducer;