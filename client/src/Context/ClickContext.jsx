import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ClickContext = createContext({});

const ClickContexProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFeatureMenu, setShowFeatureMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);
  const handleDrop = (elem) => {
    if (elem.textContent.trim() === "Features") {
      console.log(elem.textContent);
      setShowFeatureMenu(!showFeatureMenu);
      console.log(showFeatureMenu);
    } else if (elem.textContent.trim() === "Company") {
      setShowCompanyMenu(!showCompanyMenu);
    }
    elem.classList.toggle("open");
  };
  return (
    <ClickContext.Provider
      value={{
        showMenu,
        showCompanyMenu,
        showFeatureMenu,
        openMenu,
        closeMenu,
        handleDrop,
      }}
    >
      {children}
    </ClickContext.Provider>
  );
};
export default ClickContexProvider;
// export const useClick = useContext(ClickContext);
