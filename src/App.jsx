import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import Router from './Router'; 
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
