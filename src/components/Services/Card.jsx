import React from 'react';
import './Services.css';
export default function Card({ title, desc }){
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
