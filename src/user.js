import React from 'react';
//import logo from './logo.svg';
import './App.css';

function user() {
  return (
    <div style={{
        backgroundColor: 'red',
        height: '100px'
      }}
      >
     <h1>User Page</h1>
     <input width = '100' height='50' value = 'Enter username'></input>
    </div>
  );
}

export default user;