import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const sceneRef = useRef(null);

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

  // Initialize GSAP timeline and set up scene
  useGSAP(() => {
    // Setup scene perspective
    gsap.set(sceneRef.current, {
      perspective: 2000,
      transformStyle: "preserve-3d",
    });

    // Initialize all cards off-screen
    gsap.set(".testimonial-card", {
      rotationY: 180,
      opacity: 0,
      scale: 0.6,
      x: () => Math.random() * 1000 - 500,
      y: () => Math.random() * 500 - 250,
      z: -1000,
    });

    // Bring first card into view
    animateCardTransition(null, 0, true);

    // Create floating particles, title animations, background animations, etc.
    createParticles();

    // (Title glitch and background animations remain unchanged)
    // ...
  }, []);

  // Create floating particles (unchanged)
  const createParticles = () => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle, i) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * -500,
        opacity: Math.random() * 0.6 + 0.2,
      });
      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        z: `+=${Math.random() * 300}`,
        opacity: Math.random() * 0.4 + 0.1,
        duration: 5 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });
  };

  /**
   * Animate transition between cards.
   * @param {number|null} prevIndex - Previous card index (null for initial load).
   * @param {number} nextIndex - New card index.
   * @param {boolean} immediate - If true, no exit animation (for initial load).
   */
  const animateCardTransition = (prevIndex, nextIndex, immediate = false) => {
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    // If there is a previous card (i.e. not initial load), animate it out
    if (prevIndex !== null) {
      tl.to(`.card-${prevIndex}`, {
        rotationY: -180,
        rotationX: Math.random() * 60 - 30,
        opacity: 0,
        scale: 0.6,
        x: Math.random() * 1000 - 500,
        y: Math.random() * 500 - 250,
        z: -800,
        duration: immediate ? 0 : 1,
        ease: "power2.in",
      });
    }

    // Animate the new card into view
    tl.fromTo(
      `.card-${nextIndex}`,
      {
        rotationY: immediate ? 0 : 180,
        rotationX: 0,
        opacity: 0,
        scale: 0.6,
        x: immediate ? 0 : Math.random() * 1000 - 500,
        y: immediate ? 0 : Math.random() * 500 - 250,
        z: immediate ? 0 : -1000,
      },
      {
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        opacity: 1,
        duration: immediate ? 0 : 1.5,
        ease: "power3.out",
        delay: immediate ? 0 : 0.3,
      },
      immediate ? 0 : "-=0.3"
    );

    // Animate additional content of the new card
    tl.fromTo(
      `.card-${nextIndex} .avatar-container`,
      { scale: 0, rotate: -180 },
      { scale: 1, rotate: 0, duration: 0.7, ease: "back.out(1.7)" },
      "-=0.3"
    );
    tl.fromTo(
      `.card-${nextIndex} .card-quote`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.4"
    );
    tl.fromTo(
      `.card-${nextIndex} .card-info`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    );
    tl.fromTo(
      `.card-${nextIndex} .star`,
      { scale: 0, rotate: -180 },
      {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out(2)",
      },
      "-=0.2"
    );
    tl.to(
      sceneRef.current,
      {
        x: "random(-5, 5)",
        y: "random(-5, 5)",
        duration: 0.1,
        repeat: 3,
        yoyo: true,
      },
      "-=1.5"
    );

    return tl;
  };

  /**
   * Handler for manual card selection via dots or navigation buttons.
   */
  const handleCardSelect = (newIndex) => {
    // Prevent triggering if an animation is ongoing or if already on the target
    if (isAnimating || newIndex === activeTestimonial) return;
    const prevIndex = activeTestimonial;

    // Update state immediately so indicators reflect the change
    setActiveTestimonial(newIndex);

    // Run the animation transition using the previous and new indices
    animateCardTransition(prevIndex, newIndex);
  };

  // Auto-advance testimonials if not animating
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (!isAnimating) {
        const nextIndex = (activeTestimonial + 1) % testimonials.length;
        // Note: This will also trigger an animated transition.
        handleCardSelect(nextIndex);
      }
    }, 8000);

    return () => clearInterval(autoplayInterval);
  }, [activeTestimonial, isAnimating, testimonials.length]);

  // Random 3D flipping animation (unchanged)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const randomCard = Math.floor(Math.random() * testimonials.length);
        if (randomCard !== activeTestimonial) {
          gsap.to(`.card-${randomCard}`, {
            rotationY: "+=360",
            duration: 1.5,
            ease: "power1.inOut",
          });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTestimonial, isAnimating, testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star text-2xl ${
          i < rating ? "text-[#D0FC2D]" : "text-[#C7C5B1]"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="relative overflow-hidden w-full bg-[#1A1A1A] text-white py-24 min-h-[90vh]">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-[#0D0D0D] overflow-hidden">
        {/* Background flares */}
        <div className="bg-flare absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-[#B66613]/10 blur-3xl"></div>
        <div className="bg-flare absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#D0FC2D]/5 blur-3xl"></div>
        <div className="bg-flare absolute top-2/3 left-1/4 w-48 h-48 rounded-full bg-[#7E3F0F]/10 blur-3xl"></div>

        {/* Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-full bg-[#D0FC2D]/50"
          ></div>
        ))}

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(208, 252, 45, 0.3) 25%, rgba(208, 252, 45, 0.3) 26%, transparent 27%, transparent 74%, rgba(208, 252, 45, 0.3) 75%, rgba(208, 252, 45, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(208, 252, 45, 0.3) 25%, rgba(208, 252, 45, 0.3) 26%, transparent 27%, transparent 74%, rgba(208, 252, 45, 0.3) 75%, rgba(208, 252, 45, 0.3) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title with glitch effect */}
        <div className="mb-16 text-center">
          <h2 className="title-text text-6xl font-bold text-[#7E3F0F] relative inline-block">
            THE BEARS TESTIMONIALS
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-[#D0FC2D] to-[#7E3F0F] mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ delay: 1.2, duration: 1.2, ease: "circOut" }}
          />
        </div>

        {/* 3D Scene */}
        <div
          ref={sceneRef}
          className="relative mx-auto h-[500px] max-w-4xl overflow-visible"
        >
          {/* Testimonial cards */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`testimonial-card card-${index} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg p-12 rounded-3xl cursor-pointer border border-white/10 overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(208,252,45,0.3)]`}
              onClick={() => handleCardSelect(index)}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-[#D0FC2D]/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-tl from-[#B66613]/20 to-transparent rounded-full blur-xl"></div>

              {/* Card content */}
              <div className="relative z-10">
                <div className="avatar-container flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D0FC2D] to-[#B66613] animate-spin-slow"></div>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full relative z-10 border-4 border-black"
                    />
                  </div>
                </div>

                <div className="flex justify-center space-x-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="card-quote text-xl font-light italic mb-8 text-center text-white leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="card-info text-center">
                  <h4 className="text-xl font-bold text-[#D0FC2D]">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/70">{testimonial.company}</p>
                </div>
              </div>

              {/* Dynamic reflections */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5"
                style={{
                  transform: "translateZ(1px)",
                  mixBlendMode: "overlay",
                }}
              ></div>
            </div>
          ))}

          {/* Cinematic lighting effects */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-1/4 w-40 h-2 bg-[#D0FC2D]/20 blur-xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-2 bg-[#B66613]/20 blur-xl"></div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-16 space-x-4">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleCardSelect(index)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              className={`
                w-3 h-3 rounded-full transition-all duration-500
                ${
                  activeTestimonial === index
                    ? "bg-gradient-to-r from-[#D0FC2D] to-[#B66613] scale-150"
                    : "bg-white/30 hover:bg-white/70"
                }
              `}
            ></motion.button>
          ))}
        </div>

        {/* Cinematic control bar */}
        <div className="flex justify-center mt-8">
          <motion.div
            className="bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 flex items-center space-x-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <button
              onClick={() => {
                if (!isAnimating) {
                  const prevIndex =
                    (activeTestimonial - 1 + testimonials.length) %
                    testimonials.length;
                  handleCardSelect(prevIndex);
                }
              }}
              className="text-white/70 hover:text-[#D0FC2D] transition-colors"
            >
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
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="text-xs text-white/50 uppercase tracking-widest">
              Testimonial {activeTestimonial + 1}/{testimonials.length}
            </div>

            <button
              onClick={() => {
                if (!isAnimating) {
                  const nextIndex =
                    (activeTestimonial + 1) % testimonials.length;
                  handleCardSelect(nextIndex);
                }
              }}
              className="text-white/70 hover:text-[#D0FC2D] transition-colors"
            >
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
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Add CSS animation class for spin effect */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
