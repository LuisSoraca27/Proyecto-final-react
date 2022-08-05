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

            {/*   <div>
                {
                    suggestedProduct.map(product => (
                        <h3 key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                            {product.title}
                        </h3>
                    ))
                }
            </div> */}
        </aside>
    );
};

export default ProductsDetail;