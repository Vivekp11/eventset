import React, { useState } from 'react';
//import classes from './Components/Login.module.css';
//import {classes} from './Components/Login.module.css';
import '../styles/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router';

export function LoginPage() {
    const [formData,setformData] = useState({})
    
    const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
        const result = await (
              await axios.post('http://localhost:8000/accounts/login/',formData)).data
        console.log(result);
        localStorage.setItem('token',result.token);
        localStorage.setItem('username',formData.username);
        navigate('/');
       } catch (error) {
        console.error(error);
       }
    }
  const handleChange = (e) => {
    setformData({
    ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    
      <div className="login-page">
            <div className="form">
                <div className="classes.login">
                    <div className="classes.login-header">

                        
                        <h3>LOGIN</h3>
                        <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </div>
                </div>
                <form className="login-form" onSubmit={login}>
                    <input onChange={handleChange} style={{padding:"15px"}} name='username' type="text" placeholder="username" />
                     
                    <input onChange={handleChange} name='password' type="password" placeholder="password" />
                    
                    <a href="#">Forgot password?</a>
                    <button type='submit'>login</button>
                    
                </form>
            </div>
        </div>

    
  )
}

//export default LoginPage
