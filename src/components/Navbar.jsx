import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    "home",
    "services",
    "about us",
    "clients",
    "blogs",
    "contact",
  ];

  const handleSetActive = (to) => {
    setActiveSection(to.replace("-", " "));
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full bg-[#FFFFFF]/90 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            src="/path/to/bears-logo.svg"
            alt="The Bears Berlin Logo"
            className="h-10"
          />
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(" ", "-")}
                spy={true}
                smooth={true}
                offset={-70} // Adjust this value based on your navbar height
                duration={800}
                onSetActive={handleSetActive}
                className={`
                  font-bold uppercase tracking-wider
                  text-sm transition-colors duration-300
                  cursor-pointer
                  ${
                    activeSection === item
                      ? "text-[#7E3F0F]"
                      : "text-[#252525] hover:text-[#B66613]"
                  }
                `}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/united-kingdom.png"
            alt="UK"
            className="h-6 w-8"
          />

          <img
            src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/germany.png"
            alt="Germany"
            className="h-6 w-8"
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
