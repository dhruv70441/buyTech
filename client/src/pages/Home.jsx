import React from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Discover the Latest Tech</h1>
        <p className="text-xl mt-4">Exclusive deals on mobiles, laptops, smartwatches & more!</p>
        <Link to="/shop">
          <button className="mt-6 bg-amber-500 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-amber-600 transition">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {[
            { name: "Mobile", img: "https://via.placeholder.com/150", link: "/category/mobile" },
            { name: "Smartwatch", img: "https://via.placeholder.com/150", link: "/category/smartwatch" },
            { name: "Laptop", img: "https://via.placeholder.com/150", link: "/category/laptop" },
            { name: "Tablet", img: "https://via.placeholder.com/150", link: "/category/tablet" },
          ].map((category, index) => (
            <NavLink
              key={index}
              to={category.link}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <img src={category.img} alt={category.name} className="w-24 h-24 mx-auto" />
              <h3 className="text-xl font-bold mt-2">{category.name}</h3>
            </NavLink>
          ))}
        </div>
      </section>
      </div>
    </Layout>
  )
}

export default Home




