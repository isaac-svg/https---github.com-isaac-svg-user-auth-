import { useEffect, useState } from "react";
import { createContext } from "react";
import { BASE_URL } from "../../utils";
export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  const [logoutState, setLogoutState] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    fetch(`${BASE_URL}/profile`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.username);
      })
      .catch((err) => err.message);
  }, []);
  const logoutFunc = () => {};
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
