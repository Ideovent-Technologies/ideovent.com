// services/ServicePageLayout.tsx
import React, { useRef, useEffect, useState } from "react";
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SubNavbar from '../layout/SubNavbar';

import HeroSection from "./HeroSection";
import BulletPoints from "./BulletPoints";
import ExtraSections from "./ExtraSections";
import FAQSection from "./FAQSection";
import TestimonialsSection from "./TestimonialsSection";
import OtherServicesSection from "./OtherServicesSection";

import { ServiceData } from "./types";

const ServicePageLayout: React.FC<ServiceData> = (props) => {
  const [activeSection, setActiveSection] = useState<string>("what-we-deliver");

  // Normalize headings into URL-friendly IDs
  const normalizeHeading = (heading: string) => {
    return heading.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const sections = [
    { id: "what-we-deliver", name: "What We Deliver" },
    ...props.extraSections.map((section, idx) => ({
      id: normalizeHeading(section.heading) || `section-${idx}`,
      name: section.heading,
    })),
    ...(props.faqs && props.faqs.length > 0 ? [{ id: "faqs", name: "FAQs" }] : []),
    ...(props.testimonials && props.testimonials.length > 0 ? [{ id: "testimonials", name: "Testimonials" }] : []),
    { id: "other-services", name: "Other Services" },
  ];

  // Refs for all sections
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Scroll into view on navbar click
  const handleNavClick = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70, // adjust for sticky navbar height
        behavior: "smooth",
      });
    }
  };

  // IntersectionObserver to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-70px 0px 0px 0px", // offset for sticky navbar
        threshold: 0.4, // 40% of section visible
      }
    );

    sections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = sectionRefs.current[section.id];
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  return (
    <div className="flex flex-col font-['Inter'] antialiased">
      <Navbar />
      <HeroSection
        title={props.title}
        subtitle={props.subtitle}
        description={props.description}
        primaryCta={props.cta}
        secondaryCta={props.cta.secondary}
      />
      <SubNavbar
        sections={sections}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      <section
        id="what-we-deliver"
        ref={(el) => (sectionRefs.current["what-we-deliver"] = el)}
      >
        <BulletPoints
          bulletPoints={props.bulletPoints}
          sectionHeading="What We Deliver"
        />
      </section>

      {props.extraSections.map((section, idx) => {
        const id = normalizeHeading(section.heading) || `section-${idx}`;
        return (
          <section
            key={id}
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
          >
            <ExtraSections extraSections={[section]} />
          </section>
        );
      })}

      {props.faqs && (
        <section id="faqs" ref={(el) => (sectionRefs.current["faqs"] = el)}>
          <FAQSection faqs={props.faqs} />
        </section>
      )}

      {props.testimonials && (
        <section
          id="testimonials"
          ref={(el) => (sectionRefs.current["testimonials"] = el)}
        >
          <TestimonialsSection testimonials={props.testimonials} />
        </section>
      )}

      <section
        id="other-services"
        ref={(el) => (sectionRefs.current["other-services"] = el)}
      >
        <OtherServicesSection otherServices={props.otherServices} />
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
