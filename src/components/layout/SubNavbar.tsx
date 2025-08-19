// src/components/layout/SubNavbar.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SubNavbarProps {
  sections: { id: string; name: string }[];
}

const SubNavbar: React.FC<SubNavbarProps> = ({ sections }) => {
  const [active, setActive] = useState<string>("");
  const [navTop, setNavTop] = useState<number>(72); // default fallback

  // 🔹 Measure navbar height dynamically (responsive)
  useEffect(() => {
    const measure = () => {
      const navbar = document.querySelector<HTMLElement>(".custom-navbar");
      if (navbar) {
        setNavTop(navbar.offsetHeight);
      }
    };

    measure(); // Run once on mount
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, []);

  // 🔹 Highlight active section on scroll (accounts for navbar height)
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navTop + 10 && rect.bottom >= navTop + 10) {
            current = section.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, navTop]);

  return (
    <nav className="sticky top-0 z-30 backdrop-blur-md bg-white/70 border-b border-gray-200/50 shadow-sm">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
      flex flex-wrap items-center justify-center
      gap-4 sm:gap-6 md:gap-10
      px-4 sm:px-6 md:px-8
      py-2 sm:py-3
    "
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "relative whitespace-nowrap text-sm sm:text-base font-medium transition-all duration-300",
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
      </motion.div>
    </nav>
  );
};

export default SubNavbar;
