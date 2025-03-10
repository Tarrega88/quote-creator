import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobs/jobSlice";
import quoteReducer from "./quoteSlice";
import clientReducer from "./clientSlice";
import pageReducer from "./pages/pageSlice";
import expenseReducer from "./pages/expenses/expenseSlice"


const store = configureStore({
    reducer: { job: jobReducer, quote: quoteReducer, client: clientReducer, page: pageReducer, expense: expenseReducer },
});

export default store;