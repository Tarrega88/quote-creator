import { configureStore } from "@reduxjs/toolkit";
//example: import uiReducer from "./ui/uiSlice";
import jobReducer from "./jobs/jobSlice"

const store = configureStore({
reducer: { job: jobReducer }, //example: { ui: uiReducer }
});

export default store;