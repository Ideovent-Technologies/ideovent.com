import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, DollarSign, Lightbulb, TrendingUp, Handshake } from "lucide-react"; // Added more icons for potential future use or alternative display

const stats = [
  { value: "200+", label: "Experts across a range of specializations", icon: <Users className="w-8 h-8 text-blue-600" /> },
  { value: "30", label: "Offices across 30 countries", icon: <Globe className="w-8 h-8 text-blue-600" /> },
  { value: "$15M", label: "Revenue in under 3 years", icon: <DollarSign className="w-8 h-8 text-blue-600" /> },
];

const Overview = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 overflow-hidden"> {/* Added overflow-hidden for subtle animations */}
      {/* Decorative background circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-0 left-[-50px]"></div>
        <div className="absolute w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 bottom-0 right-[-50px]"></div>
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10"> {/* Added z-10 for content to be above decorative elements */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 tracking-tight" // Added tracking-tight
        >
          YOUR TRUSTED SOURCE IN IT SERVICES & SUPPORT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto" // Increased max-width for paragraph
        >
          Ideovent is a privately owned IT Support and IT Services business formed in 1988.
          Today we boast a strong team of IT engineers who thrive on solving your IT problems
          and meeting your business needs.
        </motion.p>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 relative z-10">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.7 }} // Adjusted delay and duration for smoother stagger
            className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl p-8 text-center border border-blue-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer" // Enhanced rounded, shadow, and hover effect
          >
            <div className="mb-4 p-4 bg-blue-100 rounded-full ring-4 ring-blue-200/50"> {/* Increased padding, added ring */}
              {stat.icon}
            </div>
            <h3 className="text-5xl font-bold text-blue-700 mb-2 font-inter">{stat.value}</h3> {/* Increased font size */}
            <p className="text-gray-600 text-lg font-medium">{stat.label}</p> {/* Increased label font size and weight */}
          </motion.div>
        ))}
      </div>

      {/* Sections: Mission, Values, Approach & Culture */}
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" // Enhanced rounded, shadow, and hover effect
        >
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <Lightbulb className="w-7 h-7 mr-3 text-blue-600" /> OUR MISSION
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Building on our technologies and competencies to create value for our customers.
            We achieve this by focusing on the intersection of our client’s emerging needs
            and the acceleration of business and technological change.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }} // Added slight delay for stagger
          className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <Handshake className="w-7 h-7 mr-3 text-blue-600" /> OUR VALUES
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our values are the guiding principles upon which Ideovent was founded and how we strive
            to conduct our business daily. Values establish our view of the world as we shape the future,
            determining how we treat each other and our clients.
          </p>
        </motion.div>

        {/* Approach & Culture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }} // Added slight delay for stagger
          className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <TrendingUp className="w-7 h-7 mr-3 text-blue-600" /> OUR APPROACH & CULTURE
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our drive for exceptional service delivery is built on the belief that we are nothing if
            you are not satisfied with us. Our passion for helping you achieve your goals, no matter what,
            is what truly differentiates us from our competitors.
          </p>
        </motion.div>
      </div>
      {/* Simple blob animation CSS - Add this to your main CSS file or a style tag if not using a global CSS file */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Overview;
