import React, { useContext } from "react";
import Menu from "../assets/images/icon-menu.svg";
import Close from "../assets/images/icon-close-menu.svg";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import ArrowUp from "../assets/images/icon-arrow-up.svg";
import Todo from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminder from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";
import logo from "../assets/images/logo.svg";
import "../Sidebar.css";
import { ClickContext } from "../Context/ClickContext";
import { useRef } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate, redirect } from "react-router-dom";

const Sidebar = () => {
  const {
    showMenu,
    showCompanyMenu,
    showFeatureMenu,
    closeMenu,
    openMenu,
    handleDrop,
  } = useContext(ClickContext);
  const featureRef = useRef(null);
  const companyRef = useRef(null);
  const { userInfo, logoutFunc, logoutState } = useContext(UserContext);

  function logout() {
    logoutFunc();
    if (logoutState) {
      redirect("/login");
      console.log("logout");
    }
  }
  return (
    <aside className={`${showMenu ? "showMenu" : ""}`}>
      <div>
        {" "}
        <img src={logo} alt="logo" />
      </div>
      <div className="overlay ">
        <div className="overlayWrapper">
          <div className="closeImg__Container">
            <img
              src={Close}
              alt="close"
              className="closeImg"
              onClick={closeMenu}
            />
          </div>
          <ul className="dropdown">
            <li>
              <span
                className="open"
                onClick={(e) => handleDrop(featureRef.current)}
                ref={featureRef}
              >
                Features{" "}
                <img
                  src={showFeatureMenu ? ArrowUp : ArrowDown}
                  alt="Indicator arrows"
                />
              </span>{" "}
              <ul className="fold">
                <li>
                  <img src={Todo} alt="" /> Todo
                </li>
                <li>
                  {" "}
                  <img src={Calendar} alt="" /> Calenders
                </li>
                <li>
                  {" "}
                  <img src={Reminder} alt="" /> Reminders
                </li>
                <li>
                  {" "}
                  <img src={Planning} alt="" /> Planning
                </li>
              </ul>
            </li>
            <li>
              <span
                onClick={(e) => handleDrop(companyRef.current)}
                ref={companyRef}
                className="open"
              >
                Company{" "}
                <img
                  src={showCompanyMenu ? ArrowDown : ArrowUp}
                  alt="Indicator arrows"
                />
              </span>{" "}
              <ul className="fold">
                <li>History</li>
                <li>About</li>
                <li>Blog</li>
              </ul>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className="credentials">
            <button className="usernameBtn">{userInfo}</button>
            <button className="logoutBtn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="humberger">
        <img src={Menu} alt="menu" onClick={openMenu} />
      </div>
    </aside>
  );
};

export default Sidebar;
