import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from '../pages/Home';
import LoginSignup from '../pages/Login_Signup';  // Import other pages/components as needed
import ProductsPage from '../pages/Products';  // Import other pages/components as needed
import AboutUsPage from "../pages/AboutUsPage"
import Navbar from "../components/Navbar"


const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/stellar-sprint" exact element={<HomePage/>} />
        <Route path="/user/signin" element={<LoginSignup/>} />
        <Route path="/user/signup" element={<LoginSignup/>} />
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/about" element={<AboutUsPage/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
