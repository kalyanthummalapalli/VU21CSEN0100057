import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ApiService.getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      {products.map(product => (
        <div key={product.productId}>
          <h2>{product.productName}</h2>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}</p>
          <p>Availability: {product.availability}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProductsPage;