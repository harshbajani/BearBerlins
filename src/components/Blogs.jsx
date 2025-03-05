import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Element } from "react-scroll";

const Blogs = () => {
  const blogsRef = useRef(null);

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
      }
    );
  }, []);

  return (
    <Element name="blogs">
      <section ref={blogsRef} className="py-20 bg-[#252525]" id="blogs">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#D0FC2D]">
            THE BEARS Blogs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="blog-card bg-[#4F473C] shadow-lg rounded-2xl overflow-hidden transition-all hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between text-sm text-[#BED0BA] mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#D0FC2D]">
                    {post.title}
                  </h3>
                  <p className="text-[#BED0BA] mb-6">{post.excerpt}</p>
                  <button className="px-6 py-2 bg-[#D0FC2D] text-[#252525] rounded-full hover:bg-[#B66613] transition-all">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Blogs;
