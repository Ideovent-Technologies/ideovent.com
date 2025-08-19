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
export const softwareIconMap: Record<
  string,
  { icon: keyof typeof Icons; image: string; subtitle: string }
> = {
  School: {
    icon: "School",
    image: "https://cdn.pixabay.com/photo/2023/05/23/10/24/erp-8012424_1280.jpg",
    subtitle: "Simplify Academic & Admin Tasks",
  },
  Library: {
    icon: "BookOpen",
    image: "https://cdn.pixabay.com/photo/2023/01/26/02/15/books-7744938_1280.jpg",
    subtitle: "Organize Resources & Catalogs",
  },
  Hotel: {
    icon: "Hotel",
    image: "https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_1280.jpg",
    subtitle: "Optimize Bookings & Guest Services",
  },
  Gym: {
    icon: "Dumbbell",
    image: "https://cdn.pixabay.com/photo/2023/09/11/14/19/weights-8246972_1280.jpg",
    subtitle: "Manage Memberships & Classes",
  },
  Billing: {
    icon: "FileText",
    image: "https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_1280.jpg",
    subtitle: "Automate Invoicing & Payments",
  },
  Pathology: {
    icon: "TestTube",
    image: "https://cdn.pixabay.com/photo/2017/10/04/09/56/chemist-2815640_1280.jpg",
    subtitle: "Streamline Lab Operations & Reports",
  },
  Inventory: {
    icon: "Boxes",
    image: "https://cdn.pixabay.com/photo/2013/03/03/15/48/holland-89589_1280.jpg",
    subtitle: "Track Stock & Optimize Supply",
  },
  GST: {
    icon: "FileSpreadsheet",
    image: "https://cdn.pixabay.com/photo/2019/04/02/09/27/income-tax-4097292_1280.jpg",
    subtitle: "Ensure Tax Compliance & Reporting",
  },
  Vehicle: {
    icon: "ParkingCircle",
    image: "https://cdn.pixabay.com/photo/2015/06/29/09/22/parking-825371_1280.jpg",
    subtitle: "Manage Parking & Vehicle Entry",
  },
  CarShowroom: {
    icon: "Car",
    image: "https://cdn.pixabay.com/photo/2019/11/02/19/24/car-4597207_1280.jpg",
    subtitle: "Boost Sales & Customer Relations",
  },
  RealEstate: {
    icon: "Building",
    image: "https://cdn.pixabay.com/photo/2016/03/15/18/18/rooftops-1258857_1280.jpg",
    subtitle: "Track Leads & Manage Properties",
  },
  Hospital: {
    icon: "Hospital",
    image: "https://cdn.pixabay.com/photo/2016/11/06/10/35/hospital-1802679_1280.jpg",
    subtitle: "Streamline Patient Care & Records",
  },
};

// -------------------- Other Services --------------------
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
export const softwareData: ServiceData = {
  title: "Tailored Software Solutions That Drive Growth",
  subtitle: "Tailored to Empower Your Business",
  description:
    "At Ideovent, we craft tailored software solutions that help your business scale, automate processes, and achieve its full potential...",
  image:
    "https://cdn.pixabay.com/photo/2022/01/29/13/08/programming-6977450_1280.jpg",

  bulletPoints: [
    { text: "Strategic Planning & Analysis...", icon: "CheckCircle" },
    { text: "Creative UI/UX Design & Prototyping...", icon: "Palette" },
    { text: "Robust Implementation...", icon: "Code2" },
    { text: "Rigorous Integration & Testing...", icon: "ShieldCheck" },
    { text: "Dedicated Maintenance & Support...", icon: "Wrench" },
  ],

  cta: {
    text: "Get a Free Software Consultation",
    link: "/contact",
    secondary: { text: "Explore Our Portfolio", link: "/portfolio" },
  },

  extraSections: [
    {
      heading: "Which Types of Software We Provide",
      content:
        "We build industry-ready solutions tailored to your unique needs...",
      items: [
        "School Management Software",
        "Library Management System",
        "Hotel Management Software",
        "Gym Management Software",
        "Billing & Invoicing Solutions",
        "Pathology & Lab Management",
        "Inventory & Warehouse Management",
        "GST & Taxation Software",
        "Vehicle Stand Management",
        "Car/Bike Showroom CRM",
        "Real Estate CRM",
        "Hospital Management Systems",
      ],
      image:
        "https://cdn.pixabay.com/photo/2018/01/16/07/00/software-3084200_1280.jpg",
    },
    {
      heading: "The Software Development Lifecycle",
      content:
        "Our systematic approach ensures a high-quality product. We follow a core set of activities that ensure scalability, performance, and reliability.",
      items: [
        "Planning & Roadmap",
        "Requirement Analysis",
        "UI/UX Designing",
        "Implementation & Coding",
        "Integration & API Development",
        "Rigorous Testing & QA",
        "Deployment & Maintenance",
      ],
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/06/15/analysis-1867008_1280.jpg",
    },
    {
      heading: "Why Work With Us",
      content:
        "We combine innovation, expertise, and dedication to deliver results that matter. Here’s why businesses choose Ideovent:",
      items: [
        "50+ Projects Delivered – Proven track record of success",
        "95% Client Satisfaction – Trusted by businesses across industries",
        "Expert Team – Skilled developers for every stack",
        "Scalable Solutions – Future-proof your business",
      ],
      image: "https://www.ideovent.com/ideovent.png",
    },
  ],

  faqs: [
    {
      question: "How long does it take to develop custom software?",
      answer:
        "The timeline depends on the complexity and scale of the project. Typically, small apps may take 4–8 weeks, while enterprise solutions can take several months.",
    },
    {
      question: "Do you provide post-deployment support?",
      answer:
        "Yes, we provide ongoing maintenance, updates, and technical support to ensure your software runs smoothly.",
    },
    {
      question: "Which technologies do you use?",
      answer:
        "We leverage modern stacks such as React, Node.js, Python, Java, .NET, MongoDB, and cloud-native solutions like AWS and Azure.",
    },
  ],

  testimonials: [
    {
      name: "Rahul Sharma",
      role: "CTO, EduTech",
      feedback:
        "Ideovent built our custom school management system, and it transformed the way we operate. Amazing support and smooth delivery!",
    },
    {
      name: "Priya Mehta",
      role: "Founder, RetailX",
      feedback:
        "The billing and inventory software from Ideovent saved us countless hours. Highly recommend their expertise.",
    },
  ],

  otherServices: otherServicesList,
};
