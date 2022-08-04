import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/navBar.css'

const NavBar = () => {
    return (
     /*  <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/#/" className='logo'>e-commerce</Navbar.Brand>
        <Nav className="me-auto nav">
          <Nav.Link href="#home" className='login-logo'><i class="fa-solid fa-user-large"></i></Nav.Link>
          <Nav.Link href="/#/purchases" className='purchases-logo'><i class="fa-solid fa-box-archive"></i></Nav.Link>
          <Nav.Link href="/#/purchases" className='shopping-logo'><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
        </Nav>
      </Container>
    </Navbar> */
    <header>
      <a href="" ><h3>e-commerce</h3></a>

      <nav>
        <a href=""><i className="fa-solid fa-user-large"></i></a>
        <a href=""><i className="fa-solid fa-box-archive"></i></a>
        <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
      </nav>
    </header>
    );
};

export default NavBar;