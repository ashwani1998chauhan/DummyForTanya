// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Product'; // Assuming 'Product.js' is your product component
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import "./NavBar.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          
          <ul className="navbar-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/products" className="nav-link">Products</Link></li>
            <li><Link to="/contact-us" className="nav-link">Contact Us</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
