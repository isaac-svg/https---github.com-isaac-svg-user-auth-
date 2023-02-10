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
  }

  useEffect(() => {
    run();
  }, []);
  // const perm = await getPermission();
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
