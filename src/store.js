import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobs/jobSlice";
import quoteReducer from "./quoteSlice";

const store = configureStore({
    reducer: { job: jobReducer, quote: quoteReducer },
});

export default store;