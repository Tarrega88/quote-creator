import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customer: "",
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
            state.customer = action.payload;
            state.quoteNumber++;
        }
    },
});

export const { setTotal, addQuote, createQuote } = quoteSlice.actions;
export default quoteSlice.reducer;