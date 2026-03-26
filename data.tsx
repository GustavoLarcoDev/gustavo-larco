import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Instagram,
  Phone,
  Code2,
} from "lucide-react";

// ============================
// NEW DATA — Apple-style redesign
// ============================

export const dataSkills = [
  {
    category: "Languages",
    items: ["C#", "Python", "JavaScript ES6+", "TypeScript", "SQL", "HTML5", "CSS"],
  },
  {
    category: "Frameworks",
    items: [
      "ASP.NET Core",
      ".NET",
      "React.js",
      "Next.js",
      "Django",
      "Django REST",
      "FastAPI",
      "Node.js",
      "Bootstrap",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["Microsoft Azure", "AWS", "Docker", "CI/CD", "GitHub Actions", "Vercel"],
  },
  {
    category: "Data & Databases",
    items: [
      "Power BI",
      "DAX",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "MySQL",
      "Entity Framework Core",
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      "Git",
      "Stripe API",
      "SignalR",
      "Figma",
      "Agile / Scrum",
      "Microservices",
      "REST APIs",
      "Domain-Driven Design",
    ],
  },
];

export const dataExperience = [
  {
    id: 1,
    company: "Simplicity Software",
    role: "Software Engineer / Data Analyst",
    period: "2025 – Present",
    bullets: [
      "Develop and maintain enterprise-level applications using C#, ASP.NET Core, and .NET for business clients",
      "Build interactive Power BI dashboards and reports using DAX to deliver data-driven insights for stakeholders",
      "Architect scalable backend services with Entity Framework Core and SQL Server, optimizing database performance",
      "Implement CI/CD pipelines with GitHub Actions and deploy applications to Microsoft Azure cloud infrastructure",
      "Collaborate cross-functionally following Agile methodologies to deliver features on schedule",
    ],
  },
  {
    id: 2,
    company: "Freelance",
    role: "Full Stack Web Developer",
    period: "2025 – Present",
    bullets: [
      "Designed and deployed 8+ responsive business websites for clients across industries including salons, restaurants, and retail",
      "Delivered SEO-optimized, mobile-first web solutions with custom animations, increasing client online visibility",
      "Managed full project lifecycle from client requirements gathering through deployment and maintenance",
    ],
  },
  {
    id: 3,
    company: "Amazon",
    role: "Warehouse Associate · Coach Ambassador",
    period: "Aug 2023 – Aug 2024",
    bullets: [
      "Boosted inventory efficiency by implementing Just-In-Time (JIT) categorization methods across warehouse operations",
      "Served as Amazon Coach Ambassador, training and mentoring team members on operational best practices",
    ],
  },
  {
    id: 4,
    company: "Marriott Aloft Hotel",
    role: "Principal Customer Service",
    period: "Feb 2022 – Aug 2023",
    bullets: [
      "Managed POS operations for bar and restaurant using LightSpeed OS, driving a 20% revenue increase",
      "Administered front desk operations including reservations, CC authorization, and guest services",
    ],
  },
];

export const dataProjects = [
  {
    id: 1,
    title: "My-Negocio.com",
    subtitle:
      "SaaS business management platform serving small businesses across Latin America",
    tech: ["JavaScript", "Bootstrap", "REST APIs"],
    period: "2025 – Present",
    highlights: [
      "Built multi-tenant platform supporting 4 business models: memberships, appointments, retail/POS, and restaurants",
      "Engineered customer management with payment tracking, attendance history, and real-time financial dashboards",
      "Developed smart scheduling engine with conflict prevention and WhatsApp automation for notifications",
      "Implemented integrated POS system with digital receipts, inventory management, and cash flow analytics",
    ],
    image: "/Restaurant.png",
    urlGithub: "",
    urlDemo: "",
  },
  {
    id: 2,
    title: "MyHotel",
    subtitle: "Real-time hotel management web application with live updates",
    tech: ["C#", "ASP.NET Core", "SignalR", "Entity Framework"],
    period: "2026",
    highlights: [
      "Architected MVC application with real-time communication via SignalR hubs for live booking updates",
      "Designed database schema with Entity Framework Core and automated CI/CD with GitHub Actions",
    ],
    image: "/image-4.jpg",
    urlGithub: "",
    urlDemo: "",
  },
  {
    id: 3,
    title: "EduTools",
    subtitle:
      "Educational platform with tools and tutorials for university students",
    tech: ["TypeScript", "Next.js", "Django", "PostgreSQL", "AWS", "Stripe"],
    period: "2025",
    highlights: [
      "Developed REST API with Django and PostgreSQL, integrated AWS S3 for storage and Stripe for payments",
      "Built responsive frontend with Next.js and TypeScript, deployed to Vercel and AWS Elastic Beanstalk",
    ],
    image: "/image-2.jpg",
    urlGithub: "",
    urlDemo: "",
  },
  {
    id: 4,
    title: "PostPump",
    subtitle:
      "Fitness tracking application for workouts and program management",
    tech: ["Python", "JavaScript", "PostgreSQL", "React"],
    period: "2024",
    highlights: [
      "Implemented 2FA and OAuth social login for secure access",
      "Optimized PostgreSQL schemas for performance",
    ],
    image: "/image-8.jpg",
    urlGithub: "https://gitlab.com/postpump/module3-project-gamma",
    urlDemo: "",
  },
  {
    id: 5,
    title: "CarCar",
    subtitle:
      "Car dealership management system for inventory, sales, and service",
    tech: ["Docker", "FastAPI", "Python", "React", "MongoDB"],
    period: "2024",
    highlights: [
      "Built backend tracking system for sales and inventory",
      "Containerized with Docker for consistent deployments",
    ],
    image: "/image-6.jpg",
    urlGithub: "https://gitlab.com/quinnschohan/project-beta",
    urlDemo: "",
  },
];

export const dataEducation = [
  {
    id: 1,
    school: "Hack Reactor",
    degree: "Advanced Software Engineering Immersive Program",
    date: "Jul 2024",
    description:
      "800+ hours of intensive Python and JavaScript training with Agile methodologies, pair programming, and team collaboration",
  },
  {
    id: 2,
    school: "Universidad Técnica de Machala",
    degree: "Environmental Engineering",
    date: "Feb 2019",
    description: "",
  },
];

// ============================
// LEGACY DATA — kept for backward compat with old route pages
// ============================

export const socialNetworks = [
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/gustavo-larco/",
  },
  {
    id: 4,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "7372876304",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Services",
    icon: <Pencil size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "CS:50 Harvard Program",
    subtitle: "Computer Science",
    description:
      "Associated skills: SQL, JavaScript, Data Structures, Algorithms, Python, HTML, CSS, C",
    date: "Jul 2024",
  },
  {
    id: 2,
    title: "Hack Reactor Coding Bootcamp",
    subtitle: "Galvanize",
    description:
      "Improving my skills as a coder at the best coding bootcamp, getting the best projects and skills.",
    date: "Feb 2024",
  },
  {
    id: 3,
    title: "Academia X",
    subtitle: "1st Coding Bootcamp",
    description: "I started my first bootcamp to get the basic knowledge about coding.",
    date: "Aug 2023",
  },
  {
    id: 4,
    title: "Environmental Engineer",
    subtitle: "Technical University of Machala",
    description:
      "Attended college for environmental science, quality of water and soil analysis.",
    date: "Dec 2019",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 12,
    text: "Months of Experience",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 11,
    text: "Guest Satisfaction",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 13,
    text: "Projects Done",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 2,
    text: "Coding Bootcamps",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Develop a strong and consistent brand identity, including logo design, colors, and visual elements.",
  },
  {
    icon: <Pencil />,
    title: "Web Design",
    description:
      "Create creative and professional designs for intuitive and attractive web interfaces.",
  },
  {
    icon: <Computer />,
    title: "Web Development",
    description: "Design and develop custom websites tailored to your needs.",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Create persuasive and engaging content that captures your audience's attention.",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description: "Optimize your online presence using advanced SEO strategies.",
  },
];

