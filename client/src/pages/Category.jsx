import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Category = () => {

    const [products, setProducts] = useState([]);
    const { category } = useParams();

    // Fetch products based on category
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}product/category/${category}`);
                setProducts(response.data.productData); // Set the fetched products in the state
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
    
        if (category) {
            fetchProducts();
        }
    }, [category]);
    

  return (
    <Layout> 
        <div className="min-h-screen bg-gray-100 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Products in this Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.length > 0 ? (
            products.map((product) => (
                <div key={product._id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-contain rounded-md" />
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <p className="text-lg font-bold text-gray-700 mt-2">${product.price}</p>
                </div>
            ))
            ) : (
            <p>Loading products...</p>
            )}
        </div>
        </div>
    </Layout>
  )
}

export default Category