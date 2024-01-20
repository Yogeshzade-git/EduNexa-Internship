import React from 'react'
import './Successlogin.css'
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Successlogin() {

    const navigate = useNavigate();
  return (
    <div className='successlogin'>
        <h1>✅Logged in Successfully!!</h1>
        <Link  id='back_btn' to="/login" >Back</Link>
    </div>
  )
}

