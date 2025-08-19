import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed and used

// Basic Button Component - This is included to resolve the import error.
// In a real project, this would typically be in its own file at ../ui/button.jsx
const Button = ({ children, size, variant, className, ...props }) => {
  let baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  let sizeStyles = "";
  let variantStyles = "";

  switch (size) {
    case "lg":
      sizeStyles = "px-8 py-3 text-lg";
      break;
    case "sm":
      sizeStyles = "px-3 py-1.5 text-sm";
      break;
    default:
      sizeStyles = "px-5 py-2.5 text-base";
  }

  switch (variant) {
    case "outline":
      variantStyles = "bg-transparent border border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700";
      break;
    case "ghost":
      variantStyles = "bg-transparent text-blue-600 hover:bg-blue-50";
      break;
    default: // default primary button
      variantStyles = "bg-blue-600 text-white hover:bg-blue-700";
  }

  return (
    <button className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className || ''} rounded-full`} {...props}>
      {children}
    </button>
  );
};


const heroImages = [
  "https://cdn.pixabay.com/photo/2023/05/24/17/48/ai-generated-8015423_1280.jpg",
  "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg", // Original image
  "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg", // Placeholder for variety
  "https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg", // Another placeholder
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 -z-10" /> {/* Changed accent/background to consistent blues */}

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-200 animate-float" // Changed bg-primary/10 to bg-blue-200
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10"> {/* Ensure container is above background elements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <div
                className={`inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-700 transform ${ // Changed colors for consistency
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Welcome to Ideovent Technologies
              </div>
              <h1
                className={`transition-all duration-700 delay-100 transform text-gray-900 ${ // Ensured main heading is dark
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Digital Solutions <br />
                <span className="text-blue-700">for Businesses</span> {/* Consistent primary blue */}
              </h1>
              <p
                className={`text-lg text-gray-700 md:text-xl max-w-2xl transition-all duration-700 delay-200 transform ${ // Consistent text color
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                We craft innovative digital experiences that transform businesses
                and drive growth through cutting-edge technology and design.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Link to="/contact">
                < Button  variant size="lg" className="rounded-full shadow-lg shadow-blue-600/20"> {/* Shadow color adjustment */}
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="rounded-full">
                  View Our Services
                </Button>
              </Link>
            </div>

            <div
              className={`flex items-center gap-6 transition-all duration-700 delay-400 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" // Added shadow for consistency
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                />
              </div>
              <div>
                <div className="font-medium text-gray-800">Your Trusted Partner</div> {/* Consistent text color */}
                <div className="text-sm text-gray-600">in Digital Innovation</div> {/* Consistent text color */}
              </div>
            </div>
          </div>

          <div
            className={`aspect-square max-w-md mx-auto lg:max-w-none transition-all duration-1000 transform relative ${
              isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 rotate-12"
            }`}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-500/5 rounded-3xl transform rotate-6 animate-pulse-soft" /> {/* Colors adjusted */}
              <img
                key={currentImageIndex} // Key to force re-render and trigger transition
                src={heroImages[currentImageIndex]}
                alt="Digital Solutions"
                className="rounded-3xl object-cover w-full h-full shadow-2xl transition-opacity duration-1000" // Added transition for fade
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-blue-100"> {/* Added border for consistency */}
                <div className="text-sm font-medium text-gray-800">Client Satisfaction</div> {/* Consistent text color */}
                <div className="text-2xl font-bold text-blue-700">98%</div> {/* Consistent primary blue */}
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Global styles for animations, if not already in a CSS file */}
       <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(15px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        @keyframes pulse-soft {
          0%, 100% { transform: rotate(6deg) scale(1); }
          50% { transform: rotate(6deg) scale(1.02); }
        }

        .animate-pulse-soft {
          animation: pulse-soft 4s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
