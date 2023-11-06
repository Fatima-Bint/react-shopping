// src/router.jsx
import React from 'react';
import {Routes, Route,  Navigate } from 'react-router-dom';
import App from './App';
import LoginForm from './pages/LoginForm';
import { useAuth } from './context/useAuth'; 
// import HomePage from './HomePage';
// import ProfilePage from './ProfilePage';
// import ShoppingCart from './ShoppingCart';

const Router = () => {
  const { currentUser } = useAuth();

  return (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<LoginForm />} />
    {/* <Route path="/profile" element={currentUser ? <ProfilePage /> : <Navigate to="/login" />} /> */}
    {/* <Route path="/cart" element={<ShoppingCart />} /> */}
    
  </Routes>
 
);
  };

export default Router;


