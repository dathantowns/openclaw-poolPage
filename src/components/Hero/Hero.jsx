import React from react
import ./Hero.css
export default function Hero(){
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Pool Service Landing</h1>
        <p>Professional pool cleaning, maintenance, and chemical balancing for homes and businesses.</p>
        <button className="ctaBtn">Book a Free Quote</button>
      </div>
    </section>
  )
}
