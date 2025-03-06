import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const clientsRef = useRef(null);
  const headingRef = useRef(null);
  const sloganRef = useRef(null);
  const ctaRef = useRef(null);

  // Placeholder client logos - replace with actual logos
  const clientLogos = [
    "/path/to/client-logo-1.svg",
    "/path/to/client-logo-2.svg",
    "/path/to/client-logo-3.svg",
    "/path/to/client-logo-4.svg",
    "/path/to/client-logo-5.svg",
    "/path/to/client-logo-6.svg",
  ];

  useGSAP(() => {
    // Animated background patterns
    const patterns = clientsRef.current.querySelectorAll(".pattern-element");
    patterns.forEach((pattern, index) => {
      gsap.to(pattern, {
        rotation: index % 2 === 0 ? 360 : -360,
        duration: 60 + index * 10,
        repeat: -1,
        ease: "none",
      });
    });

    // Animate heading with letter staggering
    if (headingRef.current) {
      const chars = headingRef.current.innerText.split("");
      headingRef.current.innerHTML = "";
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        headingRef.current.appendChild(span);
      });

      gsap.to(headingRef.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      });
    }

    // Animate logos with staggered appearance
    const logos = clientsRef.current.querySelectorAll(".client-logo");
    gsap.fromTo(
      logos,
      {
        opacity: 0,
        scale: 0.8,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 80%",
        },
      }
    );

    // Text animation for the slogan
    if (sloganRef.current) {
      gsap.from(sloganRef.current, {
        opacity: 0,
        xPercent: -5,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: sloganRef.current,
          start: "top 90%",
        },
      });
    }

    // CTA button entrance animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 20,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 95%",
          },
        }
      );
    }
  }, []);

  return (
    <Element name="clients">
      <section
        ref={clientsRef}
        className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#E5E3D12024] relative overflow-hidden"
        id="clients"
      >
        {/* Decorative pattern elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-4 border-[#D0FC2D]/10 pattern-element"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-4 border-[#B66613]/5 pattern-element"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full border-2 border-[#7E3F0F]/10 pattern-element"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="relative mb-4 inline-block">
            <motion.div
              className="absolute inset-0 -z-10 bg-[#D0FC2D] opacity-20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <h2
              ref={headingRef}
              className="text-5xl font-bold mb-4 text-[#7E3F0F] relative"
            >
              THE BEARS CLIENTS
            </h2>
          </div>

          <p
            ref={sloganRef}
            className="text-xl text-[#806557] italic mb-16 font-palatino max-w-2xl mx-auto"
          >
            Trusted by innovative brands across industries
          </p>

          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B66613]/20 to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#B66613]/20 to-transparent"></div>

            <div className="grid grid-cols-3 gap-x-12 gap-y-16 relative z-10">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="client-logo flex justify-center items-center group"
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <div className="relative p-6 bg-white rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#D0FC2D]/5 to-white rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      whileHover={{ scale: 1.05 }}
                    />
                    <img
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      className="max-h-16 transition-all duration-500 filter saturate-0 group-hover:saturate-100"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to action button */}
          <motion.div className="mt-20" ref={ctaRef}>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-[#B66613] to-[#7E3F0F] text-white rounded-full text-lg font-bold uppercase tracking-wider transition-all shadow-md relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                Join Our Growing Client List
              </span>
              <motion.span
                className="absolute inset-0 bg-[#D0FC2D] z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span className="absolute inset-0 z-20 text-[#252525] opacity-0 group-hover:opacity-100 transition-opacity">
                Join Our Growing Client List
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Clients;
