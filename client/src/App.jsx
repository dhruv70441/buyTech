import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';
import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';
import { AuthProvider } from './context/AuthContext';
import Category from './pages/Category';
function App() {
  return(
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:category' element={<Category />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </AuthProvider> 
  )  
}

export default App;
