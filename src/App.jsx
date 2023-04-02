import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Testimonal from "./components/Testimonal";
import Touch from "./components/Touch";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Mission />
      <Blog />
      <Testimonal />
      <Touch />
      <Footer />
    </div>
  );
}

export default App;
