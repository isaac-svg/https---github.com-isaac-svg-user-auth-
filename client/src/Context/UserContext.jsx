import { useState } from "react";
import { createContext } from "react";
import { useNavigate, redirect } from "react-router-dom";
export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  const [logoutState, setLogoutState] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  function logoutFunc() {
    fetch("https://api-introsection.vercel.app/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {});
  }

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        logoutFunc,
        logoutState,
        isAuthorized,
        setIsAuthorized,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
