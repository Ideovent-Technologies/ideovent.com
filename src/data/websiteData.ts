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
  icon?: string;
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

// -------------------- Icon Map --------------------
export const websiteIconMap: Record<
  string,
  { icon: keyof typeof Icons; image: string; subtitle: string }
> = {
  Static: {
    icon: "FileText",
    image:
      "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Simple, Fast, and SEO-Friendly",
  },
  Dynamic: {
    icon: "Repeat2",
    image:
      "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Interactive & User-Driven Content",
  },
  eCommerce: {
    icon: "ShoppingCart",
    image:
      "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Sell Products & Grow Your Business",
  },
  Portfolio: {
    icon: "Image",
    image:
      "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Showcase Your Work & Projects",
  },
  Blog: {
    icon: "Pencil",
    image:
      "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Share Stories & Attract Readers",
  },
  LandingPage: {
    icon: "Rocket",
    image:
      "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Convert Visitors into Customers",
  },
  Business: {
    icon: "Briefcase",
    image:
      "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Establish Your Online Presence",
  },
  Educational: {
    icon: "GraduationCap",
    image:
      "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Informative & Knowledge-Based Sites",
  },
};

// New map for the specific "Types of Websites We Build" section
export const websiteCategoryContentMap: Record<
  string,
  { icon: keyof typeof Icons; image: string; subtitle: string }
> = {
  Corporate: {
    icon: "Briefcase",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
    subtitle: "Professional & Trustworthy",
  },
  Ecommerce: {
    icon: "ShoppingCart",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Sell Online with Ease",
  },
  Portfolio: {
    icon: "Image",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Showcase Your Best Work",
  },
  Blog: {
    icon: "Newspaper",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Share Insights & Stories",
  },
  LandingPages: { // Renamed key for clarity
    icon: "Rocket",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "High-Converting Campaigns",
  },
  WebApplications: { // Renamed key for clarity
    icon: "Code",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Custom & Interactive Solutions",
  },
  Educational: {
    icon: "GraduationCap",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Informative Learning Platforms",
  },
  NewsMedia: { // Renamed key for clarity
    icon: "Rss",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Dynamic Content Delivery",
  },
};

// -------------------- Other Services --------------------
export const otherServicesList: OtherService[] = [
  { name: "Mobile App Development", path: "/services/mobile-app" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Graphics Designing", path: "/services/graphics-design" },
  { name: "Domain & Hosting", path: "/services/domain-hosting" },
  { name: "ERP & CRM Development", path: "/services/erp-crm" },
  { name: "Maintenance Services", path: "/services/maintenance" },
  { name: "Software Solutions", path: "/services/software" },
];

// -------------------- Service Data --------------------
export const websiteData: ServiceData = {
  title: "Professional Website Development Services",
  subtitle: "Building Your Digital Presence, One Site at a Time",
  description:
    "At Ideovent, we craft stunning, high-performance websites that not only look great but also drive real business results. We focus on creating a seamless user experience, responsive design, and robust functionality, ensuring your online presence is both impactful and effective. We turn your vision into a dynamic and engaging reality.",
  image:
    "https://cdn.pixabay.com/photo/2015/05/28/14/53/office-788915_1280.jpg",

  bulletPoints: [
    { text: "Strategic Planning & Discovery for optimal web solutions.", icon: "CheckCircle" },
    { text: "Creative UI/UX Design & Wireframing for engaging user journeys.", icon: "Palette" },
    { text: "Robust Front-end & Back-end Implementation for powerful functionality.", icon: "Code2" },
    { text: "Rigorous Testing & Quality Assurance for a flawless user experience.", icon: "ShieldCheck" },
    { text: "Dedicated Post-Launch Support & Maintenance for long-term success.", icon: "Wrench" },
  ],

  cta: {
    text: "Get a Free Website Consultation",
    link: "/contact",
    secondary: { text: "Explore Our Portfolio", link: "/portfolio" },
  },

  extraSections: [
    {
      heading: "Our Website Development Process",
      content:
        "We follow a systematic and collaborative process to ensure your vision is brought to life, on time and on budget. Our transparent approach keeps you informed every step of the way, from initial concept to successful launch.",
      items: [
        "Project Discovery & Planning",
        "Wireframing & UI/UX Design",
        "Front-end Development",
        "Back-end Development & Database Integration",
        "API Development & Third-Party Integrations",
        "Comprehensive Testing & Quality Assurance",
        "Deployment, Launch & Ongoing Support",
      ],
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/06/18/analysis-1867026_1280.jpg",
    },
    {
      heading: "Types of Websites We Build",
      content:
        "Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to deliver. We craft bespoke web solutions to meet diverse business needs, ensuring high performance and scalability.",
      items: [
        "Corporate & Business Websites",
        "E-commerce Stores & Online Marketplaces",
        "Portfolio & Personal Branding Sites",
        "Blog & Content Publishing Platforms",
        "Interactive Landing Pages for Campaigns",
        "Custom Web Applications (CRM, ERP, etc.)",
        "Educational & Membership Portals",
        "News & Media Websites",
      ],
      image:
        "https://cdn.pixabay.com/photo/2016/09/01/10/22/computer-1635380_1280.jpg",
    },
    {
      heading: "Why Ideovent is Your Ideal Partner",
      content:
        "Our dedication to quality, performance, and client satisfaction sets us apart. We build websites that are not just beautiful but also powerful business tools, designed to convert visitors into loyal customers. Partner with us for a digital solution that truly stands out.",
      items: [
        "50+ Successful Web Projects Delivered – A proven track record of excellence.",
        "95% Client Satisfaction Rate – Trusted by businesses across various industries.",
        "Expert Team – Skilled developers and designers proficient in modern web technologies.",
        "Scalable & Future-Proof Solutions – Websites built to grow with your business.",
        "Transparent Communication – Clear updates and collaborative approach throughout the project.",
        "Dedicated Post-Launch Support – Ensuring your website runs smoothly long-term.",
      ],
      image: "https://www.ideovent.com/ideovent.png", // Retained original image from softwareData for "Why Work With Us"
    },
  ],

  faqs: [
    {
      question: "What is the typical timeline for website development?",
      answer:
        "The timeline varies based on complexity. A basic website might take 4-6 weeks, while a more intricate e-commerce platform or custom web application could take 12-20 weeks or more. We'll provide a detailed project plan after our initial consultation.",
    },
    {
      question: "Do you provide website maintenance and support?",
      answer:
        "Absolutely! We offer comprehensive post-launch maintenance, security updates, performance monitoring, and ongoing technical support to ensure your website remains secure, fast, and up-to-date.",
    },
    {
      question: "Which technologies do you use for website development?",
      answer:
      "We leverage a wide range of cutting-edge technologies including React, Angular, Vue.js for front-end, Node.js, Python (Django/Flask), PHP (Laravel) for back-end, and databases like MongoDB, PostgreSQL, and MySQL. We also specialize in CMS platforms like WordPress and cloud services like AWS and Azure.",
    },
  ],

  testimonials: [
    {
      name: "Pratik Sharma",
      role: "Marketing Director, Global Connect",
      feedback:
        "Ideovent transformed our online presence with a stunning and highly functional business website. Their team was professional, responsive, and delivered beyond our expectations!",
    },
    {
      name: "Deepa Singh",
      role: "Owner, 'Artisan Crafts'",
      feedback:
        "The e-commerce store built by Ideovent has significantly boosted our sales. It's user-friendly and beautifully designed. Highly recommend their web development expertise.",
    },
  ],

  otherServices: otherServicesList,
};
