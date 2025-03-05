import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="back-to-top fixed bottom-8 right-8 z-50 
            bg-bears-green-neon text-bears-black 
            p-4 rounded-full shadow-lg 
            hover:bg-bears-brown-medium 
            transition-all duration-300"
          onClick={scrollToTop}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
