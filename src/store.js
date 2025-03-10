import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobs/jobSlice";
import quoteReducer from "./quoteSlice";
import clientReducer from "./clientSlice";
import pageReducer from "./pages/pageSlice";


const store = configureStore({
    reducer: { job: jobReducer, quote: quoteReducer, client: clientReducer, page: pageReducer },
});

export default store;