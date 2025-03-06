import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Element } from "react-scroll";

const Hero = () => {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);

  useGSAP(() => {
    const elements = heroRef.current.querySelectorAll(".hero-animate");

    // Main text and button animations
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

    // Background pattern animation
    if (backgroundRef.current) {
      gsap.fromTo(
        backgroundRef.current,
        {
          backgroundPosition: "0% 0%",
        },
        {
          backgroundPosition: "100% 100%",
          duration: 30,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }
  }, []);

  return (
    <Element name="home">
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
        id="home"
      >
        {/* Animated background */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-[#E5E3D1] bg-opacity-70 z-0"
          style={{
            background: `linear-gradient(135deg, rgba(190,208,186,0.2) 0%, rgba(229,227,209,0.2) 25%, rgba(182,102,19,0.1) 50%, rgba(229,227,209,0.2) 75%, rgba(190,208,186,0.2) 100%)`,
            backgroundSize: "200% 200%",
          }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B66613' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E')",
            }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block p-2 px-6 rounded-full bg-[#D0FC2D] mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#7E3F0F] font-semibold">
                Wild Marketing Solutions
              </span>
            </motion.div>
          </motion.div>

          <h1 className="hero-animate text-6xl font-bold tracking-wide mb-8 text-[#7E3F0F] leading-tight">
            THE BEARS <span className="text-[#B66613]">BERLIN</span>
          </h1>

          <p className="hero-animate text-2xl max-w-3xl mx-auto mb-12 font-palatino italic text-[#2F3A37]">
            Marketing as wild as a bear, delivering creative solutions that help
            you stand out.
          </p>

          <motion.div
            className="hero-animate relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-10 py-4 bg-[#B66613] text-white rounded-full text-lg font-bold uppercase tracking-wider hover:bg-[#7E3F0F] transition-all shadow-lg">
              Explore Our Wild Marketing
            </button>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#7E3F0F] opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-bounce"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#D0FC2D] to-[#BED0BA] opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: -1,
            }}
          />

          <motion.div
            className="absolute bottom-40 left-40 w-24 h-24 rounded-full bg-gradient-to-tr from-[#B66613] to-[#7E3F0F] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: -1,
              delay: 0.5,
            }}
          />
        </div>
      </section>
    </Element>
  );
};

export default Hero;
