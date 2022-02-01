import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';

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
      <h1 className='p-3'>Tinker Nav Area</h1>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
