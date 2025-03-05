import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const AboutUs = () => {
  const aboutRef = useRef(null);

  const aboutSections = [
    {
      title: "360° MARKETING AGENCY",
      description:
        "We are a full-service marketing agency, offering customized marketing strategies to achieve your specific business goals. Our approach covers all major channels to ensure a seamless and integrated experience.",
    },
    {
      title: "DIGITAL SAVVIES",
      description:
        "We are digital experts who excel in online services, working to ensure the success of businesses in the digital space. Our focus is on keeping businesses ahead of the curve in digital trends.",
    },
    {
      title: "MARKETING AS WILD AS A BEAR",
      description:
        "Our marketing is as wild as a bear, delivering creative solutions that help you stand out. Our strategies result in innovative and relatable content and experiences that connect with audiences in a meaningful manner and make a lasting impact.",
    },
    {
      title: "YOU ARE OUR ONLY PRIORITY",
      description:
        "At our agency, our clients always come first. We understand that you have unique goals and challenges, and our only priority is to help you succeed. We work closely with you to understand your needs and develop customized solutions that deliver results.",
    },
  ];

  return (
    <Element name="about-us">
      <section
        ref={aboutRef}
        className="py-20 bg-gradient-to-br from-[#7E3F0F] to-[#252525] text-[#FFFFFF]"
        id="about-us"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#D0FC2D]">
            THE BEARS
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {aboutSections.map((section, index) => (
              <motion.div
                key={index}
                className="about-section bg-[#4F473C]/70 p-8 rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  opacity: { duration: 0.5 },
                  y: { duration: 0.5 },
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-[#D0FC2D]">
                  {section.title}
                </h3>
                <p className="text-[#BED0BA] font-palatino italic">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs;
