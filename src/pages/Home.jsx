import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterBynameProduct, filterCategories, getProductsThunk } from '../store/slices/Products.slice';
import axios from 'axios';
import '../style/home.css'
import { addProductThunk } from '../store/slices/cart.slice';

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        dispatch(getProductsThunk())

        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
            .then(res => setCategories(res.data.data.categories))
    }, [])


    const filterByCategories = (e) => {
        dispatch(filterCategories(e.target.value))
    }
    console.log(categories)
    console.log(searchValue)
    console.log(products)
    return (
        <div>
            <div className='row'>
                <aside>
                    <select name="categories" onChange={filterByCategories} className='categories'>
                        <option value="">All the products</option>
                        {
                            categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                    </select>
                </aside>
                <section>
                    <form className=" Sinput">
                        <input
                            placeholder="What are you looking for ?"
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                            className='Sinput'
                        />
                        <button onClick={() => dispatch(filterBynameProduct(searchValue))}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <div className='card-products'>
                        {
                            products.map(product => (
                                <div onClick={() => navigate(`/product/${product.id}`)} key={product.id} className="product">
                                    <div className='imgProduct'>
                                        <img src={product.productImgs} alt="" />
                                    </div>
                                    <div style={{ height: '80px' }}>
                                        <h5>{product.title}</h5>
                                    </div>
                                    <div className='price'>
                                        <p>price</p>
                                        <h5>{product.price}</h5>
                                        <button onClick={ () => {
                                            const productAdd = {
                                                id: product.id,
                                                quantity: 1
                                            }
                                            console.log(productAdd)
                                            dispatch(addProductThunk(productAdd))
                                        }}>
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;