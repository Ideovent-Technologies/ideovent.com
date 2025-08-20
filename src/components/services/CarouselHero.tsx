import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroMetric {
  label: string;
  value: string;
}

interface CarouselHeroProps {
  images?: string[];
  metric?: HeroMetric;
}

// Default images for preview or if no props are passed
const defaultImages = [
  "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg",
  "https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg",
  "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg",
  "https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg",
];

const CarouselHero: React.FC<CarouselHeroProps> = ({
  images = defaultImages,
  metric = { label: "Client Satisfaction", value: "98%" },
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Pre-calculate the styles for the floating circles once
  const [floatingCircleStyles] = useState(() =>
    Array.from({ length: 8 }).map(() => ({
      width: `${Math.random() * 200 + 50}px`,
      height: `${Math.random() * 200 + 50}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      opacity: Math.random() * 0.2 + 0.05,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]); // Dependency array includes 'images' to reset interval if images change

  return (
    <div className="relative w-full h-full aspect-square max-w-md mx-auto lg:max-w-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-500/5 rounded-3xl transform rotate-6 animate-pulse-soft" />
      <img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt="Visual showcasing our services"
        className="rounded-3xl object-cover w-full h-full shadow-2xl transition-opacity duration-1000"
      />
      <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-blue-100">
        <div className="text-sm font-medium text-gray-800">{metric.label}</div>
        <div className="text-xl sm:text-2xl font-bold text-blue-700">{metric.value}</div>
      </div>

      {floatingCircleStyles.map((style, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-200 animate-float"
          style={style}
        />
      ))}

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(5deg); }
            50% { transform: translateY(0px) rotate(0deg); }
            75% { transform: translateY(15px) rotate(-5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float { animation: float 10s ease-in-out infinite; }

          @keyframes pulse-soft {
            0%, 100% { transform: rotate(6deg) scale(1); }
            50% { transform: rotate(6deg) scale(1.02); }
          }
          .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default CarouselHero;