import "./Main.css";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

export default function Main() {
  return (
    <main className="main">
      <Home />
      <About />
      <Contact />
    </main>
  );
}
