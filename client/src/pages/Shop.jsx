import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';

const Shop = () => {
  const [data, setData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}product/`);
        
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

  // Group products by category
  const groupedProducts = data.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <Layout>
      <div className="container mx-auto p-4 bg-gradient-to-r from-[#F4F6F8] to-[#E2E8F0]">
        {Object.keys(groupedProducts).length > 0 ? (
          Object.entries(groupedProducts).map(([category, products]) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <NavLink key={product._id} to={`/product/${product._id}`}>
                    <div 
                      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="relative w-full h-48">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                        <p className="text-xl font-bold text-gray-900 mt-2">${product.price}</p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
