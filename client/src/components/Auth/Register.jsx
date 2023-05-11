import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Auth.css";
import banner from "../../assets/images/farshad-rezvanian-Eelegt4hFNc-unsplash.jpg";
import { useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { BASE_URL } from "../../../utils";
const Auth = () => {
  const [username, setUsername] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext);
  const url = isLogIn ? `${BASE_URL}/login` : `${BASE_URL}/register`;
  function register(e) {
    e.preventDefault();
    const user = { username, password };
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.username);
      })
      .catch((err) => console.log(err));
  }
  return (
    <section className="auth" id="register">
      {/* {message} */}
      <form onSubmit={register}>
        <h1>snap</h1>
        <div className="greeting">
          <h2>Welcome</h2>
          <span>Register by entering the information below</span>
        </div>

        <div className="inputField">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            required
            title="your username can be  any string not less than four(4) characters"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
            title="your title can be  any string not less than four(4) characters"
          />
          <button className="continue">Continue</button>
        </div>
        <div onClick={() => setIsLogIn(!isLogIn)} style={{ cursor: "pointer" }}>
          <p>
            {isLogIn
              ? "Don't have an account yet? create one"
              : "Already a user? login"}
          </p>{" "}
        </div>
      </form>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
    </section>
  );
};

export default Auth;
