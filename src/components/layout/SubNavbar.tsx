// src/components/layout/SubNavbar.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SubNavbarProps {
  sections: { id: string; name: string }[];
}

const SubNavbar: React.FC<SubNavbarProps> = ({ sections }) => {
  const [active, setActive] = useState<string>("");

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-[72px] z-30 backdrop-blur-md bg-white/70 border-b border-gray-200/50 shadow-sm"
    >
      <div className="flex items-center justify-center gap-6 sm:gap-10 px-4 sm:px-8 py-3 overflow-x-auto scrollbar-hide">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "relative text-sm sm:text-base font-medium transition-all duration-300",
              active === section.id
                ? "text-[#2562EA]"
                : "text-gray-600 hover:text-[#2562EA] hover:scale-105"
            )}
          >
            {section.name}
            {active === section.id && (
              <motion.div
                layoutId="underline"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-r from-[#2562EA] to-[#4f8efc]"
              />
            )}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default SubNavbar;
