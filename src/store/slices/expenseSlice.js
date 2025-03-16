import { createSlice } from "@reduxjs/toolkit";

const dumbyData = {
    expenses: {
        materials: {
            fabric: {
                appliedTo: {},
                expenseName: "fabric",
                expenseType: "materials",
                measurementType: "area",
                measurementUnit: "square feet",
                unitAmount: 40,
            },
            metal: {
                appliedTo: {},
                expenseName: "metal",
                expenseType: "materials",
                measurementType: "area",
                measurementUnit: "square feet",
                unitAmount: 60,
            }
        },
        rentals: {},
        labor: {},
    },
    currentExpense: {
        type: "",
        expenseName: "",
    },
}

const initialState = {
    ...dumbyData,
    // expenses: {
    //     materials: {},
    //     rentals: {},
    //     labor: {},
    // },
    // currentExpense: {
    //     type: "",
    //     expenseName: "",
    // },
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