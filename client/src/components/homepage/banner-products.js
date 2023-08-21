import React, { useState, useContext } from 'react';
import ProductList from '../context/getProducts';
const BannerProducts = () => {
    const {productList} = useContext(ProductList);
    console.log(productList);

  return (
    <div className='row'>
        <div className='productcols col-sm-12'>
        <div className="product-outer row">
            {Array.isArray(productList.data) && productList.data.length > 0 ? (
                    productList.data.map((productList) => (
                    <div className="product-inner col-sm-4">
                        <div>
                            <img src={productList.images[0]} className='img-product'/>
                            <img src={productList.images[1]} className='img-product'/>
                            <img src={productList.images[2]} className='img-product'/>
                        </div>
                        <h6>{productList.title}</h6>

                        <div className='row styled-product'>
                            <div className='col-sm-6' style={{position:'relative', left:'15px'}}>
                            <i class="fa-regular fa-copyright"></i> {productList.brand}
                            </div>
                            <div className='col-sm-6'>
                            <i class="fa-solid fa-star"></i> {productList.average_rating ? productList.average_rating : 'NA'}
                            </div>
                        </div>

                        <div className='row styled-product'>
                        <div className='col-sm-6' style={{position:'relative', left:'15px'}}>
                            <i class="fa-solid fa-indian-rupee-sign"></i> {productList.actual_price}
                            </div>
                            <div className='col-sm-6'>
                            <i class="fa-solid fa-tag"></i> {productList.discount}
                            </div>
                        </div>

                    <div className='row'>
                        <div className='col-sm-6'>
                            <a href={productList.url}><button className='btn-sbmt' value="Buy" style={{position:'relative',left:'10px'}}>Buy Directly</button></a>
                        </div>
                        <div className='col-sm-6'>
                            <button className='btn-sbmt' value="Add to Cart" style={{position:'relative',right:'10px'}}>Add to Cart</button>
                        </div>
                    </div>
                    </div>
                    ))) : <></> }

        </div>
        </div>
    </div>
  );
};

export default BannerProducts;
