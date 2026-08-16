import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shwetang desai",
  initials: "SD",
  url: "https://dillion.io",
  location: "Austin, TX",
  locationLink: "https://www.google.com/maps/place/Austin,+TX",
  description:
    "Passionate about solving challenging technical problems.",
  summary:
    "I graduated from the University of Waterloo with a Bachelor of Computer Science in June 2026. Across internships, I’ve built machine learning solutions and full-stack applications for real-world teams, and I enjoy using data and thoughtful engineering to make software smarter and more useful.",
  avatarUrl: "/me-3.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
    "SQL",
    "Angular",
    "Javascript",
    "MongoDB",
    "OpenCV",
    "Tensorflow",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "shwetang.desai@uwaterloo.ca",
    tel: "+19057839074",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sdesai13",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shwetang-desai/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Email",
        url: "mailto:shwetang.desai@uwaterloo.ca",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Cloudflare",

      badges: [],
      location: "Austin, Texas",
      title: "Systems Engineer",
      logoUrl: "/cf_img.png",
      start: "Aug 2026",
      end: "Present",
      description:
        "I returned to Cloudflare as a full-time Systems Engineer after my Software Engineer internship.",
    },
    {
      company: "Cloudflare",

      badges: [],
      location: "Austin, Texas",
      title: "Software Engineer Intern",
      logoUrl: "/cf_img.png",
      start: "May 2025",
      end: "December 2025",
      description:
        "At Cloudflare, I built a Go CLI with Kubernetes ephemeral containers that reduced manual effort by 90% while migrating 100+ enterprise accounts and automating organization creation. I also moved resources onto Terraform, reducing client setup time by 70%, and added 15+ Prometheus metrics and Grafana dashboard improvements that cut incident response time by 40%. A React dashboard landing page made organization setup and access provisioning more self-service.",
    },

    {
      company: "IRCC Canada",

      badges: [],
      location: "Ottawa, ON",
      title: "Software Developer Intern",
      logoUrl: "/ircc.jpg",
      start: "Sep 2024",
      end: "Dec 2024",
      description:
        "At IRCC, I migrated a legacy JavaServer Pages fee-management app to Angular with a Spring REST API and Microsoft SQL Server, improving page load times by 20% for 50+ users. I improved search and filter performance by 15% with client-side pagination and lazy loading, and wrote Jasmine and Karma tests for 5+ Angular components to reach 85% coverage.",
    },
    {
      company: "Martinrea",
      badges: [],

      location: "Tillsonburg, ON",
      title: "Software Developer Intern",
      logoUrl: "/martinrea.png",
      start: "January 2024",
      end: "April 2024",
      description:
        "At Martinrea International, I developed a TensorFlow and OpenCV model that achieved 98% accuracy in real-time weld quality detection and cut cycle time by 16 seconds. I also built a Python kernel density estimator with SQL in Ignition to predict station downtime with 94% accuracy, and created a Flask, React, and SQL weld-camera monitoring system that cut issue resolution from 30 to 15 minutes for 20+ users.",
    },
    {
      company: "NSF International",

      badges: [],
      location: "Guelph, ON",

      title: "Software Developer Intern",
      logoUrl: "/nsf.png",
      start: "May 2023",
      end: "Dec 2023",
      description:
        "At NSF International, I built a tamper-resistant supply-chain traceability solution with Kaleido and JavaScript. I also developed a Flask-based Python API for Hyperledger Fabric that cut blockchain transaction time by 43%, and optimized Oracle SQL queries for 40+ analytical reports, improving operational efficiency by 20%.",
    },
    {
      company: "Thoughtwire",

      badges: [],
      location: "Toronto, ON",
      title: "Software Architect Intern",
      logoUrl: "/tw.jpeg",
      start: "May 2022",
      end: "August 2022",
      description:
        "At ThoughtWire, I designed occupancy-detection and clinical-data algorithms for healthcare applications supporting patient care and operational workflows. I also tested 30+ REST and SOAP APIs with Postman and SoapUI to validate product integrations.",
    },
  ],
  education: [
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2021",
      end: "June 2026",
    },
  ],
  projects: [
    {
      title: "Chess",
      href: "https://gitfront.io/r/sdesai13/kQBCuTboNFYm/Chess-Project/",
      dates: "",
      active: true,
      description:
        "Fully Functional Chess Game in C++ with a graphical and text user interface. We also created an AI to support player vs player, player vs computer, and computer vs computer game modes. Our AI has 3 levels of difficulty from levels 1 to 3.",
      technologies: ["C++"],
      links: [
        {
          type: "Source",
          href: "https://gitfront.io/r/sdesai13/kQBCuTboNFYm/Chess-Project/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chessimage.png",
      video: "",
    },
    {
      title: "BlackJack",
      href: "https://github.com/sdesai13/BlackJack",
      dates: "",
      active: true,
      description:
        "This fully functional game features an immersive casino sound experience powered by Pygame, dynamic game logic built with Object-Oriented Programming (OOP), and an interactive GUI created using Tkinter. Developed in Python, the game offers a one-player experience where the player competes against the dealer.",
      technologies: ["Python", "Pygame", "Tkinter"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sdesai13/BlackJack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blackjack.png",
      video: "",
    },
    {
      title: "Price Model",
      href: "https://github.com/sdesai13/Price-Model",
      dates: "",
      active: true,
      description:
        "Developed a housing price prediction model using Python, Pandas, Scikit-Learn, and NumPy based on data scraped from 300+ listings. Achieved a Mean Absolute Percentage Error of 25% through hyperparameter tuning with grid search.",

      technologies: ["Python", "Pandas", "Numpy", "Scikit-Learn"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sdesai13/Price-Model",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/house.webp",
      video: "",
    },
    {
      title: "Librarian",
      href: "",
      dates: "",
      active: true,
      description:
        "This MERN stack book app allows users to effortlessly manage their personal library by adding, editing, updating, and viewing books, with powerful filtering options to organize their collection. Currently, I’m developing a machine learning algorithm to recommend new books based on users' owned books and ratings, enhancing the overall reading experience with personalized suggestions.",
      technologies: [
        "React",
        "Javascript",
        "MongoDB",
        "Node.Js",
        "Python",
        "Scikit-Learn",
        "Numpy",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sdesai13/BookKeeper",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/catalogue.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
