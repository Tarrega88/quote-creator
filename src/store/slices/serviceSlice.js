import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: {},
    // categories: [],
    current: {
        serviceCategory: "",
        serviceName: "",
        serviceExpenses: {
            // materials: [],
            // rentals: [],
            // labor: [],
            materials: {},
            rentals: {},
            labor: {},
        },
        serviceCosts: [],
    }
};

const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        setServiceCategory(state, action) {
            state.current.serviceCategory = action.payload;
        },
        setServiceName(state, action) {
            state.current.serviceName = action.payload;
        },
        pushToServiceExpenses(state, action) {
            //might delete this one and change to object version
            state.current.serviceExpenses[action.payload.expenseType].push(...action.payload.expenses)
        },
        addToServiceExpenses(state, action) {
            const toAdd = Object.fromEntries(action.payload.expenses.map(e => [e, true]));
            state.current.serviceExpenses[action.payload.expenseType] = { ...state.current.serviceExpenses[action.payload.expenseType], ...toAdd }
        },
        pushToServiceCosts(state, action) {
            state.current.serviceCosts.push(action.payload);
        },
        addCategory(state, action) {
            state.services[action.payload] = [];
        },
        addService(state, action) {
            state.services[state.current.serviceCategory].push(action.payload);
        }
    },
});

export const { setServiceCategory, setServiceName, pushToServiceExpenses, pushToServiceCosts, addCategory, addService, addToServiceExpenses } = serviceSlice.actions;
export default serviceSlice.reducer;