import React, { useState, useContext } from 'react';

const BannerProducts = () => {
    const [productList, setProductList] = useState([[]]);

  return (
    <>
        <div className="product-outer row">
            {Array.isArray(productList) && productList.length > 0 ? (
                    productList.map((productList) => (
                    <div className="product-inner col-sm-4">
                        
                    </div>
                    ))) : <></> }

        </div>
    </>
  );
};

export default BannerProducts;
