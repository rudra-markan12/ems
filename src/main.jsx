import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./Context/AuthContext.jsx";
import TaskContext from "./Context/TaskContext.jsx";
  
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
        <TaskContext>
          <App />
        </TaskContext>
      </AuthContext>
    </BrowserRouter>
  </StrictMode>
);
