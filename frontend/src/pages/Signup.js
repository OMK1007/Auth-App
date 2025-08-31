import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer} from 'react-toastify' 
import { handleError } from '../utils'

const Signup = () => {

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  }
  
  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError('name, email, password required');
    }
    try {
      const url = 'http://localhost:8080/auth/signup';
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      console.log(result);
    }
    catch (err) {
      handleError(err);
    }
  }

  return (
    <div className='container'>
      <h1>SignUp</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor='name-1'>Name</label>
          <input onChange={handleChange }type='text' name='name' autoFocus placeholder='Enter your name...' value={signupInfo.name}></input>
        </div>
        <div>
          <label htmlFor='email-1'>Email</label>
          <input onChange={handleChange } type='email' name='email' placeholder='Enter your email...' value={signupInfo.email}></input>
        </div>
        <div>
          <label htmlFor='password-1'>Password</label>
          <input onChange={handleChange } type='password' name='password' placeholder='Enter your password...' value={signupInfo.password}></input>
        </div>
        <button type="submit">SignUp</button>
        <span>Already have an Account ?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup
