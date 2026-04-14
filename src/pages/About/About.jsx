import "./About.css";
import guyPic from "../../assets/pool_guy.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__info">
        <div className="about__titles">
          <h2 className="about__title">Elevating pool care standards.</h2>
          <h3 className="about__subtitle">
            About Monclova's Pool Service And Repairs
          </h3>
          <p className="about__text">
            At MPS&R, we believe your pool should be a source of relaxation—not
            stress. Proudly serving homeowners throughout Bakersfield, we
            specialize in dependable weekly pool service, expert repairs, and
            quality workmanship you can count on. With years of hands-on
            experience in both pool maintenance and construction, we bring a
            deeper level of knowledge to every pool we service. From routine
            cleanings and water balancing to diagnosing and repairing complex
            issues, our approach is simple: do the job right, every time. What
            sets MPS&R apart is a commitment to consistency, attention to
            detail, and honest service. We treat every pool as if it were our
            own—ensuring it stays clean, safe, and always ready to enjoy. No
            shortcuts, no guesswork—just reliable care backed by real expertise.
            Whether you need ongoing weekly service or help getting your pool
            back in top shape, you can trust Monclova's Pool Services and
            Repairs to deliver professional results with a personal touch.
          </p>
        </div>

        <img src={guyPic} alt="" className="about_pic" />
      </div>
    </section>
  );
}
