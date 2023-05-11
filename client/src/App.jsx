import React from "react";

import ClickContexProvider from "./Context/ClickContext";
import UserContextProvider, { UserContext } from "./Context/UserContext";
import ProtectRoute from "./Routes/ProtectRoute";
const App = () => {
  return (
    <ClickContexProvider>
      <UserContextProvider>
        <ProtectRoute />
      </UserContextProvider>
    </ClickContexProvider>
  );
};

export default App;
