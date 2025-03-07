import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobType: "",

};

const jobSlice = createSlice({
name: "job",
initialState,
reducers: {
    setJobType(state, action) {
        state.jobType = action.payload;
    }
},
});

export const { setJobType } = jobSlice.actions;
export default jobSlice.reducer;