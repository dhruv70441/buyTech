import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] =  useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();


  const handleLogin = async(e) => {
    e.preventDefault();

    setLoading(true)
    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });

      if (response.data.status) {
        alert("Login Successful!");
        navigate("/");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className=' flex flex-col items-center mt-30'>
        <h3>Login</h3>
        <form 
          onSubmit={handleLogin}
          className=' flex flex-col '
        >
          <label>Email</label>
          <input 
            type="email" 
            className=' border-2' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input 
            type="password" 
            className=' border-2' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className=' border-2' disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        </form>
      </div>
    </Layout>
  )
}
export default Login