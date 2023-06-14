import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventPage.css';
import Topnavbar from './Topnavbar';


const EventPage = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find((event) => event.id === parseInt(eventId));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (

    <div> <Topnavbar/>    
        <div className="container">
            <div>
            <h3>{event.event_name}</h3>
            </div>
            <div class="image">
                <img width="30%" height="10%" src={event.event_poster}/>
            </div>
            <div>
              <p>Date: {event.start_date}</p>
              <p>{event.end_end_date}</p>
            </div>
            <div>
              <p>{event.city}</p>
              <p>{event.venue}</p>
            </div>
            <div>
            <p>{event.description}</p>
            </div>
            <div>
              <p>{event.organizer_name}</p>
              <p>{event.organizer_contact}</p>
            </div>
        </div>      
    </div>
  );
};


export default EventPage;
