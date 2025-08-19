
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom"; // For CTA buttons
import SectionHeading from "@/components/ui/SectionHeading";
import { softwareIconMap } from "@/data/softwareData";

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SubNavbar from '../layout/SubNavbar';

export interface BulletPoint {
  text: string;
  icon?: string;
}

export interface ExtraSection {
  heading: string;
  content: string;
  items?: string[];
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

export interface CTA {
  text: string;
  link: string;
  secondary?: {
    text: string;
    link: string;
  };
}

export interface OtherService {
  name: string;
  path: string;
}

export interface ServiceData {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  bulletPoints: BulletPoint[];
  cta: CTA;
  extraSections: ExtraSection[];
  faqs?: FAQ[];
  testimonials?: Testimonial[];
  otherServices: OtherService[];
}

export interface ServiceCard {
  title: string;
  subtitle: string;
  image: string;
  icon?: string;
}

type ServicePageLayoutProps = ServiceData;

// -------------------- Carousel Component --------------------
const heroImages = [
  "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg",
  "https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg",
  "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg",
  "https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg",
];

const CarouselHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full aspect-square max-w-md mx-auto lg:max-w-none">
      {/* Background gradient + floating blur elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-500/5 rounded-3xl transform rotate-6 animate-pulse-soft" />

      <img
        key={currentImageIndex} // Forces re-render to animate
        src={heroImages[currentImageIndex]}
        alt="Service Visual"
        className="rounded-3xl object-cover w-full h-full shadow-2xl transition-opacity duration-1000"
      />

      <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-blue-100">
        <div className="text-sm font-medium text-gray-800">Client Satisfaction</div>
        <div className="text-2xl font-bold text-blue-700">98%</div>
      </div>

      {/* Floating background blobs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-200 animate-float"
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            opacity: Math.random() * 0.2 + 0.05,
          }}
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

// -------------------- Main ServicePageLayout --------------------
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
  const sections = [
    { id: "what-we-deliver", name: "What We Deliver" },
    ...extraSections.map((section, idx) => ({
      id: `section-${idx}`,
      name: section.heading,
    })),
    ...(faqs && faqs.length > 0 ? [{ id: "faqs", name: "FAQs" }] : []),
    ...(testimonials && testimonials.length > 0 ? [{ id: "testimonials", name: "Testimonials" }] : []),
    { id: "other-services", name: "Other Services" },
  ];

  const getIcon = (iconName: string, defaultIcon?: React.ElementType) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? (
      <IconComponent className="h-6 w-6 text-[#2562EA] group-hover:text-white transition-colors duration-300" />
    ) : (
      React.createElement(defaultIcon || Icons.HelpCircle, { className: "h-6 w-6 text-[#2562EA]" })
    );
  };

  const getFlowchartIcon = (step: number) => {
    switch (step) {
      case 1: return <Icons.Lightbulb className="h-8 w-8 text-white" />;
      case 2: return <Icons.FileText className="h-8 w-8 text-white" />;
      case 3: return <Icons.Code className="h-8 w-8 text-white" />;
      case 4: return <Icons.ShieldCheck className="h-8 w-8 text-white" />;
      case 5: return <Icons.Rocket className="h-8 w-8 text-white" />;
      case 6: return <Icons.Wrench className="h-8 w-8 text-white" />;
      default: return <Icons.Circle className="h-8 w-8 text-white" />;
    }
  };

  return (
    <div className="flex flex-col font-['Inter'] antialiased">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative w-full min-h-screen px-4 sm:px-6 lg:px-24 py-16 lg:py-24 bg-gradient-to-br from-[#f0f5ff] to-[#e6ecff] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 mb-10 lg:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#2562EA] to-[#2562EA]"
          >
            {title || "Tailored Software Solutions That Drive Growth"}
          </motion.h1>

          {subtitle && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2562AA] mb-6"
            >
              {subtitle}
            </motion.h2>
          )}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 max-w-full sm:max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            <Link to="/contact">
              <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-3xl bg-gradient-to-r from-[#2562EA] to-[#6B8DFF] text-white font-semibold text-lg sm:text-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </Link>
            <Link to="/consultation">
              <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg sm:text-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                Get a Free Software Consultation
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Hero Carousel */}
        <div className="w-full lg:w-1/2 relative">
          <CarouselHero />
        </div>
      </section>

