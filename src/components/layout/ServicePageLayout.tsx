import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn utility is available for conditional class names
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Assuming shadcn/ui components are available
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button is available
import SectionHeading from "@/components/ui/SectionHeading"; // Assuming SectionHeading component is available

// Importing Navbar and Footer components
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// --- Interfaces (unchanged from original) ---
interface BulletPoint {
  text: string;
  icon?: string;
}

interface ExtraSection {
  heading: string;
  content: string;
  items?: string[];
  image?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

interface CTA {
  text: string;
  link: string;
  secondary?: {
    text: string;
    link: string;
  };
}

interface OtherService {
  name: string;
  path: string;
}

export interface ServicePageLayoutProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  bulletPoints: BulletPoint[];
  extraSections: ExtraSection[];
  faqs?: FAQ[];
  testimonials?: Testimonial[];
  cta: CTA;
  otherServices: OtherService[];
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  subtitle,
  description,
  image,
  bulletPoints,
  extraSections,
  faqs,
  testimonials,
  cta,
  otherServices,
}) => {
  // Helper function to dynamically get Lucide icons
  const getIcon = (iconName: string, defaultIcon?: React.ElementType) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? (
      <IconComponent className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ) : (
      React.createElement(defaultIcon || Icons.HelpCircle, { className: "h-6 w-6 text-indigo-600" })
    );
  };

  // Helper function for flowchart icons (unchanged)
  const getFlowchartIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Icons.Lightbulb className="h-8 w-8 text-white" />;
      case 2:
        return <Icons.FileText className="h-8 w-8 text-white" />;
      case 3:
        return <Icons.Code className="h-8 w-8 text-white" />;
      case 4:
        return <Icons.ShieldCheck className="h-8 w-8 text-white" />;
      case 5:
        return <Icons.Rocket className="h-8 w-8 text-white" />;
      case 6:
        return <Icons.Wrench className="h-8 w-8 text-white" />;
      default:
        return <Icons.Circle className="h-8 w-8 text-white" />;
    }
  };

  return (
    <div className="flex flex-col  font-['Inter'] antialiased">
      <Navbar /> {/* Navbar added here */}

      {/* HERO SECTION */}
     <section className="relative w-full min-h-screen px-4 sm:px-6 lg:px-24 py-16 lg:py-24 bg-gradient-to-br from-indigo-100 to-blue-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center">
  {/* Left Content */}
  <div className="relative z-10 w-full lg:w-1/2 mb-10 lg:mb-0">
    {/* Animated Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#2562EA] to-[#6B8DFF] drop-shadow-xl"
    >
      {title}
    </motion.h1>

    {/* Subtitle */}
    {subtitle && (
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-xl sm:text-2xl lg:text-3xl font-semibold text-indigo-700 mb-6"
      >
        {subtitle}
      </motion.h2>
    )}

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 max-w-full sm:max-w-xl leading-relaxed"
    >
      {description}
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="flex flex-wrap gap-4 sm:gap-6"
    >
      <a
        href="/contact"
        className="px-6 py-3 sm:px-8 sm:py-4 rounded-3xl bg-gradient-to-r from-[#2562EA] to-[#6B8DFF] text-white font-semibold text-lg sm:text-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        Get Started
      </a>
      <a
        href="/services"
        className="px-6 py-3 sm:px-8 sm:py-4 rounded-3xl bg-white text-indigo-700 font-semibold text-lg sm:text-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        Learn More
      </a>
    </motion.div>
  </div>

  {/* Right Image */}
  <motion.div
    className="w-full lg:w-1/2 relative"
    initial={{ opacity: 0, x: 50, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.img
      src={image}
      alt={title}
      className="w-full rounded-3xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
      whileHover={{ scale: 1.07, rotate: 1 }}
    />
    {/* Subtle Glow */}
    <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-3xl animate-blob"></div>
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
  </motion.div>
</section>




     {/* BULLET POINTS SECTION */}
<section className="px-6 lg:px-24 py-20 bg-gray-50">
<SectionHeading text="What We Deliver" gradientFrom="#027BFF" gradientTo="#00D4FF" />


  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
    {bulletPoints.map((point, idx) => {
      const Icon = point.icon && (Icons as any)[point.icon]
        ? (Icons as any)[point.icon]
        : Icons.CheckCircle;

      return (
        <motion.div
          key={idx}
          className="relative group bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-500 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.7 }}
          whileHover={{
            scale: 1.05,
            rotateY: 10,
            rotateX: 5,
            transition: { duration: 0.5 },
          }}
        >
          {/* Background gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-30 group-hover:opacity-80 transition-opacity duration-500 blur-xl"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5 p-8">
            <div className="flex-shrink-0 relative z-10">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                <Icon className="w-10 h-10" />
              </div>
            </div>
            <p className="text-gray-800 text-lg sm:text-base lg:text-lg font-medium relative z-10">
              {point.text}
            </p>
          </div>

          {/* Animated floating highlight */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        </motion.div>
      );
    })}
  </div>
</section>


      {/* EXTRA SECTIONS */}
      {extraSections.map((section, idx) => {
        if (section.heading.includes("Which Types of Software")) {
          const softwareTypes = section.items || [];
          return (
            <section key={idx} className="px-6 lg:px-24 py-20 bg-white">
              <h3 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
                <SectionHeading
  text={section.heading}
  gradientFrom="#027BFF"
  gradientTo="#00D4FF"
  className="mb-8 text-center"
/>
              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
                {section.content}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {softwareTypes.map((type, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative p-8 rounded-3xl shadow-xl bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 transition-all cursor-pointer overflow-hidden transform"
                  >
                    {/* Glowing light effect on hover */}
                    <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-150 rounded-full blur-2xl"></div>

                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition-colors mb-5 z-10">
                      {getIcon(type.split(" ")[0], Icons.HardDrive)} {/* Use HardDrive as a fallback */}
                    </div>
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 text-center transition-colors">
                      {type}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        }

        if (section.heading.includes("The Software Development Lifecycle")) {
          const steps = section.items || [];
          return (
            <section key={idx} className="px-6 lg:px-24 py-20 bg-gray-50">
              <h3 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
              <SectionHeading
  text={section.heading}
  gradientFrom="#027BFF"
  gradientTo="#00D4FF"
  className="mb-8 text-center"
/>              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
                {section.content}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="group relative p-6 bg-indigo-600 rounded-3xl shadow-lg flex flex-col items-center text-center transition-transform duration-400 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {/* Animated ring background */}
                    <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-blue-300 transition-all duration-500 transform scale-100 group-hover:scale-105"></div>

                    <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-indigo-700 mb-5 group-hover:rotate-6 transition-transform duration-500">
                      {getFlowchartIcon(i + 1)}
                      <div className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white text-lg font-bold shadow-md">
                        {i + 1}
                      </div>
                    </div>
                    <p className="font-semibold text-white text-lg relative z-10">{step}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        }

        // Default rendering for other ExtraSections (e.g., "Why Choose Ideovent")
        return (
          <section
            key={idx}
            className={`px-6 lg:px-24 py-20 ${
              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
            } grid lg:grid-cols-2 gap-16 items-center`}
          >
            <motion.div
              className={cn(idx % 2 !== 0 ? "order-last lg:order-first" : "")}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-extrabold text-gray-900 mb-6 relative z-10">
              <SectionHeading
  text={section.heading}
  gradientFrom="#027BFF"
  gradientTo="#00D4FF"
  className="mb-8 text-center"
/>                {/* Subtle underline effect */}
                <span className="block w-24 h-2 bg-indigo-500 mt-2 rounded-full"></span>
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{section.content}</p>
              {section.items && (
                <ul className="text-gray-700 space-y-4">
                  {section.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-gray-100 hover:bg-indigo-50 transition-colors duration-300 transform hover:scale-[1.01]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Icons.CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
            {section.image && (
              <motion.div
                className="relative rounded-3xl shadow-2xl overflow-hidden group"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Image overlay effect on hover */}
                <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
              </motion.div>
            )}
          </section>
        );
      })}
{/* FAQ SECTION */}
{faqs && faqs.length > 0 && (
  <section className="px-6 lg:px-24 py-20 bg-gray-50">
    <SectionHeading
      text="Frequently Asked Questions"
      gradientFrom="#2562EA"
      gradientTo="#6B8DFF"
      className="mb-14 text-center"
    />

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Accordion type="single" collapsible className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`faq-${idx}`}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 group hover:shadow-2xl hover:border-indigo-400"
          >
            <AccordionTrigger className="flex justify-between items-center text-lg lg:text-xl font-semibold text-gray-800 p-6 pr-4 hover:bg-gradient-to-r hover:from-[#2562EA]/10 hover:to-[#6B8DFF]/10 transition-all duration-300 rounded-3xl group">
              {faq.question}

              {/* Rotating arrow using data-state */}
            
            </AccordionTrigger>

            <AccordionContent className="text-gray-700 p-6 border-t border-gray-100 bg-indigo-50/30 text-base leading-relaxed rounded-b-3xl">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </section>
)}

      {/* TESTIMONIALS SECTION */}
      {testimonials && testimonials.length > 0 && (
        <section className="px-6 lg:px-24 py-16 bg-white">
          <SectionHeading
  text="What Our Clients Say"
  gradientFrom="#027BFF"
  gradientTo="#00D4FF"
  className="mb-12 text-center text-3xl"
/>

          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white border-4 border-transparent hover:border-indigo-400 transition-all duration-500 shadow-xl rounded-3xl p-10 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #f5f8ff 0%, #ffffff 50%, #f0f7ff 100%)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Large quote icon in background */}
                <Icons.Quote className="absolute top-8 right-8 w-24 h-24 text-indigo-100 opacity-70 rotate-180 -z-0 transform group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 italic mb-6">“{t.feedback}”</p>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* OTHER SERVICES SECTION */}
      <section className="px-6 lg:px-24 pb-24">
        <SectionHeading
  text="Explore Other Services"
  gradientFrom="#027BFF"
  gradientTo="#00D4FF"
  className="mb-10 text-center text-3xl"
/>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.path}
              className="block p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-indigo-400 transition-all duration-300 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-indigo-700 font-semibold text-lg relative z-10 group-hover:text-white transition-colors duration-300">
                {service.name}
              </p>
              {/* Sliding arrow icon on hover */}
              <Icons.ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 z-10" />

              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-x-0 group-hover:scale-x-100 transform origin-left"></div>
            </motion.a>
          ))}
        </div>
      </section>
      <Footer /> {/* Footer added here */}
    </div>
  );
};

export default ServicePageLayout;
