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
    return (
        <div>
            <Row>
               <Col lg={3}>
               <ListGroup>
                {
                    categories.map(category => (
                        <ListGroup.Item key={category.id} onClick={() => dispatch(filterCategories(category.id))}>
                            {category.name}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
               </Col>
                <Col>

               <h1>Home</h1>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                />
                <Button variant="outline-secondary" onClick={() => dispatch(filterBynameProduct(searchValue))}>
                    Button
                </Button>
            </InputGroup>
              <Row>
             <div className='d-flex flex-wrap '>
             {
                products.map(product => (
                    <div onClick={() => navigate(`/product/${product.id}`)} key={product.id} className="product">
                        <div className='imgProduct'>
                            <img src={product.productImgs} alt="" />
                        </div>
                        <h5>{product.title}</h5>
                    </div>
                ))
            }
             </div>
              </Row>
                </Col>
            </Row>
           
        </div>
    );
};

export default Home;