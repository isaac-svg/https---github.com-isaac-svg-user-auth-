import React, { useContext } from "react";

import ArrowDown from "../assets/images/icon-arrow-down.svg";
import ArrowUp from "../assets/images/icon-arrow-up.svg";
import Todo from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminder from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";
import { useEffect } from "react";
import { useRef } from "react";
import logo from "../assets/images/logo.svg";
import "../Hearder.css";
import { ClickContext } from "../Context/ClickContext";
import { UserContext } from "../Context/UserContext";
import { useNavigate, redirect } from "react-router-dom";
const Header = () => {
  const { showCompanyMenu, showFeatureMenu, handleDrop } =
    useContext(ClickContext);
  const featureRef = useRef(null);
  const companyRef = useRef(null);
  const { userInfo, logoutFunc, logoutState } = useContext(UserContext);
  const navigate = useNavigate();
  function logout() {
    logoutFunc();
  }
  return (
    <header>
      <div className="leftMenu">
        <div className="logoWrapper">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="dropItems">
          <li>
            <span
              className="open"
              ref={featureRef}
              onClick={() => handleDrop(featureRef.current)}
            >
              Features{" "}
              <img
                src={showFeatureMenu ? ArrowUp : ArrowDown}
                alt="Indicator arrows"
              />
            </span>{" "}
            <ul className="drop">
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
              className="open"
              ref={companyRef}
              onClick={() => handleDrop(companyRef.current)}
            >
              Company
              <img
                src={showCompanyMenu ? ArrowUp : ArrowDown}
                alt="Indicator arrows"
              />
            </span>{" "}
            <ul className="drop">
              <li>History</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className="headerCredentials">
        <button className="usernameBtn">{userInfo}</button>
        <button className="logoutBtn" onClick={() => logoutFunc()}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
