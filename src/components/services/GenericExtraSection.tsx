// services/GenericExtraSection.tsx
import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { GenericExtraSection as GenericExtraSectionType } from "./types";

interface GenericExtraSectionProps {
  section: GenericExtraSectionType;
  sectionId: string;
  iconName?: string;
  headingGradientFrom?: string;
  headingGradientTo?: string;
}

const getIcon = (iconName?: string) => {
  if (!iconName || !(iconName in Icons)) {
    return Icons.CheckCircle2;
  }
  return (Icons as any)[iconName];
};

const GenericExtraSection: React.FC<GenericExtraSectionProps> = ({
  section,
  sectionId,
  iconName,
  headingGradientFrom = "#2562EA",
  headingGradientTo = "#6B8DFF",
}) => {
  // Determine the icon for the entire section once
  const Icon = getIcon(iconName);

  return (
    // The main section container. Uses a soft gray background to make the cards pop.
    <section id={sectionId} className="px-4 sm:px-6 lg:px-24 py-16 sm:py-20 bg-gray-50">
      {/* The component heading, which uses a gradient text */}
      <SectionHeading
        text={section.heading}
        gradientFrom={headingGradientFrom}
        gradientTo={headingGradientTo}
        className="mb-12 text-center"
      />
      
      {/* The grid container for the feature cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {section.items?.map((item, i) => {
          return (
            // Individual card container with animation and modern styling
            <motion.div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Icon container with a color-inversion hover effect */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#E5F0FF] group-hover:bg-[#2562EA] mb-4 sm:mb-5 transition-colors">
                {/* The icon itself, which changes color on card hover */}
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#2562EA] group-hover:text-white" />
              </div>
              
              {/* The title of the card */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2562EA] mb-2">{item.title}</h3>
              
              {/* The description text */}
              <p className="text-gray-700 font-medium text-sm sm:text-base">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GenericExtraSection;