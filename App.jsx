import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Recommendations from "./components/Recommendations";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Recommendations />
        <Contact />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default App