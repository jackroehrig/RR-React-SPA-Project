import './App.css';
import Navigation from "./components/Navigation"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Profile from "./components/Profile";

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


function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path="/userProfile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
