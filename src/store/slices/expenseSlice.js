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
            //TODO 3/16/2025: before this happens^, delete the references to this expense in the service slice
        },
        addServiceName(state, action) {
            state.expenses[action.payload.expenseType][action.payload.expenseName].appliedTo[action.payload.serviceName] = true;
        },
        removeServiceName(state, action) {
            delete state.expenses[action.payload.expenseType][action.payload.expenseName].appliedTo[action.payload.serviceName];
        }
    },
});

export const { addToExpenses, setCurrentExpenseType, setCurrentExpenseName, deleteExpense, addServiceName, removeServiceName } = expenseSlice.actions;
export default expenseSlice.reducer;