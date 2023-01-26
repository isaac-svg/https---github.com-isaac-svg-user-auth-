import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Auth.css";
import banner from "../../assets/images/farshad-rezvanian-Eelegt4hFNc-unsplash.jpg";
import { useState } from "react";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  function register(e) {
    e.preventDefault();
    const user = { username, password, email };
    fetch("http://localhost:4000/auth/register", {
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
        if (success === true) {
          navigate("/login");
        }
      });
  }
  return (
    <section className="auth">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            required
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
        <Link to={"/login"}>
          <p>Already a user login</p>{" "}
        </Link>
      </form>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
    </section>
  );
};

export default Register;
