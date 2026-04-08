import "./About.css";
import guyPic from "../../assets/pool_guy.jpg";

export default function About() {
  return (
    <section className="about">
      <h2 className="about__title">About Monclova Pool Services and Repairs</h2>
      <div className="about__info">
        <p className="about__text">
          At Monclova Pool Services and Repairs, we believe your pool should be
          a source of relaxation—not stress. Proudly serving homeowners
          throughout Bakersfield, we specialize in dependable weekly pool
          service, expert repairs, and quality workmanship you can count on.
          With years of hands-on experience in both pool maintenance and
          construction, we bring a deeper level of knowledge to every pool we
          service. From routine cleanings and water balancing to diagnosing and
          repairing complex issues, our approach is simple: do the job right,
          every time. What sets Monclova apart is a commitment to consistency,
          attention to detail, and honest service. We treat every pool as if it
          were our own—ensuring it stays clean, safe, and always ready to enjoy.
          No shortcuts, no guesswork—just reliable care backed by real
          expertise. Whether you need ongoing weekly service or help getting
          your pool back in top shape, you can trust Monclova Pool Services and
          Repairs to deliver professional results with a personal touch.
        </p>
        <img src={guyPic} alt="" className="about_pic" />
      </div>
    </section>
  );
}
