import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 
import { ThemeProvider } from "@material-tailwind/react";
// react router
import {
    BrowserRouter
  } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ThemeProvider>
            <App />
            </ThemeProvider>
        </React.StrictMode>
    </BrowserRouter>
);