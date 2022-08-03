import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const purchases = useSelector(state => state.Purchases)

    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])
    return (
        <div>
            <h1>purchases</h1>
        </div>
    );
};

export default Purchases;