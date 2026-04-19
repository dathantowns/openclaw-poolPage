import "./Home.css";
import homeVid from "../../assets/pool_vid.mp4";
import mobileVid from "../../assets/mobileHome.mp4";

export default function Home() {
  return (
    <section className="home" id="home">
      <video src={homeVid} className="home__vid" autoPlay muted loop />
      <h1 className="home__title">
        Complete Pool Services & Repairs for Bakersfield Homes
      </h1>
      <h2 className="home__subtitle">
        Clean, Balanced, and Always Swim-Ready.
      </h2>
      <a href="#contact" className="home__contact-link">
        {" "}
        <button className="home__estimate-btn">GET A FREE ESTIMATE</button>
      </a>
    </section>
  );
}
