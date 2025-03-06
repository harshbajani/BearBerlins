import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Element } from "react-scroll";

const services = [
  {
    title: "Social Media Marketing",
    description: "Connecting you to the world, one post at a time",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    title: "Influencer Marketing",
    description:
      "Reaching your audience through the trusted voices of influencers.",
    image:
      "https://images.unsplash.com/photo-1557840343-364332b5469a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Website Design & Development",
    description: "Building online presences that captivate and convert.",
    image:
      "https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Content Production",
    description: "Creating compelling stories that drive brand success.",
    image:
      "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Graphic Design",
    description: "Visualizing your brand's success through exceptional design.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Performance Marketing",
    description:
      "Amplifying your success through high-performing paid advertising.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Search Engine Optimization",
    description: "Climb to the top of search results, with our SEO expertise.",
    image:
      "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Marketing Consulting",
    description: "Empowering growth through expert marketing solutions.",
    image:
      "https://plus.unsplash.com/premium_photo-1690302394250-f3e7626a01b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Services = () => {
  const servicesRef = useRef(null);

  useGSAP(() => {
    const services = servicesRef.current.querySelectorAll(".service-card");

    gsap.fromTo(
      services,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Element name="services">
      <section
        ref={servicesRef}
        className="py-20 bg-gradient-to-b from-[#E5E3D12024] to-[#BFC1BA]"
        id="services"
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 text-[#7E3F0F]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            THE BEARS Services
          </motion.h2>
          <div className="grid grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card bg-[#FFFFFF] shadow-lg rounded-2xl p-6 text-center transition-all hover:shadow-2xl overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#7E3F0F]">
                  {service.title}
                </h3>
                <p className="text-[#2F3A37] mb-4">{service.description}</p>
                <motion.button
                  className="mt-6 px-6 py-2 bg-[#B66613] text-[#FFFFFF] rounded-full transition-all hover:bg-[#7E3F0F]"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#7E3F0F",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Services;
