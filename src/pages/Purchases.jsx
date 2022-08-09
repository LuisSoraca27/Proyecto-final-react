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
                <i class="fa-solid fa-angle-right"></i>
                <p>purchases</p>
            </div>
            <h3>My purchases</h3>
        </div>
    );
};

export default Purchases;