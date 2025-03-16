import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: {},
    // categories: [],
    current: {
        serviceCategory: "",
        serviceName: "",
        serviceExpenses: {
            materials: {},
            rentals: {},
            labor: {},
        },
        serviceCharges: {},
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
        // pushToServiceExpenses(state, action) {
        //     state.current.serviceExpenses[action.payload.expenseType].push(...action.payload.expenses)
        // },
        addToServiceExpenses(state, action) {
            const toAdd = Object.fromEntries(action.payload.expenses.map(e => [e, true]));
            state.current.serviceExpenses[action.payload.expenseType] = { ...state.current.serviceExpenses[action.payload.expenseType], ...toAdd }
        },
        // pushToServiceCosts(state, action) {
        //     state.current.serviceCosts.push(action.payload);
        // },
        addCategory(state, action) {
            state.services[action.payload] = {};
        },
        addService(state, action) {
            state.services[state.current.serviceCategory].push(action.payload);
        },
        addPreliminaryData(state, action) {
            state.services[action.payload.category] = { ...state.services[action.payload.category], ...action.payload.data };
        },
        addServiceCharge(state, action) {

        }
    },
});

export const { setServiceCategory, setServiceName, addCategory, addService, addToServiceExpenses, addPreliminaryData, addServiceCharge } = serviceSlice.actions;
export default serviceSlice.reducer;