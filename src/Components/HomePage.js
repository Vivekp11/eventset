import React ,{useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./HomePage.css";
import Footer from "./Footer";



export default function HomePage() {
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
  function goToEventForm() {
    navigate("/EventForm");
  }
  

  return (
    
    <div>
      <header className="header">
        <nav className="nav">
            <div class="ES"></div>

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
      <div className="content">
        <h1>It's your time</h1>
        <p>Join us to create memories that will last a lifetime</p>
        <div className="btn1">
            <button onClick={goToEventForm}>Post Event</button>
        </div>
        <div className="btn2">
            <button>Event Location</button>
        </div>
      </div>
      <div className="card-container">
      <Card className="card" sx={{ maxWidth: 345 }}>
      <CardHeader
     
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
        </CardActions>
    </Card>
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardHeader
     
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
        </CardActions>
    </Card>
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardHeader
     
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
        </CardActions>
    </Card>
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardHeader
     
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
        </CardActions>
    </Card> 
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}


