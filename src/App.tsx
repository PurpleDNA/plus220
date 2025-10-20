import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Process from "./components/Process/Process";
import Projects from "./components/Projects/Projects";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import InfiniteCarousel from "./components/InfiniteCarousel";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <InfiniteCarousel />
      <Process />
      <Projects />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
