import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenseName: "",
    cost: 0,
    timeType: "",
};

const rentalSlice = createSlice({
    name: "rental",
    initialState,
    reducers: {
        setRentalName(state, action) {
            state.expenseName = action.payload;
        },
        setRentalCost(state, action) {
            state.cost = action.payload;
        },
        setRentalTimeType(state, action) {
            state.timeType = action.payload;
        }
    },
});

export const { setRentalName, setRentalCost, setRentalTimeType } = rentalSlice.actions;
export default rentalSlice.reducer;