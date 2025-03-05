import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Footer = () => {
  const services = [
    "Social Media Marketing",
    "Influencer Marketing",
    "Website Design & Development",
    "Content Production",
    "Graphic Design",
    "Performance Marketing",
    "Search Engine Optimization",
    "Consulting",
  ];

  const quickLinks = ["Home", "About Us", "Clients", "Blogs", "Contact Us"];

  return (
    <Element name="contact">
      <footer className="bg-[#252525] text-[#FFFFFF] py-16" id="contact">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#D0FC2D]">
              THE BEARS BERLIN
            </h3>
            <p className="mb-4 text-[#BED0BA]">Hosemannstr. 6, 10409 Berlin</p>
            <p className="mb-4 text-[#BED0BA]">info@thebearsberlin.com</p>
            <p className="text-[#BED0BA]">+49 160 63 05 757</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#B66613]">Services</h4>
            <ul>
              {services.map((service, index) => (
                <li
                  key={index}
                  className="mb-2 hover:text-[#D0FC2D] transition-colors"
                >
                  <a href="#" className="text-[#BED0BA]">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#B66613]">
              Quick Links
            </h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="mb-2 hover:text-[#D0FC2D] transition-colors"
                >
                  <a href="#" className="text-[#BED0BA]">
                    {link}
                  </a>
                </li>
              ))}
              <li className="mb-2 hover:text-[#D0FC2D] transition-colors">
                <a href="#" className="text-[#BED0BA]">
                  Impressum
                </a>
              </li>
              <li className="hover:text-[#D0FC2D] transition-colors">
                <a href="#" className="text-[#BED0BA]">
                  Privacy Statement
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#B66613]">
              Stay Wild, Stay Informed
            </h4>
            <p className="mb-4 text-[#BED0BA]">
              Subscribe to our newsletter for marketing insights
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-3 bg-[#4F473C] border border-[#B66613] text-[#FFFFFF] w-full rounded-l-lg"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D0FC2D] text-[#252525] px-6 rounded-r-lg hover:bg-[#B66613] transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-[#B66613]">
          <p className="text-[#BED0BA]">
            © 2025 THE BEARS BERLIN. All Rights Reserved.
          </p>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
