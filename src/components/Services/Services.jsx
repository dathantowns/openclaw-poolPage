import React from 'react';
import Card from './Card.jsx';
import './Services.css';

export default function Services() {
  const items = [
    { title: 'Weekly Cleaning', desc: 'Regular pool cleaning and maintenance to keep your water crystal clear.' },
    { title: 'Chemical Balancing', desc: 'Precise chemical treatments for safe, healthy swimming.' },
    { title: 'Equipment Inspection', desc: 'Thorough filter, pump, and heater checks to prevent costly repairs.' },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>What We Offer</h2>
        <div className="grid">
          {items.map((item, i) => (
            <Card key={i} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
