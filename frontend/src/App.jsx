import { useEffect, useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import WhyChoose from "./components/WhyChoose";
import Popup from "./components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <NavBar HandlePopup={HandlePopup} />
      <Hero />
      <Banner />
      <WhyChoose />
      <About HandlePopup={HandlePopup} />
      <Banner />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}
