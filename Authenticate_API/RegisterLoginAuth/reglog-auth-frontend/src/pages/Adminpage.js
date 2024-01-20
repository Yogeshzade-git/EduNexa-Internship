
import './Admin.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Admin() {

    const [users, setUsers] = useState([]);

    const {id} = useParams()

    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8090/api/v1/employee/allemp");
      setUsers(result.data);
    };
  
  
    return ( 
      <div className="container">
        <div className="py-4">
        <h1 className='heading'>EMPLOYEE RECORDS</h1>
          <table className="table border shadow table-bordered table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>{index+1}</th>
                  <td>{user.employeename}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  