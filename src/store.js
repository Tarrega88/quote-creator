import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobs/jobSlice";
import quoteReducer from "./quoteSlice";
import customerReducer from "./customersSlice";


const store = configureStore({
    reducer: { job: jobReducer, quote: quoteReducer, customer: customerReducer },
});

export default store;