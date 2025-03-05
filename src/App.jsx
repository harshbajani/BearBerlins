import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Global scroll animations
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      lenis.destroy();
    };
  }, []);

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
