import React, { useContext, useState } from "react";
import Auth from "../components/Auth/Register";
import { Page } from "../components/Page";
import { UserContext } from "../Context/UserContext";

const ProtectRoute = () => {
  const { userInfo } = useContext(UserContext);
  if (userInfo) {
    return <Page />;
  }
  return <Auth />;
};

export default ProtectRoute;
