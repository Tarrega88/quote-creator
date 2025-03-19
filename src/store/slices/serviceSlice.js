import { createSlice } from "@reduxjs/toolkit";

const dummyData = {
    services: {
        installation: {
            "French drain installation": {
                measurementType: "area",
                measurementUnit: "square_feet",
                pay: 500,
                paymentModel: "measurement",
                serviceCategory: "installation",
                serviceName: "French drain installation",
                unitAmount: 2
            }
        }
    },
    current: {
        serviceCategory: "",
        serviceName: "",
    },
    allServiceNames: {
        "French drain installation": true,
    },
};

const initialState = {
    ...dummyData
    // services: {},
    // current: {
    //     serviceCategory: "",
    //     serviceName: "",
    // },
    // allServiceNames: {},
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
            state.allServiceNames[state.current.serviceName] = true;
        }
    },
});

export const { setServiceCategory, setServiceName, addCategory, addService } = serviceSlice.actions;
export default serviceSlice.reducer;