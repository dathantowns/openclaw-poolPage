import "./Home.css";
import homeVid from "../../assets/pool_vid.mp4";

export default function Home() {
  return (
    <section className="home">
      <video
        src={homeVid}
        className="home__vid"
        autoPlay
        muted
        loop
        playsInline
      />
      <h1 className="home__title">
        Complete Pool Services & Repairs for Bakersfield Homes
      </h1>
      <h2 className="home__subtitle">
        Clean, Balanced, and Always Swim-Ready.
      </h2>
      <button className="home__estimate-btn">GET A FREE ESTIMATE</button>
    </section>
  );
}
