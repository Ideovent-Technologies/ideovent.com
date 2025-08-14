import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  CheckCircle,
  Zap,
  Palette,
  Headphones,
  XCircle,
  Lightbulb,
  Package,
  Users,
  Clock,
  Globe,
  Plus,
} from "lucide-react";

const ComparisonSection = () => {
  const primary = "#027BFF";
  const secondary = "#00C8FF";

  const features = [
    {
      title: "Creative Excellence",
      desc: "Designs that speak — Crafted to impress, engage, and convert",
      icon: <Palette className="w-8 h-8 text-white" />,
      good: "Designs that speak",
      bad: "Cookie-cutter templates",
      auraColor: primary, // New property for the aura effect
    },
    {
      title: "Unmatched Speed",
      desc: "Your vision delivered faster than you expect",
      icon: <Zap className="w-8 h-8 text-white" />,
      good: "Unmatched speed",
      bad: "Delays, missed deadlines",
      auraColor: "#E040FB", // A new color for variety
    },
    {
      title: "Innovation First",
      desc: "Solutions tailored uniquely for your brand",
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      good: "Innovation first",
      bad: "Generic solutions",
      auraColor: secondary,
    },
    {
      title: "Always There for You",
      desc: "Dedicated support, anytime, every time",
      icon: <Headphones className="w-8 h-8 text-white" />,
      good: "Always there for you",
      bad: "Disappearing support",
      auraColor: "#FFC107",
    },
    {
      title: "Future-ready Technology",
      desc: "Built for performance, built to last",
      icon: <Plus className="w-8 h-8 text-white" />,
      good: "Future-ready technology",
      bad: "Outdated technology",
      auraColor: primary,
    },
  ];

  const stats = [
    {
      label: "Projects Delivered",
      value: 120,
      icon: <Package className="w-6 h-6 text-white" />,
    },
    {
      label: "Happy Clients",
      value: 95,
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      label: "Years of Experience",
      value: 10,
      icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
      label: "Countries Served",
      value: 8,
      icon: <Globe className="w-6 h-6 text-white" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // This useEffect hook is the core of the continuous automatic movement
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Ensures the 3D flip animation always goes in one direction
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4500); // Cycles every 4.5 seconds
    return () => clearInterval(interval);
  }, [features.length]);

  const comparisonRowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const carouselCardVariants = {
    initial: (direction) => ({
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 90 : -90,
      x: direction > 0 ? -10 : 10,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
    exit: (direction) => ({
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -90 : 90,
      x: direction > 0 ? 10 : -10,
      transition: {
        duration: 0.4,
      },
    }),
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ideoventCardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const othersCardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <style>{`
        @keyframes gradient-border {
          0% { border-image-slice: 1; border-image-source: linear-gradient(to right, ${primary}, ${secondary}, ${primary}); }
          50% { border-image-slice: 1; border-image-source: linear-gradient(to right, ${secondary}, ${primary}, ${secondary}); }
          100% { border-image-slice: 1; border-image-source: linear-gradient(to right, ${primary}, ${secondary}, ${primary}); }
        }
        .gradient-border-animated {
          border-width: 2px;
          border-style: solid;
          animation: gradient-border 4s ease-in-out infinite;
        }
      `}</style>
      <section className="relative min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Floating Gradient Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-30"
            style={{
              background: primary,
              top: "-100px",
              left: "-100px",
            }}
            animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
          />
          <motion.div
            className="absolute w-60 h-60 rounded-full blur-3xl opacity-30"
            style={{
              background: secondary,
              bottom: "-80px",
              right: "-80px",
            }}
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ repeat: Infinity, duration: 12 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-7xl min-h-[850px] bg-white/10 backdrop-blur-3xl rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 overflow-hidden"
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-8 lg:mb-10"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {"Why Choose "}
            <motion.span
              className="relative bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${primary}, ${secondary})`,
              }}
              variants={wordVariants}
            >
              Ideovent
            </motion.span>
            <motion.span
              className="relative bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${primary}, ${secondary})`,
              }}
              variants={wordVariants}
            >
              Technologies?
            </motion.span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 h-[calc(100%-6rem)]">
            {/* LEFT - Comparison Cards */}
            <div className="p-2 md:p-4 overflow-y-auto custom-scrollbar">
              <motion.h3
                className="text-xl md:text-2xl font-extrabold mb-6 text-gray-900 text-center"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.span variants={wordVariants}>The</motion.span>
                <motion.span
                  className="relative bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${primary}, ${secondary})`,
                  }}
                  variants={wordVariants}
                >
                  {" "}
                  Ideovent
                </motion.span>
                <motion.span variants={wordVariants}> Advantage</motion.span>
              </motion.h3>

              <div className="space-y-4">
                {features.map((row, i) => (
                  <motion.div
                    key={i}
                    variants={comparisonRowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-inner"
                  >
                    <h4 className="font-semibold text-lg text-gray-800 mb-4">
                      {row.title}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Ideovent Card */}
                      <motion.div
                        variants={ideoventCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-xl p-3 flex items-center justify-center gap-2 shadow-lg transition-transform duration-300 text-center sm:text-left"
                        style={{
                          backgroundImage: `linear-gradient(to bottom right, ${primary}e0, ${secondary}e0)`,
                        }}
                      >
                        <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                        <p className="text-white font-semibold text-sm">
                          {row.good}
                        </p>
                      </motion.div>

                      {/* Other Card */}
                      <motion.div
                        variants={othersCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="rounded-xl p-3 flex items-center justify-center gap-2 bg-gray-100 border border-gray-200 shadow-inner text-center sm:text-left"
                      >
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                        <p className="text-gray-600 font-semibold text-sm">
                          {row.bad}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT - Statistics and Feature Carousel */}
            <div className="p-2 md:p-4 flex flex-col justify-between">
              {/* Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={statCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      y: -5,
                      boxShadow: `0 10px 15px -3px ${primary}33, 0 4px 6px -2px ${primary}11`,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                    }}
                    className="text-center p-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex justify-center mb-2">
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
                        style={{
                          backgroundImage: `linear-gradient(to top right, ${primary}, ${secondary})`,
                        }}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <p
                      className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${primary}, ${secondary})`,
                      }}
                    >
                      <CountUp end={stat.value} duration={2.5} />+
                    </p>
                    <p className="text-gray-700 font-medium text-xs md:text-sm mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Feature Carousel */}
              <div className="h-full flex flex-col justify-center perspective-[1000px] p-2 sm:p-4 lg:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={features[activeIndex].title}
                    className="w-full flex flex-col items-center p-6 md:p-8 bg-white/70 backdrop-blur-3xl rounded-[2rem] shadow-2xl relative transition-all duration-700"
                    style={{
                      transformStyle: "preserve-3d",
                      boxShadow: `0 10px 30px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.8), 0 0 0 1px rgba(0,0,0,0.05)`,
                    }}
                    variants={carouselCardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={direction}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: `0 20px 40px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.9), 0 0 0 1px rgba(0,0,0,0.1)`,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Pulsing Gradient Glow Effect - This now serves as the "border" light source */}
                    <div
                      className="absolute inset-0 rounded-[2rem] animate-border-glow"
                      style={{
                        background: `radial-gradient(circle at center, rgba(2, 123, 255, 0.1), transparent 70%)`,
                        filter: "blur(35px)",
                        zIndex: -1,
                        opacity: 0.8,
                      }}
                    />

                    {/* Icon Container */}
                    <motion.div
                      variants={contentVariants}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                      }}
                      className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl mb-4 md:mb-6 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, #0090F1, #3693FF)`,
                        boxShadow: `0 10px 20px #027BFF80`,
                      }}
                    >
                      {features[activeIndex].icon}
                    </motion.div>

                    {/* Text Content */}
                    <div className="text-center">
                      <motion.h3
                        variants={contentVariants}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 20,
                          delay: 0.1,
                        }}
                        className="font-extrabold text-xl md:text-3xl text-gray-900 mb-2"
                      >
                        {features[activeIndex].title}
                      </motion.h3>

                      <motion.p
                        variants={contentVariants}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 20,
                          delay: 0.2,
                        }}
                        className="text-gray-600 leading-relaxed text-sm md:text-base font-light px-2 md:px-4 max-w-lg"
                      >
                        {features[activeIndex].desc}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ComparisonSection;