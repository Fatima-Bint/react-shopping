import React from 'react';
import { BrowserRouter, Link} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import { useAuth } from './context/useAuth';
import Router from './Router'; 
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  const { currentUser } = useAuth();
  return (
    <AuthProvider>
      <BrowserRouter>
      
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
