import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Element } from "react-scroll";

const Clients = () => {
  const clientsRef = useRef(null);

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
    const logos = clientsRef.current.querySelectorAll(".client-logo");

    gsap.fromTo(
      logos,
      {
        opacity: 0,
        scale: 0.5,
        rotation: -180,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out",
      }
    );
  }, []);

  return (
    <Element name="clients">
      <section ref={clientsRef} className="py-20 bg-[#252525]" id="clients">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-[#D0FC2D]">
            THE BEARS Clients
          </h2>
          <div className="grid grid-cols-3 gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="client-logo flex justify-center items-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="max-h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:brightness-125"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Clients;
