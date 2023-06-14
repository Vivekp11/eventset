import React, { useEffect, useState } from "react";
import '../styles/Signup.css';
import { useNavigate } from "react-router";
// import { axiosInstance } from "../utils/api";
import axios from "axios";



export function SignupPage() {
const [formData,setformData] = useState({});
const navigate = useNavigate();

useEffect(() => {
  console.log(formData)
},[formData])

const handleChange = (e) => {
  setformData({...formData,[e.target.name]:e.target.value})
}

const signUp = async (e) => {
  e.preventDefault();
  //console.log(formData)
   try {
    const result = await (
          await axios.post('http://localhost:8000/accounts/register/',formData)).data
    console.log(result)
    localStorage.setItem('token', result.token);
    localStorage.setItem('username', result.username)
    navigate('/');
   } catch (error) {
    console.error(error);
   }

      // axios
      //   .post("http://192.168.251.27:8000/accounts/register/", {
      //     username: formData.username,
      //     first_name: formData.first_name,
      //     last_name: formData.last_name,
      //     password: formData.password,
      //     password2:formData.password
      //   })
      //   .then(function (response) {
      //     console.log("api response");
      //     console.log(response.data);
      //     if (response.status === 200) {
      //       navigate("/");
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log("inside catch fn");
      //     console.log(error);
      //     if (error.response.status === 400) {
      //       console.log(error.response.data["error"]);
      //       //seterrorState(error.response.data["error"]);
      //     } else {
      //       //seterrorState("Error..! while trying to connect,please try again");
      //     }
      //   });
   
}

  return (
    <div>
      <div className="signup-page">
        <div className="form">
          <div className="signup">
            <div className="signup-header">
              <h3>SIGN UP</h3>
              <p className="message">
                Already you have account? <a href="#">Sign in</a>
              </p>
            </div>
          </div>
          <form onSubmit={signUp}>
            <div className="signup-form">
              <input onChange={handleChange}style={{padding:"15px"}} name="first_name"  type="text" placeholder="firstname" />
              <input onChange={handleChange} style={{padding:"15px"}} name="last_name" type="text" placeholder="lastname" />
            </div>
            <div className="signup-form">
              <input onChange={handleChange}  style={{padding:"15px"}} name="username" type="text" placeholder="username" />
            </div>
            <div className="signup-form">
              <input onChange={handleChange} name="password" type="password" placeholder="password" />
            </div>
            <div className="signup-form">
              <input onChange={handleChange} name="password2" type="password" placeholder="Confirm password" />
            </div>
            <div  className="button">
              <button type="submit">Sign up</button>
            </div>  
          </form>
        </div>
      </div>
    </div>
  );
}

//default SignupPage
