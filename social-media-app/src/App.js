import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import userProfile from "./components/userProfile";
import React, { useState, useEffect, createContext } from "react";
import usersData from "./usersData";

/* 
    
      Navbar w/ logo & name
      
      App
        Navbar(Logo to home route, my profile route, search profiles/tinks?, new tink)
        Homescreen Route
          Recent Tinks
          Profiles to Follow
        User Profile Route
          Profile Info
          What I'm Tinking
          Tinks

    */

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(usersData);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const res = await

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getUser();
  // }, []);

  return (
    <div className="App">
      <h1 className='p-3'>Tinker Nav Area</h1>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path="/userProfile/:id" element={<userProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
