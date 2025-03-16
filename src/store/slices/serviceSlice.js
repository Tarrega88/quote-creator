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

/* services is going to look like this:

services: {
    [someUserCreatedCategory]: {
        [someUserCreatedServiceName]:
        {
            allOtherData
        }
    }
}
*/

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
            state.services[state.current.serviceCategory][state.current.serviceName].serviceExpenses[action.payload.expenseType] =
            {
                ...state.services[state.current.serviceCategory][state.current.serviceName].serviceExpenses[action.payload.expenseType],
                [action.payload.expense]: true,
            }

        },
        removeFromServiceExpenses(state, action) {
            delete state.services[state.current.serviceCategory][state.current.serviceName].serviceExpenses[action.payload.expenseType][action.payload.expense];
        },
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

export const { setServiceCategory, setServiceName, addCategory, addService, addToServiceExpenses, addPreliminaryData, addServiceCharge, removeFromServiceExpenses } = serviceSlice.actions;
export default serviceSlice.reducer;