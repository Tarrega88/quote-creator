import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobs/jobSlice";
import quoteReducer from "./quoteSlice";
import clientReducer from "./clientSlice";
import pageReducer from "./pages/pageSlice";
import expenseReducer from "./pages/expenses/expenseSlice";

const { ipcRenderer } = window?.electron || {}; // Prevent errors in non-Electron environments

let persistedState = {};
if (ipcRenderer) {
    persistedState = ipcRenderer.sendSync('load-state');
}

const store = configureStore({
    reducer: {
        job: jobReducer,
        quote: quoteReducer,
        client: clientReducer,
        page: pageReducer,
        expense: expenseReducer
    },
    preloadedState: persistedState,
});

// ✅ Log Redux state updates
if (ipcRenderer) {
    store.subscribe(() => {
        const currentState = store.getState();
        console.log("📢 Sending Redux state to main process:", currentState);
        ipcRenderer.send('save-state', currentState);
    });
}


export default store;
