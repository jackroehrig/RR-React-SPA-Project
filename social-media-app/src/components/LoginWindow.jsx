import {Container} from 'react-bootstrap'
import './componentStyles/LoginWindow.css'
import {useState} from 'react'

function LoginWindow(props){
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const handleSubmit= (e) => {
        e.preventDefault()
        props.handleSubmit(username, password)
    }

    return(
        <Container id='login-window' fluid>
            <p id='close' onClick={() => props.handleClose()}>x</p>
            <div id='main-login-area'>
                <h1>Login</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor='username'>Username:</label>
                    <input id='username' onChange={(e) => setUsername(e.target.value)}/><br/>
                    <label htmlFor='password'>Password:</label>
                    <input id='password' onChange={(e) => setPassword(e.target.value)}/><br/>
                    <input id='submit' type='submit' value='Submit'/>
                </form>
            </div>
        </Container>
    )
}

export default LoginWindow