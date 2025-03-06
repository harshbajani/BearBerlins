import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const blogsRef = useRef(null);
  const headingRef = useRef(null);
  const decorRef = useRef(null);

  // Placeholder blog posts - replace with actual blog content
  const blogPosts = [
    {
      title: "The Future of Digital Marketing in 2025",
      excerpt:
        "Explore the emerging trends that are reshaping the digital marketing landscape...",
      image:
        "https://images.unsplash.com/photo-1591286226147-7bfe4df95da8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 15, 2025",
      readTime: "5 min read",
    },
    {
      title: "Influencer Marketing: Beyond the Hype",
      excerpt:
        "Deep dive into how authentic influencer partnerships can transform your brand...",
      image:
        "https://plus.unsplash.com/premium_photo-1661677875843-5c66d889cfe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "February 28, 2025",
      readTime: "7 min read",
    },
    {
      title: "SEO Strategies for the Modern Web",
      excerpt:
        "Cutting-edge techniques to boost your online visibility and organic reach...",
      image:
        "https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "January 20, 2025",
      readTime: "6 min read",
    },
  ];

  useGSAP(() => {
    // Animate heading with a reveal effect
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Animate decorative elements
    if (decorRef.current) {
      const decorElements = decorRef.current.querySelectorAll(".decor-element");
      decorElements.forEach((element, index) => {
        gsap.to(element, {
          rotation: index % 2 === 0 ? 15 : -15,
          x: index % 2 === 0 ? 10 : -10,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }

    // Blog cards staggered entrance
    const blogCards = blogsRef.current.querySelectorAll(".blog-card");
    gsap.fromTo(
      blogCards,
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
        stagger: 0.2,
        ease: "back.out",
        scrollTrigger: {
          trigger: blogsRef.current,
          start: "top 70%",
        },
      }
    );

    // Image reveal animations
    const blogImages = blogsRef.current.querySelectorAll(".blog-image");
    blogImages.forEach((image) => {
      gsap.fromTo(
        image,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <Element name="blogs">
      <section
        ref={blogsRef}
        className="py-20 bg-gradient-to-b from-[#E5E3D12024] to-[#BFC1BA] relative overflow-hidden"
        id="blogs"
      >
        {/* Decorative elements */}
        <div ref={decorRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#D0FC2D]/10 blur-xl decor-element"></div>
          <div className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-[#B66613]/10 blur-xl decor-element"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-[#7E3F0F]/5 blur-lg decor-element"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 relative">
            <motion.div
              className="absolute -inset-10 scale-75 rounded-full bg-[#D0FC2D]/5 blur-3xl"
              animate={{
                scale: [0.7, 0.8, 0.7],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <h2
              ref={headingRef}
              className="text-5xl font-bold text-[#7E3F0F] inline-block relative"
            >
              THE BEARS BLOGS
              <motion.div
                className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-[#B66613]"
                initial={{ width: 0, left: "50%" }}
                whileInView={{ width: "50%", left: "25%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="blog-card bg-white shadow-lg rounded-2xl overflow-hidden transition-all hover:shadow-xl"
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="overflow-hidden">
                  <div className="blog-image w-full h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between text-sm text-[#806557] mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#7E3F0F]">
                    {post.title}
                  </h3>
                  <p className="text-[#806557] mb-6">{post.excerpt}</p>
                  <div className="relative">
                    <motion.button
                      className="px-6 py-2 bg-[#B66613] text-white rounded-full hover:bg-[#7E3F0F] transition-all duration-300 relative overflow-hidden group"
                      whileHover={{
                        boxShadow: "0 4px 15px rgba(182, 102, 19, 0.3)",
                      }}
                    >
                      <span className="relative z-10">Read More</span>
                      <motion.span
                        className="absolute inset-0 bg-[#D0FC2D] z-0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span className="absolute inset-0 z-20  opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        Read More
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* "View all posts" button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="px-8 py-3 border-2 border-[#7E3F0F] text-[#7E3F0F] rounded-full font-bold hover:bg-[#7E3F0F] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Blog Posts
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Blogs;
