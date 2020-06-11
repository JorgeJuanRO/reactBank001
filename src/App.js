import React from 'react';
//import logo from './logo.svg';
import './App.css';
import user from './user';
import deposit from './deposit';
import withdraw from './withdraw';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">

     <Nav/>
     <Switch>
      <Route path='/' exact component = {home} />
      <Route path='/user' component = {user} />
      <Route path='/deposit' component = {deposit} />
      <Route path= '/withdraw' component = {withdraw}/> 
     </Switch>
    </div>
    </Router>
  );
}
const home = () => {
  return (
  <div>
    <h1>Home Page</h1>
  </div>
  )
 };
 
export default App;
