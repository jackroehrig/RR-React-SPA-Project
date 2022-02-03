import {users} from '../users'
import {Card, Container, Button} from 'react-bootstrap'
import './componentStyles/HomePage.css'
import {Link} from 'react-router-dom'

function HomePage() {
    let allPosts = [] 
    
    users.forEach(user => {
        user.posts.map(postObj => allPosts.push({post: postObj, name: user.userName, userId: user.id}))
    })

    allPosts.sort((a, b) => a.post.date > b.post.date ? -1 : 1)

    return (
        <Container fluid className='d-flex justify-content-between' style={{borderTop: '2px solid black'}}>
            <div id='posts'>
                {allPosts.map((postObj, i) => {
                    return (
                        <Card key={i} className='w-50 mx-auto my-4 post'>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'left', borderBottom: '2px solid white'}}><Link to={`/userProfile/${postObj.userId}`} style={{textDecoration: 'none', color: 'black'}}>{postObj.name}</Link></Card.Title>
                                <Card.Text style={{textAlign: 'center'}}>{postObj.post.content}</Card.Text>
                                <Card.Subtitle style={{textAlign: 'right'}}>{`${postObj.post.date.getMonth() + 1}/${postObj.post.date.getDate()}/${postObj.post.date.getFullYear()}`}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <div id='recommended' style={{borderLeft: '2px solid gray'}}>
                <Card className='w-50 m-auto mb-3'>
                    <Card.Img variant='top' src='https://upload.wikimedia.org/wikipedia/commons/4/44/Joe_Burrow_%28SELU_vs_LSU%2C_September_8%2C_2018%29.jpg' alt='Joe Shiesty'/>
                    <Card.Body>
                        <Card.Title>Joe Shiesty</Card.Title>
                        <Card.Subtitle className='mb-2'>1.2 million followers</Card.Subtitle>
                        <Button variant='dark'>Follow</Button>
                    </Card.Body>
                </Card>
                <Card className='w-50 m-auto mb-3'>
                    <Card.Img variant='top' src='https://live.staticflickr.com/8308/8002636280_9340468dda_b.jpg' alt='Kim Kardashian'/>
                    <Card.Body>
                        <Card.Title>Kim Kardashian</Card.Title>
                        <Card.Subtitle className='mb-2'>27.8 million followers</Card.Subtitle>
                        <Button variant='dark'>Follow</Button>
                    </Card.Body>
                </Card>
                <Card className='w-50 m-auto mb-3'>
                    <Card.Img variant='top' src='https://upload.wikimedia.org/wikipedia/commons/4/42/The_ROCK.jpg' alt='The Rock'/>
                    <Card.Body>
                        <Card.Title>The Rock</Card.Title>
                        <Card.Subtitle className='mb-2'>11.4 million followers</Card.Subtitle>
                        <Button variant='dark'>Follow</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default HomePage