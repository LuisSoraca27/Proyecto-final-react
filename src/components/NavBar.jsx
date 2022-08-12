import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/navBar.css'
import CartPurchases from './CartPurchases';

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (token) {
      setShow(true)
    } else {
      navigate('/login')
    }
  };


  return (
    <>
      <header>
        <a href="" ><h3>e-commerce</h3></a>
        <nav>
          <a href="/#/login"><i className="fa-solid fa-user-large"></i></a>
          <a href="/#/purchases"><i className="fa-solid fa-box-archive"></i></a>
          <button onClick={handleShow}>
            <a><i className="fa-solid fa-cart-shopping"></i></a>
          </button>
        </nav>
      </header>
      <CartPurchases show={show} handleClose={handleClose}/>
    </>

  );
};

export default NavBar;