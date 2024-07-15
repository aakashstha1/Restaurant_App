import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
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
      <Footer/>
    </div>
  );
}
