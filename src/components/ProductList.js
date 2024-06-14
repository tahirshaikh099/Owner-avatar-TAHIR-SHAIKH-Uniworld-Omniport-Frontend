import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/ProductList.css';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };


  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="product-list">
      <h1>Product List</h1>
      {Object.keys(groupedProducts).map(category => (
        <div key={category} className="product-category">
          <h2>{category}</h2>
          <div className="products">
            {groupedProducts[category].map(product => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
