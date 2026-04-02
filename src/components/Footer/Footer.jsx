import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Pool Service. All rights reserved.</p>
      </div>
    </footer>
  );
}
