import "./testimonials.css";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [testiNum, setTestiNum] = useState(0);

  const max = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setTestiNum((prev) => {
        if (prev >= max) {
          return 0;
        }
        return prev + 1;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const testimonailArr = [
    {
      id: 1,
      name: "John Martinez",
      role: "Homeowner",
      message: `"Amazing service! They showed up on time, fixed our pool issue fast, and the pricing was very fair. Highly recommend."`,
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Lopez",
      role: "Property Manager",
      message: `"Very professional and easy to work with. Our clients’ pools have never looked better."`,
      rating: 5,
    },
    {
      id: 3,
      name: "Mike Anderson",
      role: "Homeowner",
      message: `"Quick response time and great communication. They really know what they’re doing."`,
      rating: 4,
    },
    {
      id: 4,
      name: "Emily Rivera",
      role: "Real Estate Agent",
      message: ` "I recommend them to all my clients before showings. Always reliable and consistent quality."`,
      rating: 5,
    },
  ];

  return (
    <section className="testi" id="testimonials">
      <div className="testi__spacer"></div>
      <div className="testi__title-cont">
        <h2 className="testi__title">Real Results. Real Reviews.</h2>
      </div>
      <div className="testi__text">
        <p className="testi__name">
          {testimonailArr[testiNum].name}, {testimonailArr[testiNum].role}
        </p>
        <p className="testi__message">{testimonailArr[testiNum].message}</p>
        <p className="testi__message">{testimonailArr[testiNum].rating}/5 ⭐</p>
      </div>
    </section>
  );
}
