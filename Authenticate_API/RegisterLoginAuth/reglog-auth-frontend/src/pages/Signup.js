import "./Signup.css";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";



export default function Signup() {

  // let navigate = useNavigate();
  const [user, setUser] = useState({
    employeename: "",
    email: "",
    password: "",
  });

  const { employeename, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8090/api/v1/employee/save", user);
    // navigate("/");
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form  method="post" onSubmit={(e) => onSubmit(e)}>
        <input type="text" name="employeename" placeholder="Name" required value={employeename} onChange={(e)=>onInputChange(e)} />
        <input type="email" name="email" placeholder="Email Id" required value={email} onChange={(e)=>onInputChange(e)}  />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password} onChange={(e)=>onInputChange(e)} 
        />
        <div className="already-reg">
          <p>
            Already registered?<Link to="/login">Login</Link>
          </p>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
