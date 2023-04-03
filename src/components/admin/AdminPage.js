import React from 'react';
import './adminpage.css';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'JJ',
      flight: '911',
      time: '4:00 am',
      destination: 'Kisumu',
      contact: '0711610431'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    
    // prepare data to be sent in the request body
    const data = {
      email: this.state.email,
      flight: this.state.flight,
      time: this.state.time,
      destination: this.state.destination,
      contact: this.state.contact
    };
    
    // make the POST request to the server
    fetch('https://project-c92s.onrender.com/admin/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // do something with the response data if needed
    })
    .catch(error => {
      console.error(error);
      // handle the error if needed
    });
  }

  logout() {
    fetch('https://project-c92s.onrender.com/admin/logout', {
      method: 'POST'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to logout');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // do something with the response data if needed
    })
    .catch(error => {
      console.error(error);
      // handle the error if needed
    });
  }

  
  login() {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    
    fetch('https://project-c92s.onrender.com/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to login');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // do something with the response data if needed
    })
    .catch(error => {
      console.error(error);
      // handle the error if needed
    });
  }
  


  // handleSubmit(event) {
  //   event.preventDefault();
  //   // handle the form submission here
  //   console.log(this.state);
  // }

  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

//   render() {
//     return (
//       <div className="admin-page">
//         <h1>Flight Booking Admin Page</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />

//           <label htmlFor="flight">Flight:</label>
//           <input type="text" id="flight" name="flight" value={this.state.flight} onChange={this.handleChange} required />

//           <label htmlFor="time">Time:</label>
//           <input type="text" id="time" name="time" value={this.state.time} onChange={this.handleChange} required />

//           <label htmlFor="destination">Destination:</label>
//           <input type="text" id="destination" name="destination" value={this.state.destination} onChange={this.handleChange} required />

//           <label htmlFor="contact">Contact:</label>
//           <input type="tel" id="contact" name="contact" value={this.state.contact} onChange={this.handleChange} required />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
}

 export default AdminPage;
