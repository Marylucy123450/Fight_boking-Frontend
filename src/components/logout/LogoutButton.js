import React from 'react';
import './logoutbutton.css';

const LogoutButton = () => {
  const handleLogout = () => {
    fetch('http://127.0.0.1:3000/user/logout', {
      method: 'DELETE',
      credentials: 'include' // This is required to send cookies along with the request
    })
    .then(response => {
      if (response.ok) {
        // redirect the user to the login page or update the app state to reflect that the user is logged out
      } else {
        // handle error response
      }
    })
    .catch(error => {
      // handle network error
    });
  }

  return (
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
