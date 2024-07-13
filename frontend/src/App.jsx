import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Hero/>
    </div>
  );
}
