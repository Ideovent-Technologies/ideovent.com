import {
  ServiceData,
  OtherService,
  Testimonial,
  BulletPoint,
  ExtraSection,
  FAQ,
  SoftwareTypesSection,
  SoftwareLifecycleSection,
  GenericExtraSection,
} from "../components/services/types";

import { otherServicesList } from "./softwareData";

export const ermCrmData: ServiceData = {
  title: "ERP & CRM Development Services",
  subtitle: "Streamline Your Business Operations and Boost Efficiency",
  description: "We develop powerful and customized Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems. Our solutions are designed to automate processes, centralize data, and provide valuable insights to help your business grow and succeed.",
  image: "https://cdn.pixabay.com/photo/2016/06/01/06/26/analysis-1428307_1280.jpg",

  bulletPoints: [
    { id: "bp-1", text: "Custom ERP System Development", icon: "CheckCircle" },
    { id: "bp-2", text: "Tailored CRM Solutions", icon: "Code2" },
    { id: "bp-3", text: "Business Process Automation", icon: "Rocket" },
    { id: "bp-4", text: "Seamless Integration with Existing Systems", icon: "ShieldCheck" },
    { id: "bp-5", text: "Dedicated Support & Maintenance", icon: "Wrench" },
  ],

  cta: {
    text: "Request a Free Consultation",
    link: "/contact",
    secondary: { text: "Explore Our Case Studies", link: "/portfolio" },
  },

  extraSections: [
    {
      id: "es-1",
      type: "types",
      heading: "Our ERP & CRM Solutions",
      content: "We build systems that are perfectly aligned with your business model and operational needs.",
      items: [
        {
          id: "custom-erp",
          title: "Custom ERP Systems",
          subtitle: "Manage all core business processes in a single, integrated platform.",
          icon: "LayoutDashboard",
          image: "https://cdn.pixabay.com/photo/2016/11/29/05/45/work-1867187_1280.jpg",
        },
        {
          id: "sales-crm",
          title: "Sales CRM",
          subtitle: "Streamline your sales pipeline and track customer interactions.",
          icon: "TrendingUp",
          image: "https://cdn.pixabay.com/photo/2018/01/29/18/43/internet-3116847_1280.jpg",
        },
        {
          id: "marketing-crm",
          title: "Marketing CRM",
          subtitle: "Automate marketing campaigns and analyze customer behavior.",
          icon: "Megaphone",
          image: "https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2685475_1280.png",
        },
        {
          id: "service-crm",
          title: "Service CRM",
          subtitle: "Enhance customer support and manage service requests efficiently.",
          icon: "LifeBuoy",
          image: "https://cdn.pixabay.com/photo/2015/07/04/09/57/customer-service-830869_1280.jpg",
        },
        {
          id: "hr-erp",
          title: "HRM & Payroll",
          subtitle: "Automate human resources and payroll management.",
          icon: "Users",
          image: "https://cdn.pixabay.com/photo/2017/05/01/10/05/business-2275464_1280.jpg",
        },
      ],
    } as SoftwareTypesSection,

    {
      id: "es-2",
      type: "lifecycle",
      heading: "Our Development Process",
      content: "We follow a meticulous process to deliver a system that is robust, scalable, and perfectly suited for your business.",
      items: [
        { id: "process-analysis", step: "Business Analysis", icon: "Search" },
        { id: "process-design", step: "System Design & Architecture", icon: "LayoutDashboard" },
        { id: "process-development", step: "Custom Development", icon: "Code" },
        { id: "process-testing", step: "Integration & Testing", icon: "BugPlay" },
        { id: "process-deployment", step: "Deployment & Training", icon: "CloudUpload" },
        { id: "process-support", step: "Ongoing Support", icon: "Wrench" },
      ],
    } as SoftwareLifecycleSection,

    {
      id: "es-3",
      type: "generic",
      heading: "Why Ideovent for ERP & CRM?",
      content: "We are committed to building a solution that not only meets your current needs but also helps you scale for future growth.",
      items: [
        { id: "custom-solutions", title: "Truly Custom Solutions", description: "Our systems are built from the ground up to fit your unique workflows." },
        { id: "seamless-integration", title: "Seamless Integration", description: "We can integrate your new system with your existing software for a unified environment." },
        { id: "scalability", title: "Built for Scalability", description: "Our solutions are designed to grow with your business, handling increased data and users." },
        { id: "expert-support", title: "Expert Support", description: "Our team provides comprehensive training and ongoing support to ensure success." },
      ],
    } as GenericExtraSection,
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What is the difference between ERP and CRM?",
      answer: "ERP (Enterprise Resource Planning) systems manage core business processes like finance, HR, and supply chain. CRM (Customer Relationship Management) focuses on managing customer interactions, sales, and marketing.",
    },
    {
      id: "faq-2",
      question: "How long does it take to implement a custom ERP/CRM?",
      answer: "The timeline varies significantly based on complexity and scope, typically ranging from a few months to over a year for large, comprehensive systems.",
    },
    {
      id: "faq-3",
      question: "Can you migrate our existing data?",
      answer: "Yes, we specialize in seamless data migration from your current systems to the new ERP or CRM solution to ensure a smooth transition.",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Pratik Shah",
      role: "Operations Head, Global Solutions",
      feedback: "The custom ERP system built by Ideovent has transformed our business. It streamlined our operations and provided the insights we needed to grow.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Sneha Reddy",
      role: "Sales Director, Future Sales",
      feedback: "Our new CRM has made our sales process so much more efficient. The team was fantastic to work with and delivered a perfect solution for our needs.",
      rating: 5,
    },
  ],

  otherServices: otherServicesList,
};