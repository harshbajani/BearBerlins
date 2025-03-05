import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-bears-white text-bears-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Clients />
        <Testimonials />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
