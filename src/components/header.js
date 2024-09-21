import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>NAVIGO</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About the Team</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;


