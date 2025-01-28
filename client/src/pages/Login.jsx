import React, { useState } from 'react'
import Layout from '../components/Layout'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] =  useState("");

  return (
    <Layout>
      <div className=' flex flex-col items-center mt-30'>
        <h3>Login</h3>
        <form 
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
          <button type='submit' className=' border-2'>Login</button>
        </form>
      </div>
    </Layout>
  )
}
export default Login