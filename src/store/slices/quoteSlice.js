import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // client: false,
    // quoteNumber: 0,
    total: 0,
    // job: [],
};

const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
        setTotal(state, action) {
            state.total += action.payload;
        },
        // addJob(state, action) {
        //     state.job.push(action.payload);
        // },
        // createQuote(state, action) {
        //     state.client = action.payload;
        // }
    },
});

export const { setTotal } = quoteSlice.actions;
export default quoteSlice.reducer;