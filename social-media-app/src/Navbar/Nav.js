import React from 'react';
import {IconContext} from 'react-icons/lib'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import {Navbar, FormGroup, FormControl, Button,Nav, Container, NavDropdown, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaDiagnoses} from 'react-icons/fa'


function Navigation() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <FaDiagnoses className='icon'/>
    <Navbar.Brand href="#home">Tinker</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/">
      <Nav.Link >Home</Nav.Link>
      </Link>
      <Link to="/profile">
      <Nav.Link >Profile</Nav.Link>
      </Link>
      
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </Container>
  </Navbar>
  );
}

export default Navigation;

