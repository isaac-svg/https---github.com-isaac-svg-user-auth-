import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ClickContexProvider from "./Context/ClickContext";
import UserContextProvider from "./Context/UserContext";
import "./index.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClickContexProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </ClickContexProvider>
  </React.StrictMode>
);
