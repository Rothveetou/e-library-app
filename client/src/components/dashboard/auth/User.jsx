import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function User() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    Axios.get('/api/me') // Assuming this endpoint fetches the current user's profile
      .then(response => setUserData(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default User;
