import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainCategory: "expenses",
    subCategory: "",
    selection: "",
    tempData: {},
    // currentMultiple: 1,
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
        // setCurrentMultiple(state, action) {
        //     state.currentMultiple = action.payload;
        // }
    },
});

export const { setMainCategory, setSubCategory, setSelection, setTempData } = columnSlice.actions;
export default columnSlice.reducer;