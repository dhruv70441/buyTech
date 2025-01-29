import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
  const [data, setData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/product/');
        
        // Ensure response contains data
        if (response.data && response.data.allProducts) {
          setData(response.data.allProducts);
        } else {
          console.error('Error: Invalid API response');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      {data.length > 0 ? (
        data.map((product) => <div key={product._id}>{product.name}</div>)
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Shop;
