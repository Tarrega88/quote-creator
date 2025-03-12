import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: {
        materials: [],
        rentals: [],
        labor: [],
    },
    currentExpense: {
        type: "",
        name: "",
        measurementType: "",
        measurementUnit: "",
    },
};

const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addToExpenses(state, action) {
            state.expenses[state.currentExpense.type].push(action.payload);
        },
        setCurrentExpenseType(state, action) {
            console.log(state);
            console.log(action.payload);
            state.currentExpense.type = action.payload;
        },
        setCurrentExpenseName(state, action) {
            state.currentExpense.name = action.payload;
        },
        setCurrentExpenseMeasurementType(state, action) {
            state.currentExpense.measurementType = action.payload;
        },
        setCurrentExpenseMeasurementUnit(state, action) {
            state.currentExpense.measurementUnit = action.payload;
        }

    },
});

export const { addToExpenses, setCurrentExpenseType, setCurrentExpenseName, setCurrentExpenseMeasurementType, setCurrentExpenseMeasurementUnit } = expenseSlice.actions;
export default expenseSlice.reducer;