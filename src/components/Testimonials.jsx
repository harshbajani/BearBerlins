import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "The Bears transformed our digital presence with their wild and creative approach. Absolutely game-changing!",
      name: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      quote:
        "Their marketing strategies are like a roaring bear - powerful, strategic, and impossible to ignore.",
      name: "Michael Chen",
      company: "Global Startups LLC",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
    },
    {
      quote:
        "Incredible work! The Bears helped us breakthrough our marketing plateaus with innovative strategies.",
      name: "Emma Rodriguez",
      company: "Creative Solutions Group",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
    },
    {
      quote:
        "A marketing agency that truly understands modern digital landscapes. Highly recommended!",
      name: "David Kim",
      company: "NextGen Technologies",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
    },
    {
      quote:
        "The Bears bring creativity and strategic thinking to every project. They're not just an agency, they're partners.",
      name: "Aisha Patel",
      company: "Global Retail Innovations",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? "text-[#D0FC2D]" : "text-[#806557]"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#252525] to-[#7E3F0F] text-[#FFFFFF]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16 text-[#D0FC2D]">
          THE BEARS Testimonials
        </h2>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#4F473C]/50 p-12 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-24 h-24 rounded-full mb-6 border-4 border-[#D0FC2D]"
                />
                <div className="mb-6">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
                <p className="text-2xl font-palatino italic mb-8 text-center text-[#BED0BA]">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-[#D0FC2D]">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-[#BED0BA]">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`
                  w-4 h-4 rounded-full transition-all duration-300
                  ${
                    activeTestimonial === index
                      ? "bg-[#D0FC2D] scale-125"
                      : "bg-[#FFFFFF]/50 hover:bg-[#FFFFFF]/80"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
