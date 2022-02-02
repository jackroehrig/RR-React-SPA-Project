import {users} from "../users";
import {Card} from 'react-bootstrap'
import { useParams } from "react-router-dom";

export default function Profile() {
  let {id} = useParams('')

  let userObj = {}
  users.forEach(user => user.id === Number(id) ? userObj = user : null)

  const renderPosts = userObj.posts.map((post, i) => {
    return (
      <Card key={i} className='w-25 mx-auto my-5 post'>
          <Card.Body>
              <Card.Text style={{textAlign: 'center'}}>{post.content}</Card.Text>
              <Card.Subtitle style={{textAlign: 'right'}}>{`${post.date.getMonth() + 1}/${post.date.getDate()}/${post.date.getFullYear()}`}</Card.Subtitle>
          </Card.Body>
      </Card>
    )
  })

  return (
    <div className="text-center mt-3">
      <h1 className="mb-3">{userObj.userName}'s Profile</h1>
      <div>
        {renderPosts}
      </div>
    </div>
  );
}
