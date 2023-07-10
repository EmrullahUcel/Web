import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import i18n from "./i18n.js";
import "./index.css";





ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
 
);
