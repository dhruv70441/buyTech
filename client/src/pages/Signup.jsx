import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.data.success) {
        alert("Signup Successful!");
        navigate("/login");
      } else {
        alert("Signup Failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert(error.response?.data?.message || error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6]">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
          <h3 className="text-2xl font-bold text-center mb-6">Sign Up</h3>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input 
                type="text" 
                className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-0"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input 
                type="text" 
                className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-0"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}  
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
