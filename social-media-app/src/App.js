import "./App.css";
import userProfile from "./components/userProfile";
import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        ???
        Searching Profiles/Tinks
          SearchBar
          ResultsArea

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
      <Router>
        <Routes>
          <Route
            path="/userProfile/:id"
            render={() => <userProfile user={user} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
