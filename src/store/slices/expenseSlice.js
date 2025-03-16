import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: {
        // materials: [],
        // rentals: [],
        // labor: [],
        materials: {},
        rentals: {},
        labor: {},
    },
    currentExpense: {
        type: "",
        expenseName: "",
    },
};

const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addToExpenses(state, action) {
            // state.expenses[action.payload.expenseType].push(action.payload);
            state.expenses[action.payload.expenseType] = { ...state.expenses[action.payload.expenseType], [action.payload.expenseName]: action.payload }
        },
        setCurrentExpenseType(state, action) {
            state.currentExpense.type = action.payload;
        },
        setCurrentExpenseName(state, action) {
            state.currentExpense.expenseName = action.payload;
        },
        deleteExpense(state, action) {
            delete state.expenses[action.payload.expenseType][action.payload.expenseName];
            //TODO: REWRITE THIS TO WORK WITH OBJECTS INSTEAD OF ARRAYS
            // const indexToRemove = state.expenses[action.payload.expenseType].findIndex(e => e.expenseName === action.payload.expenseName);
            // state.expenses[action.payload.expenseType].splice(indexToRemove, 1);
        }
    },
});

export const { addToExpenses, setCurrentExpenseType, setCurrentExpenseName, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;