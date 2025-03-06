import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from "react-scroll";
import {
  FaGlobeAmericas,
  FaLaptopCode,
  FaPaw,
  FaUserClock,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const aboutRef = useRef(null);
  const headingRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [controls]);

  useGSAP(() => {
    // Animate heading with a text reveal effect
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          backgroundPosition: "0% 50%",
        },
        {
          backgroundPosition: "100% 50%",
          duration: 3,
          ease: "power3.out",
          repeat: -1,
          yoyo: true,
        }
      );
    }
  }, []);

  const aboutSections = [
    {
      title: "360° MARKETING AGENCY",
      description:
        "We are a full-service marketing agency, offering customized marketing strategies to achieve your specific business goals. Our approach covers all major channels to ensure a seamless and integrated experience.",
      icon: (
        <FaGlobeAmericas size={48} className="mb-4 mx-auto text-[#7E3F0F]" />
      ),
    },
    {
      title: "DIGITAL SAVVIES",
      description:
        "We are digital experts who excel in online services, working to ensure the success of businesses in the digital space. Our focus is on keeping businesses ahead of the curve in digital trends.",
      icon: <FaLaptopCode size={48} className="mb-4 mx-auto text-[#7E3F0F]" />,
    },
    {
      title: "MARKETING AS WILD AS A BEAR",
      description:
        "Our marketing is as wild as a bear, delivering creative solutions that help you stand out. Our strategies result in innovative and relatable content and experiences that connect with audiences in a meaningful manner and make a lasting impact.",
      icon: <FaPaw size={48} className="mb-4 mx-auto text-[#7E3F0F]" />,
    },
    {
      title: "YOU ARE OUR ONLY PRIORITY",
      description:
        "At our agency, our clients always come first. We understand that you have unique goals and challenges, and our only priority is to help you succeed. We work closely with you to understand your needs and develop customized solutions that deliver results.",
      icon: <FaUserClock size={48} className="mb-4 mx-auto text-[#7E3F0F]" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Element name="about-us">
      <section
        ref={aboutRef}
        className="py-20 bg-[#E5E3D1] text-[#2F3A37] relative overflow-hidden"
        id="about-us"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#D0FC2D]/10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#B66613]/10 translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto relative z-10 px-4">
          <div className="mb-16 text-center">
            <motion.h2
              ref={headingRef}
              className="text-5xl font-bold inline-block"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #7E3F0F, #B66613, #7E3F0F)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              THE BEARS
            </motion.h2>

            <motion.div
              className="h-1 w-24 bg-[#D0FC2D] mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {aboutSections.map((section, index) => (
              <div className="mb-4 md:mb-0" key={index}>
                <motion.div
                  className="about-section bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#B66613] h-full transform-gpu"
                  variants={itemVariants}
                  whileHover={{
                    boxShadow: "0 10px 25px -5px rgba(182, 102, 19, 0.4)",
                    borderColor: "#D0FC2D",
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                >
                  <motion.div
                    className="flex justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {section.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-[#7E3F0F] text-center">
                    {section.title}
                  </h3>
                  <p className="text-[#2F3A37] font-palatino italic text-center">
                    {section.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs;