export const contactData = [
  {
    icon: <Phone />,
    title: "Phone Number",
    description: "(737)-287-6304",
  },
  {
    icon: <Linkedin />,
    title: "Linkedin",
    description: "/in/gustavo-larco/",
  },
  {
    icon: <Instagram />,
    title: "Instagram",
    description: "daniel.larco06",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Post Pump",
    image: "/image-8.jpg",
    urlGithub: "https://gitlab.com/postpump/module3-project-gamma",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Django Two-Shot",
    image: "/image-2.jpg",
    urlGithub: "https://gitlab.com/gustavo.larcoj/django-two-shot",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Restaurant Danielito",
    image: "/Restaurant.png",
    urlGithub: "https://github.com/GustavoLarcoDev/Restaurant_Danielito",
    urlDemo: "https://danielito.netlify.app/",
  },
  {
    id: 4,
    title: "Microservice Study",
    image: "/image-4.jpg",
    urlGithub: "https://gitlab.com/gustavo.larcoj/microservice-study",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Microservice-two-shot",
    image: "/image-5.jpg",
    urlGithub: "https://gitlab.com/cwblodge/microservice-two-shot",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "CarCar",
    image: "/image-6.jpg",
    urlGithub: "https://gitlab.com/quinnschohan/project-beta",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Project Alpha Apr",
    image: "/image-7.jpg",
    urlGithub: "https://gitlab.com/gustavo.larcoj/project-alpha-apr",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "Django One-Shot",
    image: "/image-1.jpg",
    urlGithub: "https://gitlab.com/gustavo.larcoj/django-one-shot",
    urlDemo: "https://cocktails-7ng2.onrender.com/recipes/w",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "C#",
    description:
      "High-level, general-purpose, object-oriented programming language used to develop a wide range of programs.",
    imageUrl: "/code-1.png",
  },
  {
    id: 2,
    name: "JavaScript",
    description:
      "Programming language used to create dynamic interactions in app, game and web development.",
    imageUrl: "/JS.png",
  },
  {
    id: 3,
    name: "Python",
    description:
      "General-purpose, high-level, object-oriented programming language used for a variety of applications.",
    imageUrl: "/python.png",
  },
  {
    id: 4,
    name: "React",
    description:
      "JavaScript library created by Facebook. User Interface (UI) library for building UI components.",
    imageUrl: "/react.png",
  },
  {
    id: 5,
    name: ".Net",
    description:
      "Open-source developer platform created by Microsoft for web, mobile, desktop, games, IoT, cloud, and microservices.",
    imageUrl: "/net.png",
  },
  {
    id: 6,
    name: "More",
    description:
      "I am a fast learner and I really like to develop my skills and get more experience.",
    imageUrl: "/code.png",
  },
];
