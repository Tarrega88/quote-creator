import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainCategory: "expenses",
    subCategory: "",
    selection: "",
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
        }
    },
});

export const { setMainCategory, setSubCategory, setSelection } = columnSlice.actions;
export default columnSlice.reducer;