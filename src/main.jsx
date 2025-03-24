import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Buffer } from "buffer";

// import './index.css'
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

window.Buffer = Buffer;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
