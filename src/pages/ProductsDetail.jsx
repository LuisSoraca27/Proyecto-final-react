import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/Products.slice';

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
   

    return (
        <div>
            <h1>{productDetail?.title}</h1>
            <div className='detailImg'>
                <img src={productDetail?.productImgs?.[0]} alt="" />
            </div>
             <div>
                {
                    suggestedProduct.map( product => (
                        <h3 key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                            {product.title}
                        </h3>
                    ))
                }
             </div>
        </div>
    );
};

export default ProductsDetail;