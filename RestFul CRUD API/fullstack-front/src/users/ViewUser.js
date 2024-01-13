import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import user_img from '../images/user2.png'
import './ViewUser.css'

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const loaduser = async () => {
    const result = await axios.get(`http://localhost:8090/user/${id}`);
    setUser(result.data);
  };
    loaduser();
  }, []);

  

  return (
    <div class="wrapper">
    <div class="user-card">
        <div class="user-card-img">
          <img src={user_img} alt=''/>
        </div>
        <div class="user-card-info">
          <h2>{user.name}</h2>
          <p><span>UserName :</span>{user.username}</p>
          <p><span>Email :</span>{user.email}</p>
          <p><span>Mobile No :</span>xxxxx-xxxxx</p>
          <p id="last-about"><span>About :</span>The database user registered here.</p>
          <Link className="link-btn-1" to={"/"}>Back</Link>
        </div>
    </div>
</div>
  );
}
