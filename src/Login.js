import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
  const [email, setEmail] =  useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const logintoApp = (e) => {
    e.preventDefault();
  };
  const register = () => {
      if (!name) {
        return alert("Please enter a full name");
      }


      auth.createUserWithEmailAndPassword(email, password).then(
        (userAuth) => {
        userAuth.user
        .updateProfile({
          displayName: name,
          photoUrl: profilePic,
        })
        .then(() =>{
          dispatch(
            login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName:name,
            photoUrl: profilePic,
          })
          );
        })
      }).catch(error => alert(error.message));
  };
  return (
    <div className='login'>
      <img src='https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png?h=32%25&w=100%25&la=en&hash=D0E8DD162007F2CF94A6CA31F244DE55E6DBBF8E' alt='' />

      <form>
        <input value={name}  onChange={(e) => setName(e.target.value)}  type="text" placeholder='Full Name'/>
        <input value={profilePic} onChange={(e) =>setProfilePic(e.target.value)} placeholder='Profile Picture (URL)' type='text' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'/>
        <input value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password"/>

        <button type='submit' onClick={logintoApp}>Sign in</button>
      </form>
    <p>Not a Member?{" "}
      <span className='login__register'
      onClick={register}>Register Now</span>
    </p>
    </div>
  )
}

export default Login