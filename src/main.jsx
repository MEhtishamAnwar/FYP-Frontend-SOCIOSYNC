import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ToastProvider } from "./context/ToastContext.jsx";
import { initializeAuthData } from "./utils/initializeAuthData.js";

// Initialize demo accounts on app start
initializeAuthData();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
  </StrictMode>,
);
