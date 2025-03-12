import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "",
    unit: "",
};

const measurementSlice = createSlice({
    name: "measurement",
    initialState,
    reducers: {
        setType(state, action) {
            state.type = action.payload;
        },
        setUnit(state, action) {
            state.unit = action.payload;
        }
    },
});

export const { setType, setUnit } = measurementSlice.actions;
export default measurementSlice.reducer;