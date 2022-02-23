import React, { useState } from 'react';
import "./Login.css";
import App1 from './App1';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [userNameLog,setUserNameLog]=useState("");
const [emailLog,setEmailLog]=useState("");
const [passwordLog,setPasswordLog]=useState("");
const navigate=useNavigate();
const userData=JSON.parse(localStorage.getItem("editDetails"));

const [flag,SetFlag]=useState(false);

const handleLogin= (e) => {
    e.preventDefault();
    let usrName=userData.username;
    let usrEmail=userData.email;
    let usrPassword=userData.password;
   

    if((passwordLog===usrPassword) && (userNameLog===usrName) && (emailLog===usrEmail)) {
        navigate('/Dashboard')
        SetFlag(true);
    } 
}

  return (
      <div className='login_main'>
    <div className='login'>
        <form onSubmit={handleLogin} className='login_form'>
        <h1>Login here</h1>
        <input id="name" type="username" placeholder='Enter UserName' onChange={(event)=> setUserNameLog(event.target.value)} />
        <input type="email" placeholder='Email' onChange={(event)=> setEmailLog(event.target.value)}/>
        <input id='password' type="password" placeholder='Password' onChange={(event)=> setPasswordLog(event.target.value)}/>
        <button type='submit' className='submit_btn' >Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Login;
