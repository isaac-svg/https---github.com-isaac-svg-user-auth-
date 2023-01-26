import React, { useState } from "react";
import { Link, Navigate, useNavigate, redirect } from "react-router-dom";
import banner from "../../assets/images/farshad-rezvanian-Eelegt4hFNc-unsplash.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  function login(e) {
    e.preventDefault();
    const user = { username, password };
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const { success } = data;
        console.log(data);
        if (success == true) {
          navigate("/");
        }
        if (!success) {
          setTimeout(() => {
            setMessage("");
          }, 2000);
          return setMessage(data.message);
        }
      });
  }
  return (
    <section className="auth">
      <form onSubmit={login}>
        <h1>snap</h1>
        <h4 style={{ color: "red" }}>{message}</h4>
        <div className="greeting">
          <h2>Login</h2>
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

        <Link to={"/register"}>
          <p>Don't have an acount? Create one</p>{" "}
        </Link>
      </form>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
    </section>
  );
};

export default Login;
