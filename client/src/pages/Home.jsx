import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  // State to store category data
  const [categories, setCategories] = useState([]);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/category');
        setCategories(response.data); // Set the fetched categories in the state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white text-center py-20">
          <h1 className="text-5xl font-bold">Discover the Latest Tech</h1>
          <p className="text-xl mt-4">Exclusive deals on mobiles, laptops, smartwatches & more!</p>
          <NavLink to="/shop">
            <button className="mt-6 bg-amber-500 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-amber-600 transition">
              Shop Now
            </button>
          </NavLink>
        </section>

        {/* Categories Section */}
        <section className="max-w-6xl mx-auto py-10">
          <h2 className="text-3xl font-semibold text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {categories.length > 0 ? (
              categories.map((category) => (
                <NavLink
                  key={category._id}
                  to={`/category/${category.category.toLowerCase()}`}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
                >
                  <img src={category.imageUrl} alt={category.category} className="w-24 h-24 mx-auto" />
                  <h3 className="text-xl font-bold mt-2">{category.category}</h3>
                </NavLink>
              ))
            ) : (
              <p>Loading categories...</p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
