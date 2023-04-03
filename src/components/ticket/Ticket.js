import React, { useEffect, useState } from 'react';
import './ticket.css';

function Ticket() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('https://project-c92s.onrender.com/flights')
      .then(res => res.json())
      .then(setTickets)
  }, []);

  const addFlight = () => {
    const newFlight = { 
      id: tickets.length + 1,
      destination: 'New Destination',
      departureTime: 'New Departure Time'
    };

    fetch('https://project-c92s.onrender.com/flights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFlight)
    })
      .then(res => res.json())
      .then(data => setTickets([...tickets, data]));
  };

  return (
    <div>
      <h1>We have a total of {tickets.length} Tickets</h1>
      <button onClick={addFlight}>Add Flight</button>
    </div>
  );
}

export default Ticket;
