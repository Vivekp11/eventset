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
import "../styles/HomePage.css";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import Topnavbar from "./Topnavbar";


const EventCard = ({ event }) => {
  return (
    <Card component={Link} to={`/event/${event.id}`} className="card" sx={{ maxWidth: 345 }}>
        <CardHeader
       
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={event.event_name}
          subheader={event.start_date}
        />
        <CardMedia
          component="img"
          height="194"
          image={event.event_poster}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {event.description}
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
  );
};


export default function HomePage( {events}) {
  const navigate = useNavigate();
  
  
  const [eventdata,setEventData] = useState(events);

  

  

 

  
  function goToEventForm() {
    navigate("/EventForm");
  }
  

  return (
    
    <div>
      <Topnavbar/>
      
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
      { eventdata.map((event)=>(
        <EventCard key={event.name} event={event} />
      ))}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}


