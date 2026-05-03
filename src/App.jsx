import "./main.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
