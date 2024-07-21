import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Private.css';

function Private() {
  const handleSignout = () => {
    signOut(auth)
      .then(() => alert('Signed Out Successfully'))
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="private-container">
      <div className="header">
        <h1 className="prhead">Welcome to the Dashboard</h1>
      </div>
      <div className="content">
        <h2 className="prsubhead">Your Profile</h2>
        <p className="prvp">Welcome to the private Dashboard. Here you can manage your settings and preferences.</p>
        <button className="btn" onClick={handleSignout}>Signout</button>
      </div>
    </div>
  );
}

export default Private;
