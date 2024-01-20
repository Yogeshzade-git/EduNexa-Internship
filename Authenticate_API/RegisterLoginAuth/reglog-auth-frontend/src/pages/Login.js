import { Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import "./Login.css";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
   
    const data = {
      email: email,
      password: password
    };


    
    fetch("http://localhost:8090/api/v1/employee/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        // check if the response is ok
        if (response.ok) {
          // parse the response as JSON
          return response.json();
        } else {
         
          throw new Error(`Status: ${response.status}, ${response.statusText}`);
        }
      })
      .then((data) => {
     
        console.log(data);

         // access the message and the status properties from the data object
         const message = data.message;
         const status = data.status;
 
         // perform different operations depending on the value of the status
         if ( email === "admin@gmail.com" && password === "admin123") {
        
          toast.success("Admin Logged in", {
          
          });
  
          
          navigate("/admin");
        } else if (status) {
     
           toast.success(message, {
            position: "top-center",
            autoClose: 1800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Zoom
          });
          
          navigate("/successlogin");
         } else {
           setEmail("");
           setPassword("");

           toast.error(message, {
            position: "top-center",
            autoClose: 1800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Zoom
          });
         }
      })
      .catch((error) => {  
      console.error(error);
      });
  };


  const handleCancel = () => {
    setEmail("");
    setPassword("");
  };

 

  return (
    <div className="container">
      <div className="form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="login-button" onClick={handleSubmit}>
              Login
            </button>
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
          <div className="sign-up-wrapper">
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

