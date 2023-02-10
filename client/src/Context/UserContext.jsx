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
    fetch("http://localhost:4000/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success == true) {
          redirect("/login");
          setLogoutState(data.success);
          // navigate("/login");
        }
      });
  }
  const getPermission = async () => {
    const response = await fetch("http://localhost:4000/auth/profile", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setIsAuthorized(data.success);
    setUserInfo(data.username);
    console.log(data);
    return data.success;
  };
  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        logoutFunc,
        logoutState,
        isAuthorized,
        setIsAuthorized,
        getPermission,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
