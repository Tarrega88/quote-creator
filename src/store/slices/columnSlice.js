import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainCategory: "services",
    subCategory: "",
    selection: "",
    tempData: {},
};

const columnSlice = createSlice({
    name: "column",
    initialState,
    reducers: {
        setMainCategory(state, action) {
            state.mainCategory = action.payload;
        },
        setSubCategory(state, action) {
            state.subCategory = action.payload;
        },
        setSelection(state, action) {
            state.selection = action.payload;
        },
        setTempData(state, action) {
            state.tempData = action.payload;
        },
    },
});

export const { setMainCategory, setSubCategory, setSelection, setTempData } = columnSlice.actions;
export default columnSlice.reducer;