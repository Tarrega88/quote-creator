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
        }

    },
});

export const { addToExpenses, setCurrentExpenseType, setCurrentExpenseName } = expenseSlice.actions;
export default expenseSlice.reducer;