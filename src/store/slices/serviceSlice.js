import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: {},
    current: {
        serviceCategory: "",
        serviceName: "",
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
        addCategory(state, action) {
            state.services[action.payload] = {};
        },
        addService(state, action) {
            state.services[state.current.serviceCategory][state.current.serviceName] = action.payload;
        }
    },
});

export const { setServiceCategory, setServiceName, addCategory, addService } = serviceSlice.actions;
export default serviceSlice.reducer;