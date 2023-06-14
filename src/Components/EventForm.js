import React, { useState } from 'react';
import './Event.css';
import withAuthProtection from '../utils/withAuthProtection';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [venue, setVenue] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Event Name:', eventName);
    console.log('Organizer:', organizer);
    console.log('Venue:', venue);
    console.log('Location:', location);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('File:', file);

    // Reset form fields
    setEventName('');
    setOrganizer('');
    setVenue('');
    setLocation('');
    setStartDate('');
    setEndDate('');
    setFile(null);
  };

  return (
    <div className="container">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Organizer:</label>
          <input
            type="text"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Venue:</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <textarea
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Add Description About the event: </label>
          <textarea
           // value={location}
           // onChange={(e) => setLocation(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Start Date and Time:</label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>End Date and Time:</label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Upload File:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default withAuthProtection(EventForm);
