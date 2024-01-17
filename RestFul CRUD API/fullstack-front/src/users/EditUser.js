import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loaduser = async () => {
      const result = await axios.get(`http://localhost:8090/user/${id}`);
      setUser(result.data);
    };
    loaduser();
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8090/user/${id}`, user);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt shadow">
          <h2 className="text-center m-4 font-weight-bold">Edit User Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />

              <label htmlFor="Username" className="form-label mt-1">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />

              <label htmlFor="Email" className="form-label mt-1">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
