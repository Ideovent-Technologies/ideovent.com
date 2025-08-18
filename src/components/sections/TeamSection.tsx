import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import { Linkedin, Twitter } from 'lucide-react'; // Example social icons

const teamMembers = [
  { 
    name: "Abhishek Tiwari", 
    role: "Director & Founder", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgT2eHovk83Kd0D870HAoiPDi4IQLN9jQjg&s",
    linkedin: "#", // Add actual LinkedIn URL
    twitter: "#" // Add actual Twitter URL
  },
  { 
    name: "Animesh Raturi", 
    role: "Co-Founder & CEO", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgT2eHovk83Kd0D870HAoiPDi4IQLN9jQjg&s",
    linkedin: "#",
    twitter: "#"
  },
  { 
    name: "Dipti Kumari", 
    role: "CHRO", 
    image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid",
    linkedin: "#",
    twitter: "#"
  },
  { 
    name: "Alam", 
    role: "SDE", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgT2eHovk83Kd0D870HAoiPDi4IQLN9jQjg&s",
    linkedin: "#",
    twitter: "#"
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 px-4"> {/* Consistent gradient background */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-16 tracking-tight"> {/* Enhanced heading */}
          Meet Our <span className="text-blue-800">Exceptional Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased gap for better spacing */}
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of element is visible
              transition={{ delay: index * 0.15, duration: 0.7 }} // Staggered animation
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-200 
                         group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl 
                         transition-all duration-300 relative" // Enhanced card styles and hover effects
            >
              <div className="relative overflow-hidden pt-[100%]"> {/* Aspect ratio box for image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute top-0 left-0 w-full h-full object-cover 
                             transform group-hover:scale-110 transition-transform duration-500 rounded-t-3xl" // Image hover zoom
                />
                {/* Optional: Social icon overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800/70 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                flex items-end justify-center p-6 space-x-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-1">{member.name}</h3> {/* Larger, bolder name */}
                <p className="text-lg text-gray-600 font-medium">{member.role}</p> {/* Clearer role text */}
                {/* You could add member.bio here if desired */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
