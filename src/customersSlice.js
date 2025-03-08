import { createSlice } from "@reduxjs/toolkit";


/*
from quoteSlice:

const initialState = {
    customer: "",
    quoteNumber: 0,
    total: 0,
    quote: [],
};

what if we did this instead:

{ [customerName]:
    [{
        customer: "",
        quoteNumber: 0,
        total: 0,
        quote: [],
},

]
}
*/

const initialState = {
    customers: {},
};


//might make it so customerData isn't updated until the quote is confirmed to be done - but maybe not?
const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        // addCustomer(state, action) {
        //     const customer = action.payload;
        //     if (state.customers[customer]) {
        //         console.log("Customer already exists");
        //     }
        //     state.customers[customer] = true;
        //     // state.customerData.push();
        // },
        updateCustomer(state, action) {
            const customer = action.payload;
            if (state.customers[customer]) {
                state.customers[customer].push({ customer, quoteNumber: state.customers[customer].length + 1, total: 0, quote: [], });
            } else {
                state.customers[customer] = [{
                    customer: customer,
                    quoteNumber: 1,
                    total: 0,
                    quote: [],
                },]
            }
        }
    },
});

export const { updateCustomer } = customersSlice.actions;
export default customersSlice.reducer;