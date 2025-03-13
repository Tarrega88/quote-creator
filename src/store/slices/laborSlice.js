import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenseName: "",
    cost: 0,
    timeType: "",
    timePerCost: 0,
};

const laborSlice = createSlice({
    name: "labor",
    initialState,
    reducers: {
        setName(state, action) {
            state.expenseName = action.payload;
        },
        setCost(state, action) {
            state.cost = action.payload;
        },
        setTimeType(state, action) {
            state.timeType = action.payload;
        },
        // setTimePerCost(state, action) {
        //     state.timePerCost = action.payload;
        // }
    },
});

export const { setName, setCost, setTimeType } = laborSlice.actions;
export default laborSlice.reducer;