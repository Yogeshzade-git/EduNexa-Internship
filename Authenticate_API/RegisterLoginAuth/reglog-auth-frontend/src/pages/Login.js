import { Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import "./Login.css";

function Login() {
  // state variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle change events for email and password inputs
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // handle submit event for login button
  const handleSubmit = (e) => {
    e.preventDefault();
    // perform login logic here
    // alert(`Email: ${email}, Password: ${password}`);

    // create an object with the email and password values
    const data = {
      email: email,
      password: password
    };

    // use the fetch method to send a POST request to the API endpoint
    // replace the URL with your actual API endpoint
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
          // throw an error if the response is not ok
          throw new Error(`Status: ${response.status}, ${response.statusText}`);
        }
      })
      .then((data) => {
        // handle the data from the API
        // for example, you can store the token or the user information in the local storage or the state
        // or you can redirect the user to another page
        console.log(data);

         // access the message and the status properties from the data object
         const message = data.message;
         const status = data.status;
 
         // perform different operations depending on the value of the status
         if (status) {
           // if the status is true, it means the login was successful
           // you can display a success message or a notification to the user
           // you can also store the token or the user information in the local storage or the state
           // or you can redirect the user to another page
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
          window.location.href = "https://monkeytype.com/";
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

  // handle click event for cancel button
  const handleCancel = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignUp = () => {
    // perform the logic for signing up a new user
    // for example, you can redirect the user to another page or show a modal form
    // or you can use the fetch method or a similar library to send a request to your API
    // you should also handle the response and the possible errors from the API
    // you can also use the toast method or a similar library to show a notification or a toast message
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
            <p>Don't have an account? <a href="#" onClick={handleSignUp}>Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

