import { useEffect, useRef } from "react";
import "./About.css";
import guyPic from "../../assets/aboutPic.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        imageRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about" id="about">
      <div className="about__info">
        <div ref={textRef} className="about__titles">
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

        <img ref={imageRef} src={guyPic} alt="" className="about_pic" />
      </div>
      <div className="about__divider-top"></div>
      <div className="about__divider-top_middle"></div>
      <div className="about__divider-top_bottom"></div>
      <div className="about__divider-bottom_top"></div>
      <div className="about__divider-bottom_middle"></div>
      <div className="about__divider-bottom_bottom"></div>
    </section>
  );
}
