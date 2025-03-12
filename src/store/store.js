import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";
import quoteReducer from "./slices/quoteSlice";
import clientReducer from "./slices/clientSlice";
import expenseReducer from "./slices/expenseSlice";
import measurementReducer from "./slices/measurementSlice";

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
        expense: expenseReducer,
        measurement: measurementReducer,
    },
    preloadedState: persistedState,
});

// ✅ Log Redux state updates
if (ipcRenderer) {
    store.subscribe(() => {
        const currentState = store.getState();
        ipcRenderer.send('save-state', currentState);
    });
}


export default store;
