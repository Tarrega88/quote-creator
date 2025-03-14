import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenseName: "",
    measurementType: "",
    measurementUnit: "",
};

const materialSlice = createSlice({
    name: "material",
    initialState,
    reducers: {
        setMaterialName(state, action) {
            state.expenseName = action.payload;
        },
        setMeasurementType(state, action) {
            state.measurementType = action.payload;
        },
        setMeasurementUnit(state, action) {
            state.measurementUnit = action.payload;
        }
    },
});

export const { setMaterialName, setMeasurementType, setMeasurementUnit } = materialSlice.actions;
export default materialSlice.reducer;