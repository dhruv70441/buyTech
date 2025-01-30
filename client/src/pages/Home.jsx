import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-r from-[#F4F6F8] to-[#E2E8F0] text-[#2B2B2B]">
        {/* Hero Section (Updated Banner) */}
        <section className="bg-gradient-to-r  from-[#0e7480] to-[#6EE7B7] text-white text-center py-20 px-6 shadow-lg">
          <h1 className="text-5xl font-extrabold tracking-wide text-[#F8C630] drop-shadow-lg">
            Discover the Newest Tech
          </h1>
          <p className="text-xl mt-4 opacity-90">
            Get the best deals on mobiles, laptops, and other products!
          </p>
          <NavLink to="/shop">
            <button className="mt-6 bg-[#FF5E57] text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-[#F8C630] hover:text-[#2B2B2B] transition-all duration-300 shadow-md">
              Shop Now
            </button>
          </NavLink>
        </section>
        {/* Categories Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-semibold text-center text-[#FF5E57]">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {categories.length > 0 ? (
              categories.map((category) => (
                <NavLink
                  key={category._id}
                  to={`/shop/${category.category}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 text-center border border-[#DDDDDD] hover:border-[#FF5E57] duration-300"
                >
                  <img
                    src={category.imageUrl}
                    alt={category.category}
                    className="w-28 h-28 mx-auto object-cover rounded-md "
                  />
                  <h3 className="text-xl font-bold mt-4">{category.category}</h3>
                </NavLink>
              ))
            ) : (
              <p className="text-center text-gray-500">Loading categories...</p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
