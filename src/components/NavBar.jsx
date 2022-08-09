import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/navBar.css'

const NavBar = () => {
    return (
    <header>
      <a href="" ><h3>e-commerce</h3></a>

      <nav>
        <a href="/#/login"><i className="fa-solid fa-user-large"></i></a>
        <a href="/#/purchases"><i className="fa-solid fa-box-archive"></i></a>
        <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
      </nav>
    </header>
    );
};

export default NavBar;