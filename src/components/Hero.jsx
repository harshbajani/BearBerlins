import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Element } from "react-scroll";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const elements = heroRef.current.querySelectorAll(".hero-animate");

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <Element name="home">
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#252525] to-[#7E3F0F] text-[#FFFFFF]"
        id="home"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center"
        >
          <h1 className="hero-animate text-6xl font-bold tracking-wide mb-8 text-[#D0FC2D]">
            THE BEARS
          </h1>
          <p className="hero-animate text-2xl max-w-3xl mx-auto mb-12 font-palatino italic text-[#BED0BA]">
            Marketing as wild as a bear, delivering creative solutions that help
            you stand out.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-animate inline-block"
          >
            <button className="px-10 py-4 bg-[#B66613] text-white rounded-full text-lg font-bold uppercase tracking-wider hover:bg-[#7E3F0F] transition-all">
              Explore Our Wild Marketing
            </button>
          </motion.div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Hero;
