// services/types.ts
import React from "react";

export interface BulletPoint {
  id: string; // Added for stable keys
  text: string;
  icon?: string;
}

// Discriminated union for a more robust ExtraSection
export type ExtraSection = GenericExtraSection | SoftwareLifecycleSection | SoftwareTypesSection;

export interface GenericExtraSection {
  id: string; // Added for stable keys
  type: "generic";
  heading: string;
  content: string;
  items?: {
    id: string; // Added for stable keys
    title: string;
    description: string;
  }[];
}

export interface SoftwareLifecycleSection {
  id: string; // Added for stable keys
  type: "lifecycle";
  heading: string;
  content: string;
  items?: {
    id: string; // Added for stable keys
    step: string;
    icon?: string;
  }[];
}

export interface SoftwareTypesSection {
  id: string; // Added for stable keys
  type: "types";
  heading: string;
  content: string;
  items?: {
    id: string; // Added for stable keys
    title: string;
    subtitle: string;
    image?: string;
    icon?: string;
  }[];
}

export interface FAQ {
  id: string; // Added for stable keys
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string; // Added for stable keys
  name: string;
  role: string;
  feedback: string;
  rating?: number; // Added for dynamic star ratings
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
  id: string; // Added for stable keys
  name: string;
  path: string;
}

// The main data interface for the service page
export interface ServiceData {
  title: string;
  subtitle?: string;
  description: string;
  image?: string; // Made optional if not all pages have a hero image
  bulletPoints: BulletPoint[];
  cta: CTA;
  extraSections: ExtraSection[];
  faqs?: FAQ[];
  testimonials?: Testimonial[];
  otherServices: OtherService[];
}