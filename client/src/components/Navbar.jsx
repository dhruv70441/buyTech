import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav 
      className=' bg-cyan-900 h-12 flex items-center justify-between text-white font-bold'
    >
        <div>
          <NavLink 
            to="/"
            className=' text-3xl font-bold italic'
          >🛒buyTech</NavLink>
        </div>
        <div>
          <NavLink 
            to="/"
            className={({isActive}) => 
              isActive
              ?' text-amber-200 mr-4'
              :' text-sky-400 mr-4'
            }
          >Home</NavLink>
          <NavLink 
            to="/login"
            className={({isActive}) => 
              isActive
              ?' text-amber-200 mr-4'
              :' text-sky-400 mr-4'
            }
          >Login</NavLink>
          <NavLink 
            to="/signup"
            className={({isActive}) => 
              isActive
              ?' text-amber-200 mr-4'
              :' text-sky-400 mr-4'
            }
          >Signup</NavLink>
        </div>
    </nav>
  )
}

export default Navbar