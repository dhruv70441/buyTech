import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <main 
            className=' min-h-screen grow'
        >
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout