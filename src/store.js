import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobs/jobSlice";
import quoteReducer from "./quoteSlice";
import clientReducer from "./clientSlice";


const store = configureStore({
    reducer: { job: jobReducer, quote: quoteReducer, client: clientReducer },
});

export default store;