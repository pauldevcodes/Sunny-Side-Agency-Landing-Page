import About from "./components/About";
import Footer from "./components/Footer";
import NavbarHero from "./components/NavbarHero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="">

      <NavbarHero />
      <About />
      <Services />
      <Testimonials />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
