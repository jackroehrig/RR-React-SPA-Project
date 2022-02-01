import './App.css';
import Navigation from "./Navbar/Nav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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

function App() {

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={}/>
        <Route path="/profile" element={}/>
      </Routes>
      

    </div>
  );
}

export default App;
