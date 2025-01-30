import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();

  // Fetch product based on ID
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        console.log(`Fetching product for ID: ${productId}`); // Debugging
        const response = await axios.get(`${import.meta.env.VITE_API_URL}product/${productId}`);
        console.log("API Response:", response.data);
        setProduct(response.data.productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (productId) {
      fetchProductById();
    }
  }, [productId]);

  // Function for Add to Cart
  const handleAddToCart = () => {
    console.log("Added to Cart:", product);
    alert(`${product.name} added to cart!`);
  };

  // Function for Buy Now
  const handleBuyNow = () => {
    console.log("Buying Now:", product);
    alert(`Proceeding to buy: ${product.name}`);
    navigate('/checkout'); // Redirect to checkout (Change URL as needed)
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {product ? (
            <>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-contain rounded-md"
              />
              <h2 className="text-3xl font-semibold mt-4 text-gray-800">{product.name}</h2>
              <p className="text-lg text-gray-600 mt-2"><strong>Category:</strong> {product.category}</p>
              <p className="text-xl text-gray-700 font-bold mt-2">${product.price}</p>
              <p className="text-gray-600 mt-4">{product.description}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition"
                >
                  <FaShoppingCart /> Add to Cart
                </button>

                {/* Buy Now Button */}
                <button
                  onClick={handleBuyNow}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                >
                  Buy Now
                </button>
              </div>

              <button
                className="mt-6 block bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition"
                onClick={() => navigate(-1)}
              >
                Back to Shop
              </button>
            </>
          ) : (
            <p className="text-center text-gray-700">Loading product details...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
