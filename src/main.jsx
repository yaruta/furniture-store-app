/**
 * Entry point of the React application.
 * 
 * This file initializes the React application and renders the root component.
 */

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.js";

/**
 * Creates the root React element and renders the application inside it.
 * Wraps the application with the Redux provider to enable global state management.
 */
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
