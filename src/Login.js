import React, { useState } from 'react';
import { auth } from './firebase';
import './Login.css';

function Login() {
  const [email, setEmail] =  useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {

  };
  return (
    <div className='login'>
      <img src='https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png?h=32%25&w=100%25&la=en&hash=D0E8DD162007F2CF94A6CA31F244DE55E6DBBF8E' alt='' />

      <form>
        <input value={name}  onChange={(e) => setName(e.target.value)}  type="text" placeholder='Full Name'/>
        <input value={profilePic} onChange={(e) =>setProfilePic(e.target.value)} placeholder='Profile Picture (URL)' type='text' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'/>
        <input value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password"/>

        <button type='submit' onClick={loginToApp}>Sign in</button>
      </form>
    <p>Not a Member?{" "}
      <span className='login__register'
      onClick={register}>Register Now</span>
    </p>
    </div>
  )
}

export default Login