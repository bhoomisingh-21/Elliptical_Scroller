import React from "react";
import { motion } from "framer-motion";
import "../scroler.css";

function InfiniteScroller() {
  const images = [
    "https://i.pinimg.com/736x/21/19/0c/21190ca8468b462845e51f10be4146f9.jpg",
    "https://i.pinimg.com/736x/2a/0f/0a/2a0f0a2c9b2e94abdb8cef6ca867479b.jpg",
    "https://i.pinimg.com/736x/6f/bd/c7/6fbdc702b1a285bcaa14108ee93c8bfa.jpg",
    "https://i.pinimg.com/736x/f7/db/88/f7db88e6d67aab66cfcf2768e3786533.jpg",
    "https://i.pinimg.com/736x/26/de/f7/26def74fddc3983da7bda105beabfe42.jpg",
  ];

  return (
    <motion.div
      className="relative bg-gradient-to-r from-[#101332] via-black to-[#101332] min-h-screen text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Header */}
      <motion.header
        className="flex flex-col md:flex-row justify-between items-center p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold mt-3 md:pl-20 text-center md:text-left">
          Shutter<span className="text-[#5425EC]">Tale</span>
        </h1>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:space-x-6 md:pr-20 mt-3">
          <a href="#discover" className="hover:text-[#5425EC]">Discover</a>
          <a href="#stories" className="hover:text-[#5425EC]">Stories</a>
          <a href="#contests" className="hover:text-[#5425EC]">Contests</a>
          <a href="#login" className="hover:text-[#5425EC]">Login</a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="text-center mt-10 px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 1, // Stagger the animations
            },
          },
        }}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-5xl mx-auto px-4 [text-wrap:balance]"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
          }}
        >
          Captured <span className="text-[#5425EC]">Whispers</span>, Timeless{" "}
          <span className="text-[#5425EC]">Tales</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="mt-6 text-sm sm:text-base md:text-lg lg:text-lg px-3 sm:px-6 max-w-md sm:max-w-2xl mx-auto [text-wrap:balance] leading-normal sm:leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
          }}
        >
          Join our vibrant community of storytellers and photography lovers.
          Together, let’s capture whispers of life and turn them into timeless tales.
        </motion.p>

        {/* Explore Button */}
        <motion.button
          className="mt-8 px-6 py-2 bg-[#5425EC] text-white rounded-lg hover:bg-[#3b1abf] transition"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeInOut" } },
          }}
        >
          Explore
        </motion.button>
      </motion.section>

      {/* Infinite Scroller */}
      <div className="scroller-container mt-20 relative z-10 overflow-hidden">
        {/* Top curved white line */}
        <svg
          className="curve-line curve-top"
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q720,0 1440,40"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
        </svg>

        {/* Image scroller */}
        <motion.div
          className="scroller flex"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          {[...images, ...images].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Sample ${index + 1}`}
              className="scroller-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
            />
          ))}
        </motion.div>

        {/* Bottom curved white line */}
        <svg
          className="curve-line curve-bottom"
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 Q720,50 1440,10"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default InfiniteScroller;
