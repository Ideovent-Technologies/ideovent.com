// src/components/layout/ServicePageLayout.tsx

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? (
      <IconComponent className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ) : (
      <Icons.HelpCircle className="h-6 w-6 text-indigo-600" />
    );
  };

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
    <div className="flex flex-col space-y-16">
      {/* HERO */}
      <section className="relative w-full py-16 px-6 lg:px-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-sm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-lg font-medium text-indigo-600 mb-4">
                {subtitle}
              </h2>
            )}
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={cta.link}>{cta.text}</a>
              </Button>
              {cta.secondary && (
                <Button variant="outline" asChild>
                  <a href={cta.secondary.link}>{cta.secondary.text}</a>
                </Button>
              )}
            </div>
          </div>
          <motion.img
            src={image}
            alt={title}
            className="w-full rounded-xl shadow-md object-cover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>
      <hr className="border-t border-gray-200" />
      {/* BULLET POINTS */}
      <section className="px-6 lg:px-20">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          What We Deliver
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bulletPoints.map((point, idx) => {
            const Icon =
              point.icon && (Icons as any)[point.icon]
                ? (Icons as any)[point.icon]
                : Icons.CheckCircle;
            return (
              <motion.div
                key={idx}
                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Icon className="w-6 h-6 text-indigo-600 mt-1" />
                <p className="text-gray-700">{point.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <hr className="border-t border-gray-200" />
      {/* DYNAMIC EXTRA SECTIONS */}
      {extraSections.map((section, idx) => {
        // CUSTOM UI FOR SOFTWARE TYPES
        if (section.heading.includes("Which Types of Software")) {
          const softwareTypes = section.items || [];
          return (
            <section key={idx} className="px-6 lg:px-20 py-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {section.heading}
              </h3>
              <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
                {section.content}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {softwareTypes.map((type, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative p-6 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 hover:border-indigo-400 transition-all cursor-pointer"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition-colors">
                      {getIcon(type.split(" ")[0])}
                    </div>
                    <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
                      {type}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        }

        // CUSTOM UI FOR SOFTWARE DEVELOPMENT LIFECYCLE
        if (section.heading.includes("The Software Development Lifecycle")) {
          const steps = section.items || [];
          return (
            <section key={idx} className="px-6 lg:px-20 py-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {section.heading}
              </h3>
              <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
                {section.content}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="group relative p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 mb-4 transition-transform duration-300 group-hover:rotate-6">
                      {getFlowchartIcon(i + 1)}
                      <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white shadow-md">
                        {i + 1}
                      </div>
                    </div>
                    <p className="font-semibold text-gray-800 text-lg">{step}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        }

        // IMPROVED DEFAULT LAYOUT FOR OTHER SECTIONS
        return (
          <section
            key={idx}
            className="px-6 lg:px-20 py-10 grid lg:grid-cols-2 gap-10 items-center"
          >
            <motion.div
              className={cn(idx % 2 !== 0 ? "order-last lg:order-first" : "")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h3>
              <p className="text-gray-700 mb-4">{section.content}</p>
              {section.items && (
                <ul className="text-gray-700 space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icons.CheckCircle2 className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
            {section.image && (
              <motion.img
                src={section.image}
                alt={section.heading}
                className="rounded-xl shadow-md object-cover w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            )}
          </section>
        );
      })}
      <hr className="border-t border-gray-200" />
      {/* IMPROVED FAQS */}
      {faqs && faqs.length > 0 && (
        <section className="px-6 lg:px-20 py-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <AccordionTrigger className="text-lg font-medium text-gray-800 p-4 hover:bg-gray-50 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 p-4 border-t border-gray-200">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>
      )}
      <hr className="border-t border-gray-200" />
      {/* IMPROVED TESTIMONIALS */}
      {testimonials && testimonials.length > 0 && (
        <section className="px-6 lg:px-20 py-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icons.Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}
      <hr className="border-t border-gray-200" />
      {/* IMPROVED OTHER SERVICES */}
      <section className="px-6 lg:px-20 pb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Explore Other Services
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherServices.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.path}
              className="block p-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-indigo-400 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-indigo-700 font-medium">{service.name}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;