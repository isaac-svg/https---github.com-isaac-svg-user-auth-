import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Navigate, Outlet, redirect, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

// let allow;
const ProtectRoute = () => {
  const { setUserInfo, isAuthorized, setIsAuthorized, getPermission } =
    useContext(UserContext);
  async function run() {
    const result = await getPermission();
    setIsAuthorized(result);
    localStorage.setItem(result, result);
  }

  useEffect(() => {
    run();
  }, []);

  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
