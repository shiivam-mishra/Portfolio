import "./app.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>

      <section>
        <Services />
      </section>

      <section id="Project">
        <Parallax type="project" />
      </section>
      {/* 
      <section id="Project">
      </section> */}

      <Portfolio />

      {/* <section id="Educations">Educations</section> */}

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
