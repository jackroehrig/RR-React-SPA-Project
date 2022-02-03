import './componentStyles/PostingWindow.css'
import {Container} from 'react-bootstrap'
import {useState} from 'react'

function PostingWindow(props) {
    let [post, setPost] = useState('')

    return (
        <Container id='post-window' fluid>
            <p id='close' onClick={() => props.handleClose()}>x</p>
            <h1>New Post</h1>
            <form id='post-form' onSubmit={(e) => props.handleSubmit(e, post, new Date())}>
                <label htmlFor='post'>Post:</label><br/>
                <textarea id='post' onChange={(e) => setPost(e.target.value)}></textarea><br/>
                <input type='submit' value='Submit'/>
            </form>
        </Container>
    )
}

export default PostingWindow