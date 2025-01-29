import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className=" bg-cyan-900 h-12 flex items-center justify-between text-white font-bold px-4">
      <div>
        <NavLink to="/" className="text-3xl font-bold italic">
          🛒buyTech
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-amber-200 mr-4' : 'text-sky-400 mr-4')}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? 'text-amber-200 mr-4' : 'text-sky-400 mr-4')}
        >
          Shop
        </NavLink>

        {user?.loggedIn ? (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? 'text-amber-200 mr-4' : 'text-sky-400 mr-4')}
            >
              Dashboard
            </NavLink>
            <button
              onClick={logout} // Ensure logout function is called
              className="text-sky-400 hover:text-amber-200 mr-4 cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'text-amber-200 mr-4' : 'text-sky-400 mr-4')}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? 'text-amber-200 mr-4' : 'text-sky-400 mr-4')}
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
