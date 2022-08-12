import React, { useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  '../style/cart.css';
import { buyCart, deleteProduct, getCartThunk } from '../store/slices/cart.slice';


const CartPurchases = ({show, handleClose}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart)


    useEffect(() => {
        dispatch(getCartThunk())
    },[])
    console.log(cart)
    return (
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Purchases</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       {
        cart.map( product => (
          <div className='info-cart'>
            <p>{product.brand}</p>
             <div className='name-product'><b onClick={() => navigate(`/product/${product.id}`)}>{product.title}</b></div>
             <div className='quantity'>
             <span>{product.productsInCart.quantity}</span>
             <button onClick={() => {dispatch(deleteProduct(product.id))}}><i className="fa-solid fa-delete-left"></i></button>
             </div>
          </div>
        ))
       }
       <button onClick={() => {dispatch(buyCart())}} className='checkout'>checkout</button>
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default CartPurchases;