      {/* SUBNAVBAR + Sections */}
      <SubNavbar sections={sections} />
      <section id="what-we-deliver" className="px-6 lg:px-24 py-20 bg-gray-50">
        <SectionHeading text="What We Deliver" gradientFrom="#2562EA" gradientTo="#6B8DFF" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
          {bulletPoints.map((point, idx) => {
            const Icon = point.icon && (Icons as any)[point.icon]
              ? (Icons as any)[point.icon]
              : Icons.CheckCircle;

            return (
              <motion.div
                key={idx}
                className="relative group bg-white rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 border border-gray-100"
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0f5ff] to-[#e6ecff] opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-xl"></div>

                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5 p-8">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#E5F0FF] text-[#2562EA] transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#2562EA] group-hover:to-[#6B8DFF] group-hover:text-white group-hover:scale-110 group-hover:rotate-12">
                      <Icon className="w-10 h-10" />
                    </div>
                  </div>
                  <p className="text-gray-800 text-lg sm:text-base lg:text-lg font-medium relative z-10">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </section>

      {/* EXTRA SECTIONS */}
      {extraSections.map((section, idx) => {
        const sectionId = `section-${idx}`;
        if (section.heading.includes("Which Types of Software")) {
          const softwareTypes = section.items || [];
          return (
            <section key={idx} id={sectionId} className="px-6 lg:px-24 py-20 bg-white">
              <SectionHeading
                text={section.heading}
                gradientFrom="#2562EA"
                gradientTo="#6B8DFF"
                className="mb-8 text-center"
              />
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
                {section.content}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {softwareTypes.map((type, i) => {
                  let key;
                  if (type.includes("Car/Bike Showroom")) {
                    key = "CarShowroom";
                  } else if (type.includes("Real Estate")) {
                    key = "RealEstate";
                  } else if (type.includes("Restaurant")) {
                    key = "Restaurant";
                  } else if (type.includes("GST")) {
                    key = "GST";
                  } else if (type.includes("Pathology")) {
                    key = "Pathology";
                  } else if (type.includes("Inventory")) {
                    key = "Inventory";
                  } else if (type.includes("Garments")) {
                    key = "Garments";
                  } else if (type.includes("Vehicle")) {
                    key = "Vehicle";
                  } else if (type.includes("Billing")) {
                    key = "Billing";
                  } else {
                    key = type.split(" ")[0];
                  }

                  const softwareData = softwareIconMap[key] || {
                    icon: "HardDrive",
                    image: "https://cdn.pixabay.com/photo/2023/11/24/16/09/ai-8410298_1280.jpg",
                    subtitle: "Innovative Solutions"
                  };
                  const IconComponent = (Icons as any)[softwareData.icon];

                  return (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative rounded-3xl bg-white border border-[#e6ecff] overflow-hidden transition-all cursor-pointer transform"
                    >
                      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                        <motion.img
                          src={softwareData.image}
                          alt={type}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
                      </div>

                      <div className="p-8">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E5F0FF] group-hover:bg-[#2562EA] transition-colors mb-4 z-10">
                          {IconComponent ? (
                            <IconComponent className="h-6 w-6 text-[#2562EA] group-hover:text-white" />
                          ) : (
                            <Icons.HardDrive className="h-6 w-6 text-[#2562EA] group-hover:text-white" />
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 transition-colors mb-1">
                          {type}
                        </h3>
                        <p className="text-gray-600">
                          {softwareData.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          );
        }

        if (section.heading.includes("The Software Development Lifecycle")) {
          const steps = section.items || [];
          return (
            <section key={idx} id={sectionId} className="px-6 lg:px-24 py-20 bg-gray-50">
              <SectionHeading
                text={section.heading}
                gradientFrom="#2562EA"
                gradientTo="#6B8DFF"
                className="mb-8 text-center"
              />
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
                {section.content}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="group relative p-6 bg-[#2562EA] rounded-3xl flex flex-col items-center text-center transition-transform duration-400 hover:scale-105 overflow-hidden"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-[#6B8DFF] transition-all duration-500 transform scale-100 group-hover:scale-105"></div>
                    <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-[#1c48a8] mb-5 group-hover:rotate-6 transition-transform duration-500">
                      {getFlowchartIcon(i + 1)}
                      <div className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#6B8DFF] text-white text-lg font-bold">
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

        return (
          <section key={idx} id={sectionId} className="px-6 lg:px-24 py-20 bg-white">
            <SectionHeading
              text={section.heading}
              gradientFrom="#2562EA"
              gradientTo="#6B8DFF"
              className="mb-12 text-center"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items?.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-[#f0f5ff] via-white to-[#e6ecff] rounded-3xl shadow-md p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E5F0FF] group-hover:bg-[#2562EA] mb-5 transition-colors">
                    <Icons.CheckCircle2 className="w-8 h-8 text-[#2562EA] group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#2562EA] mb-2">
                    {item.split("–")[0].trim()}
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {item.split("–")[1]?.trim() || ""}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        );
      })}

      {/* FAQ SECTION */}
      {faqs && faqs.length > 0 && (
        <section id="faqs" className="px-6 lg:px-24 py-20 bg-gray-50">
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
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-300 group hover:border-[#2562EA]"
                >
                  <AccordionTrigger className="flex justify-between items-center text-lg lg:text-xl font-semibold text-gray-800 p-6 pr-4 hover:bg-gradient-to-r hover:from-[#2562EA]/10 hover:to-[#6B8DFF]/10 transition-all duration-300 rounded-3xl group">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 p-6 border-t border-gray-100 bg-[#f0f5ff] text-base leading-relaxed rounded-b-3xl">
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
        <section id="testimonials" className="px-6 lg:px-24 py-16 bg-white">
          <SectionHeading
            text="What Our Clients Say"
            gradientFrom="#2562EA"
            gradientTo="#6B8DFF"
            className="mb-12 text-center text-3xl"
          />
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white border-4 border-transparent hover:border-[#6B8DFF] transition-all duration-500 rounded-3xl p-10 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #f5f8ff 0%, #ffffff 50%, #f0f7ff 100%)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Icons.Quote className="absolute top-8 right-8 w-24 h-24 text-[#E5F0FF] opacity-70 rotate-180 -z-0 transform group-hover:scale-110 transition-transform duration-500" />
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
      <section id="other-services" className="px-6 lg:px-24 pb-24">
        <SectionHeading
          text="Explore Other Services"
          gradientFrom="#2562EA"
          gradientTo="#6B8DFF"
          className="mb-10 text-center text-3xl"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.path}
              className="block p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#6B8DFF] transition-all duration-300 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#2562EA] font-semibold text-lg relative z-10 group-hover:text-white transition-colors duration-300">
                {service.name}
              </p>
              <Icons.ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2562EA] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2562EA] to-[#6B8DFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-x-0 group-hover:scale-x-100 transform origin-left"></div>
            </motion.a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;