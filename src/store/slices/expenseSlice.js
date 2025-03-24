import { createSlice } from "@reduxjs/toolkit";
const dummyData = {
    expenses: {
        materials: {
            fabric: {
                costInDollars: 22.7,
                expenseName: "fabric",
                expenseType: "materials",
                measurementType: "length",
                measurementUnit: "feet",
                paymentModel: "measurement",
                unitAmount: 10,
            },
            "sheet metal": {
                costInDollars: 40,
                expenseName: "sheet metal",
                expenseType: "materials",
                measurementType: "area",
                measurementUnit: "square feet",
                paymentModel: "measurement",
                unitAmount: 50,
            }
        },
        rentals: {
            Uhaul: {
                costInDollars: 25,
                expenseName: "Uhaul",
                expenseType: "rentals",
                paymentModel: "time",
                paidByThe: "day",
            }
        },
        labor: {
            "general labor": {
                costInDollars: 450,
                expenseName: "general labor",
                expenseType: "labor",
                paymentModel: "time",
                paidByThe: "day",
            },
            "flat labor": {
                costInDollars: 600,
                expenseName: "flat labor",
                expenseType: "labor",
                paymentModel: "flat",
                paidByThe: "flat",
            }
        },
    },
    currentExpense: {
        type: "",
        expenseName: "",
    },
}

const initialState = {
    // ...dummyData
    expenses: {
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
        }
    },
});

export const { addToExpenses, setCurrentExpenseType, setCurrentExpenseName, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;