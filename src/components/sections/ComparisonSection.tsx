import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { CheckCircle, Zap, Palette, Headphones } from "lucide-react";

const ComparisonSection = () => {
  const primary = "#027BFF";

  const features = [
    {
      icon: <CheckCircle className="text-white w-6 h-6" />,
      title: "Quality",
      desc: "Attention to every detail for perfect results.",
    },
    {
      icon: <Zap className="text-white w-6 h-6" />,
      title: "Speed",
      desc: "Lightning-fast delivery without compromising quality.",
    },
    {
      icon: <Palette className="text-white w-6 h-6" />,
      title: "Creativity",
      desc: "Innovative ideas that make you stand out.",
    },
    {
      icon: <Headphones className="text-white w-6 h-6" />,
      title: "Support",
      desc: "Friendly, responsive, and available 24/7.",
    },
  ];

  const stats = [
    { label: "Projects Delivered", value: 120, icon: "📦" },
    { label: "Happy Clients", value: 95, icon: "😊" },
  { label: "Years of Experience", value: 10, icon: "⏳" },
    { label: "Countries Served", value: 8, icon: "🌍" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Floating Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-72 h-72"
          style={{
            background: `${primary}33`,
            borderRadius: "9999px",
            filter: "blur(80px)",
            top: "-100px",
            left: "-100px",
          }}
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute w-60 h-60"
          style={{
            background: "#00C8FF33",
            borderRadius: "9999px",
            filter: "blur(80px)",
            bottom: "-80px",
            right: "-80px",
          }}
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
      </div>

      <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT - Features */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900">
            Why Choose{" "}
            <span
              className="relative bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${primary}, #00C8FF)`,
              }}
            >
              Ideovent Technologies?
              <span
                className="absolute left-0 -bottom-1 w-full h-1 rounded-full"
                style={{
                  backgroundImage: `linear-gradient(to right, ${primary}, #00C8FF)`,
                }}
              ></span>
            </span>
          </h2>

          <ul className="space-y-6">
            {features.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="flex items-start gap-5 p-5 bg-white/70 backdrop-blur-lg rounded-2xl border shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  borderColor: `${primary}20`,
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full shadow-md"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${primary}, #00C8FF)`,
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT - Comparison + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Table */}
          <div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
            style={{
              border: `1px solid ${primary}20`,
            }}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  style={{
                    backgroundImage: `linear-gradient(to right, ${primary}, #00C8FF)`,
                  }}
                  className="text-white"
                >
                  <th className="p-4 text-lg font-semibold">Feature</th>
                  <th className="p-4 text-lg font-semibold">Ideovent</th>
                  <th className="p-4 text-lg font-semibold">Others</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <td className="p-4 font-medium text-gray-800">{row.title}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center justify-center px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full shadow-sm">
                        ✔
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center justify-center px-3 py-1 bg-red-100 text-red-600 font-bold rounded-full shadow-sm">
                        ✖
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.07 }}
                className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-center"
                style={{
                  border: `1px solid ${primary}30`,
                }}
              >
                <span
                  className="absolute inset-0 rounded-2xl animate-pulse"
                  style={{
                    border: `1px solid ${primary}40`,
                  }}
                ></span>
                <div className="flex justify-center mb-3">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl shadow-lg"
                    style={{
                      backgroundImage: `linear-gradient(to top right, ${primary}, #00C8FF)`,
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <p
                  className="text-4xl font-extrabold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${primary}, #00C8FF)`,
                  }}
                >
                  <CountUp end={stat.value} duration={2.5} />+
                </p>
                <p className="text-gray-700 font-medium mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
