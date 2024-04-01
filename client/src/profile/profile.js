import React, { useState, useEffect } from 'react';
import '../profile/profile.css';
const db = require("../models/profile");

function Profile() {
  const [profileData, setProfileData] = useState({
    
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    picturePath: '',
    date: ''
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/profile'); 
        if (response.ok) {
          const profile = await response.json();
          setProfileData(profile);
        } else {
          console.error('Failed to fetch profile data');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleProfileUpdate = async () => {
    try {
      const response = await fetch('/api/profile/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
      });

      if (response.ok) {
        console.log('Profile updated successfully');
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <input type="text" name="firstname" value={profileData.firstname} onChange={handleChange} />
      <input type="text" name="lastname" value={profileData.lastname} onChange={handleChange} />
      <input type="email" name="email" value={profileData.email} onChange={handleChange} />
      <input type="password" name="password" value={profileData.password} onChange={handleChange} />
      <input type="text" name="picturePath" value={profileData.picturePath} onChange={handleChange} />
      <input type="date" name="date" value={profileData.date} onChange={handleChange} />
      <button className="btn-update-profile" onClick={handleProfileUpdate}>
        Update Profile
      </button>
    </div>
  );
}

export default Profile;
