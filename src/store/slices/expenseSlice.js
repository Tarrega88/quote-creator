import { createSlice } from "@reduxjs/toolkit";
const dummyData = {
    expenses: {
        materials: {
            fabric: {
                costInDollars: 50,
                expenseName: "fabric",
                expenseType: "materials",
                measurementType: "area",
                measurementUnit: "square feet",
                unitAmount: 50,
            },
            "sheet metal": {
                costInDollars: 40,
                expenseName: "sheet metal",
                expenseType: "materials",
                measurementType: "area",
                measurementUnit: "square feet",
                unitAmount: 50,
            }
        },
        rentals: {
            Uhaul: {
                costInDollars: 25,
                expenseName: "Uhaul",
                expenseType: "rentals",
                paidByThe: "day",
            }
        },
        labor: {
            "general labor": {
                costInDollars: 450,
                expenseName: "general labor",
                expenseType: "labor",
                paidByThe: "day",
            }
        },
    },
    currentExpense: {
        type: "",
        expenseName: "",
    },
}

const initialState = {
    ...dummyData
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
    },
});

export const { addToExpenses, setCurrentExpenseType, setCurrentExpenseName } = expenseSlice.actions;
export default expenseSlice.reducer;