import "./componentStyles/Navigation.css"
import {Navbar, Nav, Container, NavDropdown, Button, NavItem } from 'react-bootstrap'
import {users} from '../users'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenSquare} from '@fortawesome/free-solid-svg-icons'
import {LinkContainer} from 'react-router-bootstrap'

function Navigation(props) {

  let profiles = users.map((user, i) => <LinkContainer to={`/userProfile/${user.id}`} key={i} ><NavDropdown.Item>{user.userName}</NavDropdown.Item></LinkContainer>)

  let signedInOptions = (
    <Navbar.Collapse className='justify-content-end'>
      <LinkContainer to={`/userProfile/${props.user.id}`}>
        <NavItem id='profile-link'>Logged in: {props.user.name}</NavItem>
      </LinkContainer>
      <span onClick={() => props.openPost()}><FontAwesomeIcon icon={faPenSquare} size='2x' /></span>
    </Navbar.Collapse>
  )

  return (
    <Navbar variant="light">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='d-flex align-middle'>
            <img id='logo' className='me-2' src='https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_1280.png' alt='red logo' />
            Tinker
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto w-100">
          <NavDropdown title='Profiles'>
            {profiles}
          </NavDropdown>
          {props.user.name ? signedInOptions : null}
        </Nav>
        {!props.user.name ? <Button onClick={() => props.handleLogin()} variant='dark'>Login</Button> : null}
      </Container>
    </Navbar>
  );
}

export default Navigation;

