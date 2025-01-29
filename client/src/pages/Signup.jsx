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
      const response = await axios.post("http://localhost:8080/api/v1/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.data.success) { // ✅ Fixed success check
        alert("Signup Successful!");
        navigate("/login");
      } else {
        alert("Signup Failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert(error.response?.data?.message || error.message || "Something went wrong");
    } finally {
      setLoading(false); // ✅ Moved setLoading(false) to finally
    }
  };

  return (
    <Layout>
      <div className='flex flex-col items-center mt-30'>
        <h3>Sign Up</h3>
        <form onSubmit={handleSignup} className='flex flex-col'>
          <label>First Name</label>
          <input 
            type="text" 
            className='border-2' 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label>Last Name</label>
          <input 
            type="text" 
            className='border-2' 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}  
            required
          />
          <label>Email</label>
          <input 
            type="email" 
            className='border-2' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input 
            type="password" 
            className='border-2' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit' className='border-2' disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
