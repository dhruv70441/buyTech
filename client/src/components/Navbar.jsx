import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className=" bg-[#262626] h-12 flex items-center justify-between text-white font-bold px-4">
      <div>
        <NavLink to="/" className="text-3xl font-bold italic">
          🛒buyTech
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-[#82b440] mr-4' : 'text-white-400 hover:text-[#82b440] mr-4')}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? 'text-[#82b440] mr-4' : 'text-white-400 hover:text-[#82b440] mr-4')}
        >
          Shop
        </NavLink>

        {user?.loggedIn ? (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? 'text-[#82b440] mr-4' : 'text-white-400 mr-4 hover:text-[#82b440]')}
            >
              Dashboard
            </NavLink>
            <button
              onClick={logout} // Ensure logout function is called
              className="text-white-400 hover:text-[#82b440] mr-4 cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'text-[#82b440] mr-4' : 'text-white-400 hover:text-[#82b440] mr-4')}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? 'text-[#82b440] mr-4' : 'text-white-400 hover:text-[#82b440] mr-4')}
            >
              Signup
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
