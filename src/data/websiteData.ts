import * as Icons from "lucide-react"; // ✅ for keyof typeof Icons

// -------------------- Interfaces --------------------
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

export interface BulletPoint {
  text: string;
  icon?: keyof typeof Icons;
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
  icon?: keyof typeof Icons;
}

// -------------------- Other Services List --------------------
export const otherServicesList: OtherService[] = [
  { name: "Website Development", path: "/services/website-development" },
  { name: "Mobile App Development", path: "/services/mobile-app" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Graphics Designing", path: "/services/graphics-design" },
  { name: "Domain & Hosting", path: "/services/domain-hosting" },
  { name: "ERP & CRM Development", path: "/services/erp-crm" },
  { name: "Maintenance Services", path: "/services/maintenance" },
];

// -------------------- Service Data --------------------
export const websiteData: ServiceData = {
  title: "Professional Website Development Services",
  subtitle: "Empowering Businesses with Modern, Responsive Websites",
  description:
    "At Ideovent, we build scalable, responsive, and conversion-focused websites tailored to your business needs. Whether it’s a simple informational website or a complex web application, our expertise ensures fast-loading, SEO-optimized, and mobile-friendly solutions that drive results.",
  image:
    "https://cdn.pixabay.com/photo/2016/11/29/04/17/wordpress-1869329_1280.jpg",

  bulletPoints: [
    { text: "Fully Responsive Websites – Optimized for all devices", icon: "MonitorSmartphone" },
    { text: "SEO-Optimized Development – Higher visibility on search engines", icon: "Search" },
    { text: "Lightning-Fast Performance – Quick loading times under 1 second", icon: "Zap" },
    { text: "CMS Integration – Easy content management and updates", icon: "LayoutDashboard" },
    { text: "Robust Security – Protecting your business and customers", icon: "Shield" },
    { text: "Analytics Enabled – Track visitor data and insights", icon: "BarChart3" },
    { text: "Conversion-Focused – Designed to engage and convert", icon: "TrendingUp" },
  ],

  cta: {
    text: "Get a Free Website Consultation",
    link: "/contact",
    secondary: { text: "View Our Web Portfolio", link: "/portfolio" },
  },

  extraSections: [
    {
      heading: "What is Website Development?",
      content:
        "Website development is the process of coding and programming that enables website functionality, per the owner's requirements. It covers everything from creating simple text-based sites to complex applications, e-commerce stores, and social platforms. While design focuses on the look, development ensures performance, interactivity, and scalability.",
      items: [
        "Client-side coding",
        "Server-side coding",
        "Database technology",
      ],
      image:
        "https://cdn.pixabay.com/photo/2017/01/10/19/05/web-1963186_1280.jpg",
    },
    {
      heading: "Features That We Provide in Web Development",
      content:
        "We deliver end-to-end website solutions that combine modern technologies with business-driven strategies.",
      items: [
        "Fully Responsive Website",
        "Quick Loading Times",
        "Search Engine Optimization (SEO)",
        "Mobile Friendliness",
        "Analytics Integration",
        "Conversion-Optimized Design",
        "Content Management System (CMS)",
        "Social Media Integration",
        "Email Marketing Setup",
        "Robust Security",
        "Progressive Web Apps (PWA)",
        "Social Media Linking",
      ],
      image:
        "https://cdn.pixabay.com/photo/2018/05/08/08/33/programming-3382529_1280.jpg",
    },
    {
      heading: "Why Choose Our Website Development Services?",
      content:
        "We don’t just create websites, we create digital experiences that help organizations manage change, improve visibility, and accelerate growth.",
      items: [
        "Fast, Secure, and Scalable Websites",
        "SEO-Friendly Development",
        "Expert Developers Across Stacks",
        "Future-Ready Progressive Web Apps",
        "Affordable Packages with High ROI",
      ],
      image:
        "https://cdn.pixabay.com/photo/2015/01/08/18/29/startup-593327_1280.jpg",
    },
  ],

  faqs: [
    {
      question: "How long does it take to build a website?",
      answer:
        "Depending on complexity, a basic website can take 2–4 weeks, while feature-rich web applications may take several months.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, we ensure all websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
    },
    {
      question: "Do you provide SEO with website development?",
      answer:
        "Yes, we follow SEO best practices during development to ensure higher visibility in search engines.",
    },
    {
      question: "Can I manage my website content easily?",
      answer:
        "Absolutely. We integrate powerful Content Management Systems (CMS) like WordPress or custom-built solutions for easy content updates.",
    },
  ],

  testimonials: [
    {
      name: "Ankit Verma",
      role: "Founder, TechStart",
      feedback:
        "The website Ideovent built for us loads in under 1 second and ranks on Google. Excellent work!",
    },
    {
      name: "Neha Singh",
      role: "Marketing Head, StyleHub",
      feedback:
        "Our e-commerce site was beautifully developed, mobile-friendly, and conversion-focused. We saw a 40% sales increase within 3 months.",
    },
  ],

  otherServices: otherServicesList,
};