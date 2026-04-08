import "./Main.css";
import mainVid from "../../assets/pool_vid.mp4";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";

export default function Main() {
  return (
    <main className="main">
      <Home />
      <About />
    </main>
  );
}
