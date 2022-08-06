import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/Products.slice';
import '../style/productDetail.css'

const ProductsDetail = () => {

    const products = useSelector(state => state.products);
    const [productDetail, setProductDetail] = useState({});
    const [suggestedProduct, setSuggestedProduct] = useState([]);
    const [counter, setCounter] = useState(1)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    useEffect(() => {
        const productsAll = products.find(productItem => productItem.id === Number(id))
        setProductDetail(productsAll);
        console.log(productDetail)

        const filteredProducts = products.filter(product =>
            product?.category?.id === productDetail?.category?.id
        )
        setSuggestedProduct(filteredProducts)
    }, [products, id])
    console.log(suggestedProduct)
    console.log(productDetail)


    return (
        <aside>
            <div className='home'>
                <a href="/#/">Home</a>
                <i class="fa-solid fa-angle-right"></i>
                <p>{productDetail?.title}</p>
            </div>

            <div className='container'>
                <div className='container-carrusel'>
                    <Carousel className='carrusel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carrusel-img"
                                src={productDetail?.productImgs?.[0]}
                                alt="First slide "
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carrusel-img"
                                src={productDetail?.productImgs?.[1]}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carrusel-img"
                                src={productDetail?.productImgs?.[2]}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='container-description'>
                    <h2>{productDetail?.title}</h2>
                    <div className='description'>
                        <p>{productDetail?.description}</p>
                    </div>
                    <div className='price-option'>
                        <div>
                            <h6>price:</h6>
                            <h5>{'$ ' + productDetail?.price}</h5>
                        </div>
                        <div>
                            <h6>Quantity</h6>
                            <button>-</button>
                            <p>{counter}</p>
                            <button>+</button>
                        </div>
                    </div>
                    <button className='buttom-cart'>Add to cart</button>
                </div>
            </div>
            <div className='card-products'>
                {
                    suggestedProduct.map(product => (
                        <div className="product" key={product.id} onClick={() => {
                            navigate(`/product/${product.id}`)
                            window.scrollTo(0, 0);
                        }}>
                            <div className='imgProduct'>
                                <img src={product.productImgs} alt="" />
                            </div>
                            <div style={{ height: '80px' }}>
                                <h5>{product.title}</h5>
                            </div>
                            <div className='price'>
                                <p>price</p>
                                <h5>{product.price}</h5>
                                <button><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </aside>
    );
};

export default ProductsDetail;