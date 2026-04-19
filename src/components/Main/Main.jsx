import "./Main.css";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Services from "../../pages/Services/Services";
import Testimonials from "../../pages/testimonials/testimonials";
import Contact from "../../pages/Contact/Contact";

export default function Main() {
  return (
    <main className="main">
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
