// Navbar.js
import React from 'react';
import './Navbar.css'; // Don't forget to create this CSS file!

const Navbar = () => {
    return (
        // This entire block is JSX: HTML structure within JavaScript
        <nav className="navbar">
            <div className="navbar-logo">
                {/* Standard anchor tag in JSX */}
                <a href="/">ReactApp</a>
            </div>
            <ul className="navbar-links">
                {/* JSX lists */}
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;