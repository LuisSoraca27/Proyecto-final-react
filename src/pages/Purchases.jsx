import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import '../style/purchases.css'

const Purchases = () => {

    const purchases = useSelector(state => state.purchases)

    const dispatch = useDispatch();
    
   console.log(purchases)
    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])
    return (
        <div className='container-purchases'>
             <div className='home'>
                <a href="/#/">Home</a>
                <i className="fa-solid fa-angle-right"></i>
                <p>purchases</p>
            </div>
            <h3>My purchases</h3>
            <div>
                {purchases.map(product => (
                    <div key={product.id} className='purchases'>
                        <div className='date-purchases'>
                           <span>Fecha de compra: <b>{product.createdAt.substring(0,10)}</b></span>
                        </div>
                            {
                                product.cart.products.map(product => (
                                    <div key={product.id} className='purchase-detail'>
                                        <p>{product.title}</p>
                                        <div>{product?.productsInCart.quantity}</div>
                                         <b>$ {product.price}</b>
                                    </div>
                                ))
                            }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Purchases;