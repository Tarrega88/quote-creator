import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    serviceCategory: "",
    serviceName: "",
    serviceExpenses: [],
    serviceCosts: [],
};

const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        setServiceCategory(state, action) {
            state.serviceCategory = action.payload;
        },
        setServiceName(state, action) {
            state.serviceName = action.payload;
        },
        pushToServiceExpenses(state, action) {
            state.serviceExpenses.push(action.payload);
        },
        pushToServiceCosts(state, action) {
            state.serviceCosts.push(action.payload);
        }
    },
});

export const { setServiceCategory, setServiceName, pushToServiceExpenses, pushToServiceCosts } = serviceSlice.actions;
export default serviceSlice.reducer;