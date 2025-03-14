import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: {},
    // categories: [],
    current: {
        serviceCategory: "",
        serviceName: "",
        serviceExpenses: [],
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
            state.current.serviceExpenses.push(action.payload);
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

export const { setServiceCategory, setServiceName, pushToServiceExpenses, pushToServiceCosts, addCategory, addService } = serviceSlice.actions;
export default serviceSlice.reducer;