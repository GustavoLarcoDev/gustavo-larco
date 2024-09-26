import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Phone, Code2 } from "lucide-react";

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
        description: "Associated skills: SQL (Programming Language), JavaScript (Programming Language), Data Structures, Algorithms, Finance, Computer Science, Python (Programming Language), HyperText Markup Language (HTML), Forensic Sciences, Cryptography, C (Programming Language), Resource Management, Cascading Style Sheets (CSS), Security Software",
        date: "Jul 2024",
    },
    {
        id: 2,
        title: "Hack Reactor Cooding Bootcamp",
        subtitle: "Galvanize",
        description: "Improving my skills as a coder at the best coding bootcamp I could have ever taken, getting the best projects and skills to start applying for jobs.",
        date: "Feb 2024",
    },
    {
        id: 3,
        title: "Academia X",
        subtitle: "1st Cooding Bootcamp",
        description: "I started my first bootcamp to get the basic knowledge about coding.",
        date: "Ago 2023",
    },
    {
        id: 4,
        title: "Enviromental Engineer",
        subtitle: "Technical University of Machala",
        description: "I attended college to kickstart my first carrer as a enviromental scientist in control of the quality of water and floor, doing practices for Machala's enviromental department        ",
        date: "Dec 2019",
    },
]

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
          description: "Develop a strong and consistent brand identity, including logo design, colors, and visual elements.",
        },
        {
          icon: <Pencil />,
          title: "Web Design",
          description: "Create creative and professional designs for intuitive and attractive web interfaces, focused on user experience.",
        },
        {
          icon: <Computer />,
          title: "Web Development",
          description: "Design and develop custom websites tailored to your needs.",
        },
        {
          icon: <Book />,
          title: "Copywriting",
          description: "Create persuasive and engaging content that captures your audience's attention.",
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
        title: "Djando Two-Shot",
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
        title: "Project Alpha Apr ",
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
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "C#",
        description: "high-level, general-purpose, object-oriented programming language that's used to develop a wide range of programs.",
        imageUrl: "/code-1.png",
    },
    {
        id: 2,
        name: "JavaScript",
        description: "programming language used to create dynamic interactions in app, game and web development.",
        imageUrl: "/JS.png",
    },
    {
        id: 3,
        name: "Python",
        description: "a general-purpose, high-level, object-oriented programming language that's used for a variety of applications.",
        imageUrl: "/python.png",
    },
    {
        id: 4,
        name: "React",
        description: "JavaScript library created by Facebook. User Interface (UI) library. Is a tool for building UI components.",
        imageUrl: "/react.png",
    },
    {
        id: 5,
        name: ".Net",
        description: "open-source developer platform created by Microsoft that allows users to build applications for web, mobile, desktop, games, IoT, cloud, and microservices. .NET includes languages, editors, and libraries, and users can write apps in C#, F#, Visual C++, or Visual Basic.",
        imageUrl: "/net.png",
    },
    {
        id: 6,
        name: "More",
        description: "I am a fast learner and i really like to develope my skills and get more experience.",
        imageUrl: "/code.png",
    },

];
