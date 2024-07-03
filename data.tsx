import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Phone } from "lucide-react";

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
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
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
        title: "Coming Soon..",
        subtitle: "Coming Soon..",
        description: "Coming Soon...",
        date: "Soon.. ",
    },
    {
        id: 2,
        title: "Hack Reactor Cooding Bootcamp",
        subtitle: "Galvanize",
        description: "Improving my skills as a cooder at the best cooding bootcamp that i had ever went, getting the best projects and skills for start applying jobs.",
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
        subtitle: "UTMACH",
        description: "Went to college to my first carrer as a enviromental science in control of quality of water and floor, doing practices for Machala's enviromental department        ",
        date: "Dec 2019",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 12,
        text: "Experiences Month",
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
        endCounter: 11,
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
        title: "Django One-Shot",
        image: "/image-1.jpg",
        urlGithub: "https://gitlab.com/gustavo.larcoj/django-one-shot",
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
        title: "Fearless Front-end",
        image: "/image-3.jpg",
        urlGithub: "https://gitlab.com/gustavo.larcoj/fearless-frontend",
        urlDemo: "#!",
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
        title: "Post Pump",
        image: "/image-8.jpg",
        urlGithub: "https://gitlab.com/postpump/module3-project-gamma",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description: "Incredible platform! The testimonials here are genuine and have helped me make informed decisions. Highly recommended!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description: "I love the variety of testimonials available on this site. It's inspiring to see how others have overcome similar challenges to mine. Thank you for this invaluable source of motivation!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description: "Excellent resource for getting authentic opinions on different products and services. It has helped me a lot with my online purchases. Bravo for this site!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description: "What a fantastic discovery! The testimonials here are honest and detailed. I feel more confident making decisions after reading the experiences shared by other users.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description: "A gem on the web. The testimonials are easy to find and well organized. Definitely my number one destination when I need reliable references!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description: "Fantastic resource for those seeking validation before making important decisions! The testimonials here are truthful and really helpful. Thanks for simplifying my decision-making process!",
        imageUrl: "/profile6.png",
    },
];
