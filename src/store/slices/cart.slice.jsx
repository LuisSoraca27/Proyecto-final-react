import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfigs';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
        name: 'cart',
        initialState: [],
        reducers: {
            setCart: (state, action) => {
                return action.payload
            }
        }
    })

export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addProductThunk = (product) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart',product, getConfig())
        .then((res) => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const buyCart = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases',{},getConfig())
        .then((res) => {
            dispatch(setCart([]))
            console.log(res)
        })
        .catch(error => console.log(error.response))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteProduct = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig())
        .then((res) => {
            console.log(res.data)
            dispatch(getCartThunk())
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setCart } = cartSlice
    .actions;

export default cartSlice
    .reducer;
