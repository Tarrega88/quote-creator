import { createSlice } from "@reduxjs/toolkit";

const dumbyData = {
    services: {
        installations: {
            "french drain installation": {
                complete: false,
                serviceCharges: {},
                serviceExpenses: {
                    materials: { fabric: true },
                    rentals: {},
                    labor: {},
                },
            }
        }
    },
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
}

const initialState = {
    ...dumbyData,
    // services: {},
    // current: {
    //     serviceCategory: "",
    //     serviceName: "",
    //     serviceExpenses: {
    //         materials: {},
    //         rentals: {},
    //         labor: {},
    //     },
    //     serviceCharges: {},
    // }
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
        addToServiceExpenses(state, action) {
            state.services[state.current.serviceCategory][state.current.serviceName].serviceExpenses[action.payload.expenseType] =
            {
                ...state.services[state.current.serviceCategory][state.current.serviceName].serviceExpenses[action.payload.expenseType],
                [action.payload.expense]: true,
            }
        },
        removeFromServiceExpenses(state, action) {

            delete state.services[action.payload.serviceCategory][action.payload.serviceName].serviceExpenses[action.payload.expenseType][action.payload.expense];
        },
        addPreliminaryData(state, action) {
            state.services[action.payload.category] = { ...state.services[action.payload.category], ...action.payload.data };
        },
        addServiceCharge(state, action) {

        },

    },
});

export const { setServiceCategory, setServiceName, addToServiceExpenses, addPreliminaryData, addServiceCharge, removeFromServiceExpenses } = serviceSlice.actions;
export default serviceSlice.reducer;