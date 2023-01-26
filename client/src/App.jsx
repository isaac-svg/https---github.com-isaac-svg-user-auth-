import React, { useContext, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Page } from "./components/Page";
import ClickContexProvider from "./Context/ClickContext";
import UserContextProvider, { UserContext } from "./Context/UserContext";
import ProtectRoute from "./Routes/ProtectRoute";
const App = () => {
  return (
    <ClickContexProvider>
      <UserContextProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectRoute />}>
            <Route path="/" element={<Page />} exact />
          </Route>
        </Routes>
      </UserContextProvider>
    </ClickContexProvider>
  );
};

export default App;
