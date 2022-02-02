import users from "../users";

export default function Profile(props) {

  let userObj = {}
  users.forEach(user => user.id === props.userId ? userObj = user : null)

  const renderPosts = userObj.posts.map(post => {
    return (
      <Card key={i} className='w-50 mx-auto mb-4 post'>
          <Card.Body>
              <Card.Title style={{textAlign: 'right'}}>{`${post.date.getMonth() + 1}/${post.date.getDate()}/${post.date.getFullYear()}`}</Card.Title>
              <Card.Text style={{textAlign: 'center'}}>{post.content}</Card.Text>
          </Card.Body>
      </Card>
    )
  })

  return (
    <div>
      <h1>User Profile of {userObj.userName}</h1>
      <div>
        {renderPosts}
      </div>
    </div>
  );
}
