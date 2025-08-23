// src/components/sections/FloatingCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // icon library (lucide-react)

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="/contact" // 👉 change to your contact page / form link
        className="flex items-center gap-2 bg-gradient-to-r from-[#2562EA] to-[#4f8efc] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
      >
        <MessageCircle size={20} className="text-white" />
        Let’s Talk
      </a>
    </motion.div>
  );
};

export default FloatingCTA;
