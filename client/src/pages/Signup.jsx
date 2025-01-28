import React, { useState } from 'react'
import Layout from '../components/Layout'

const Signup = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <Layout>
      <div className=' flex flex-col items-center mt-30'>
        <h3>Sign Up</h3>
        <form 
          className=' flex flex-col '
        >
          <label>First Name</label>
          <input type="text" className=' border-2' />
          <label>Last Name</label>
          <input type="text" className=' border-2' />
          <label>Email</label>
          <input type="email" className=' border-2' />
          <label>Password</label>
          <input type="text" className=' border-2' />
          <button type='submit' className=' border-2'>signup</button>
        </form>
      </div>
    </Layout>
  )
}
export default Signup;