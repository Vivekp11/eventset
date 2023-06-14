
import React ,{useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Topnavbar.css";

function Topnavbar() {
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [username,setUsername] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleLogout = () => {
      // Perform the logout action, e.g., clear the token from localStorage
      localStorage.removeItem('token');
      navigate('/login');
    };
  
    useEffect(() => {
      if(localStorage.getItem('token') && localStorage.getItem('username')){
        setIsLoggedIn(true);
        setUsername(localStorage.getItem('username'));
      };
    },[])

    function goToLoginPage() {
          navigate("/login");
        }
        function goToSignupPage() {
          navigate("/Signup");
        }
        function goToHomePage() {
          navigate("/");
        }
  return (
    <div>
      <header className="header">
        <nav className="nav">
            <div className="ES"></div>

            <ul className="nav-list">
            <a onClick={goToHomePage}>Home</a>
            <a onClick={goToSignupPage}>Signup</a>
           {!isLoggedIn 
            ? <a onClick={goToLoginPage}>Login</a>
            : <div className="top-navbar">
                  <div className="username" onClick={toggleDropdown}>
                    {username}
                  {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                  )}
          </div>
          </div>
            }
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Topnavbar
