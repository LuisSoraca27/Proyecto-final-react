import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterBynameProduct, filterCategories, getProductsThunk } from '../store/slices/Products.slice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';
import '../style/home.css'

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
    console.log(categories)
    console.log(searchValue)
    console.log(products)
    return (
        <div>
            <div className='row'>
                <aside>
                    <ListGroup className='categories'>
                        <h3 style={{ textAlign: 'center' }}>Categories</h3>
                        {
                            categories.map(category => (
                                <ListGroup.Item key={category.id} onClick={() => dispatch(filterCategories(category.id))}>
                                    {category.name}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
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
                                        <h5>{product.title}</h5>
                                        <div className='price'>
                                            <p>price</p>
                                            <h5>{product.price}</h5>
                                            <button><i class="fa-solid fa-cart-shopping"></i></button>
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