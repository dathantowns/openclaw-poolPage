import React from react
import Navbar from ../Navbar/Navbar.jsx
import Hero from ../Hero/Hero.jsx
import Services from ../Services/Services.jsx
import CTA from ../CTA/CTA.jsx
import Footer from ../Footer/Footer.jsx
import ./Main.css

export default function Main(){
  return (
    <div className="pool-app">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </div>
  )
}
