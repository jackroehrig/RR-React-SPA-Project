import React from 'react';
import "./componentStyles/Navigation.css"
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {users} from '../users'


function Navigation() {
  let profiles = users.map((user, i) => <NavDropdown.Item key={i} href={`/userProfile/${user.id}`}>{user.userName}</NavDropdown.Item>)

  return (
    <Navbar variant="light">
    <Container>
      <Navbar.Brand href="/" className='d-flex align-middle'>
        <img id='logo' className='me-2' src='https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_1280.png' alt='red logo' />
        Tinker
      </Navbar.Brand>
    <Nav className="me-auto">
      <NavDropdown title='Profiles'>
        {profiles}
      </NavDropdown>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Navigation;

