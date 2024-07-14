import About from "./components/About";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import WhyChoose from "./components/WhyChoose";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Banner />
      <WhyChoose />
      <About />
      <Banner />
    </div>
  );
}
