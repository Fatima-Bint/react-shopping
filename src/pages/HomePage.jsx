import React from 'react';
import Navbar from "../components/Navbar"; // Adjust the path as necessary
import Products from "../components/Products";
// You can also import any additional components you want to display on the homepage.

const HomePage = () => {
  return (
    <>
      <Navbar /> {/* Your navigation bar */}
      <div className="home-container">
        <h1>Welcome to Our Online Store</h1>
        <Products /> {/* This will include the Products component on the home page */}
        {/* You can add more components here that you want to show on the HomePage */}
      </div>
    </>
  );
};

export default HomePage;
