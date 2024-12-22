// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Optional, if using React Router

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}><a href="/">Can I Grad</a></div>
      <ul style={styles.navItems}>
        <li><a href="/degree" style={styles.link}>My Degree</a></li>
        <li><a href="/about" style={styles.link}>My University</a></li>
        <li><a href="/login" style={styles.link}>Login</a></li>
      </ul>
    </nav>
  );
};

// Add some basic inline styles (or use CSS)
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  navItems: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
};

export default Navbar;
