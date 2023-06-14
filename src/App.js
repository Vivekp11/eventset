import "./App.css";
import React, { useState } from 'react';
import { LoginPage } from "./Components/Login";
import  HomePage  from "./Components/HomePage";
import { SignupPage } from "./Components/SignupPage";
import EventForm  from "./Components/EventForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import EventPage from "./Components/EventPage";
function App() {
  const [eventdata,setEventData] = useState([{
    id:1,
    event_name: "Event 1",
    start_date: "2020-01-01",
    end_date: "2020-01-02",
    city: "Calicut",
    venue: "AB audience",
    organizer_name: "vivek",
    organizer_contact: "99998778511",
    event_poster: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug",

  },
  {
    id:2,
    event_name: "Event 2",
    start_date: "2020-01-01",
    end_date: "2020-01-02",
    city: "Calicut",
    venue: "AB audience",
    organizer_name: "vivek",
    organizer_contact: "99998778511",
    event_poster: "/images/event1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug",

  },
  {
    id:3,
    event_name: "Event 3",
    start_date: "2020-01-01",
    end_date: "2020-01-02",
    city: "Calicut",
    venue: "AB audience",
    organizer_name: "vivek",
    organizer_contact: "99998778511",
    event_poster: "../images/event2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug",

  },
  {
    id:4,
    event_name: "Event 4",
    start_date: "2020-01-01",
    end_date: "2020-01-02",
    city: "Calicut",
    venue: "AB audience",
    organizer_name: "vivek",
    organizer_contact: "99998778511",
    event_poster: "/images/event3.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug",

  },]);

  return (
    <Fragment>
     
      <Routes>
        <Route path="/" element={<HomePage events={eventdata} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/EventForm" element={<EventForm />} />
        <Route exact path="/event/:eventId" element={<EventPage events={eventdata} />}/>
          
      </Routes>
    </Fragment>
  );
}

export default App;
