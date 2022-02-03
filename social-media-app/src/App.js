import './App.css';
import Navigation from "./components/Navigation"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Profile from "./components/Profile";
import LoginWindow from './components/LoginWindow';
import {useState} from 'react';
import {users} from './users';
import PostingWindow from './components/PostingWindow'

function App() {
  let [showLogin, toggleLogin] = useState(false)
  let [loggedUser, setUser] = useState({})
  let [showPosting, togglePosting] = useState(false)

  const handleLogin = () => {
    toggleLogin(!showLogin)
  }

  const handleClose = () => {
    toggleLogin(false)
  }

  const handleSubmit = (username, password) => {
    users.forEach(user => {
      if(username === user.userName){
        if(password === user.password){
          setUser({
            name: username,
            id: user.id
          })
          toggleLogin(false)
        }
      }
    })
  }

  const openPost = () => {
    togglePosting(true)
  }

  const handlePostingClose = () => {
    togglePosting(false)
  }

  const handlePostSubmit = (e, post, newDate) => {
    e.preventDefault()
    users.forEach(user => {
      if(user.userName === loggedUser.name){
        user.posts.unshift({
          content: post,
          date: newDate
        })
        togglePosting(false)
      }
    })
  }

  let mainStyle = {}

  if(showLogin || showPosting){
    mainStyle.filter = 'blur(8px)'
  }

  return (
    <div className="App" style={{textAlign: 'center'}}>
      <div style={mainStyle}>
          <Router>
          <Navigation handleLogin={handleLogin} user={loggedUser} openPost={openPost} />
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path="/userProfile/:id" element={<Profile />} />
            </Routes>
          </Router>
      </div>
      { showLogin ? <LoginWindow handleClose={handleClose} handleSubmit={handleSubmit}/> : null}
      { showPosting ? <PostingWindow handleClose={handlePostingClose} handleSubmit={handlePostSubmit} /> : null}
    </div>
  );
}

export default App;
