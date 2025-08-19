import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup"; // for number animation
import { Users, Globe, DollarSign, Lightbulb, TrendingUp, Handshake } from "lucide-react";

const stats = [
  { value: 200, suffix: "+", label: "Experts across a range of specializations", icon: Users },
  { value: 30, suffix: "", label: "So far we have offices across 30 countries", icon: Globe },
  { value: 15, prefix: "$", suffix: "M", label: "$0 to $15M in revenue in under 3 years", icon: DollarSign },
];

const Overview = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white text-gray-900 relative">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Heading + Stats */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 leading-snug">
            YOUR TRUSTED SOURCE IN IT SERVICES & SUPPORT
          </h2>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex flex-col items-start space-y-2 group cursor-pointer"
                >
                  {/* Icon with hover animation */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 bg-blue-100 rounded-full"
                  >
                    <Icon className="w-8 h-8 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                  </motion.div>

                  {/* Value with CountUp */}
                  <h3 className="text-3xl font-bold text-blue-900">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                    />
                  </h3>
                  {/* Label */}
                  <p className="text-gray-600 text-base">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Paragraph */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ideovent is a privately owned IT Support and{" "}
            <a
              href="/services"
              className="relative font-semibold text-blue-700 hover:text-blue-900 transition-colors duration-300 group"
            >
              IT Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>{" "}
            business formed in 1988. Today we boast a strong team of IT engineers who thrive on
            rolling up their sleeves and solving your IT problems while meeting your business needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            We are on a mission to exceed your expectations and form a long-term, mutually
            beneficial relationship with you.
          </p>
        </div>
      </div>

      {/* Mission / Values / Approach Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-gray-200 shadow-md rounded-xl p-8 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
            <Lightbulb className="w-6 h-6 mr-2 text-blue-600" /> OUR MISSION
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            Building on our technologies and competencies creating value for our customers.
            We’ll achieve this by focusing on the intersection of our client’s emerging needs
            and the acceleration of business and technological change.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white border border-gray-200 shadow-md rounded-xl p-8 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
            <Handshake className="w-6 h-6 mr-2 text-blue-600" /> OUR VALUES
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            Our values are the guiding principles upon which Ideovent was founded and how we
            strive to conduct our business on a daily basis. Values establish our view of the
            world as we shape the future. They determine how we treat each other.
          </p>
        </motion.div>

        {/* Approach & Culture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white border border-gray-200 shadow-md rounded-xl p-8 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-blue-600" /> OUR APPROACH & CULTURE
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            Our drive for exceptional service delivery is built on the belief that we are nothing
            if you are not satisfied with us. Our passion for helping you achieve your goals, no
            matter what, is what truly differentiates us from our competitors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
