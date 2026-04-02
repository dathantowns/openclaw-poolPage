import React from "react";
import "./Footer.css";
export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Pool Service. All rights reserved.</p>
      </div>
    </footer>
  );
}
