import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shwetang desai",
  initials: "SD",
  url: "https://dillion.io",
  location: "Waterloo, ON",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer who loves building cool stuff and making things better. Always up for learning new things and sharing what I know. Just having fun with tech!",
  summary:
    "While pursuing my Computer Science degree at the University of Waterloo, I’ve crafted machine learning solutions and built full-stack applications used by real-world clients during internships at Martinrea and NSF International. Outside the classroom, I stay busy exploring data-driven insights and building innovative software, always driven by the challenge to create smarter, faster tech.",
  avatarUrl: "/me.png",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
    
  ],
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
      company: "IRCC Canada",

      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/ircc.jpg",
      start: "Sep 2024",
      end: "Present",
      description: "",
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
        " implemented a comprehensive solution that reduced weld camera issue resolution time by 9 minutes using Flask, React, and SQL, benefiting over 20 users. I deployed a TensorFlow and OpenCV-based machine learning program that achieved 98% accuracy in weld quality detection and reduced cycle time by 16 seconds. Additionally, I developed a Python-based kernel density estimator integrated with SQL in Ignition, achieving 94% accuracy in predicting station downtime and optimizing task delegation. I also implemented a Python alert system to detect abnormal camera behavior, further improving issue detection time.",
    },
    {
      company: "NSF International",

      badges: [],
      location: "Guelph, ON",
     
      title: "IT Analysis and Develper Intern",
      logoUrl: "/nsf.png",
      start: "May 2023",
      end: "Dec 2023",
      description:
        " I created a blockchain solution using Kaleido and JavaScript, enhancing food supply chain security with six key improvements and boosting traceability to meet customer standards. I also developed a Python API with Flask for blockchain interaction, reducing transaction time by 43% and improving user experience. Additionally, I generated over 40 data reports through complex SQL queries on an Oracle Database, leading to a 20% improvement in operational efficiency.",
    },
    {
      company: "Thoughtwire",
      
      badges: [],
      location: "Toronto, ON",
      title: "Solution Architect Intern",
      logoUrl: "/tw.jpeg",
      start: "May 2022",
      end: "August 2022",
      description:
        "I designed software solutions, including occupancy detection and clinical data algorithms, to improve patient care and optimize operational processes in healthcare projects. I tested over 30 REST and SOAP APIs using Postman and SoapUI, ensuring seamless product integration and optimal performance. Additionally, I automated the entry of over 400 solution metrics using Python, significantly reducing manual workloads.",
    },
  ],
  education: [
   
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2021",
      end: "2026",
    }
    
  ],
  projects: [
    {
      title: "Chess",
      href: "https://gitfront.io/r/sdesai13/kQBCuTboNFYm/Chess-Project/",
      dates: "",
      active: true,
      description:
        "Fully Functional Chess Game in C++ with a graphical and text user interface. We also created an AI to support player vs player, player vs computer, and computer vs computer game modes. Our AI has 3 levels of difficulty from levels 1 to 3.",
      technologies: [
        "C++"
       
      ],
      links: [
        {
          type: "Source",
          href: "https://gitfront.io/r/sdesai13/kQBCuTboNFYm/Chess-Project/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chessimage.png",
      video:
        "",
    },
    {
      title: "BlackJack",
      href: "https://github.com/sdesai13/BlackJack",
      dates: "",
      active: true,
      description: "This fully functional game features an immersive casino sound experience powered by Pygame, dynamic game logic built with Object-Oriented Programming (OOP), and an interactive GUI created using Tkinter. Developed in Python, the game offers a one-player experience where the player competes against the dealer."
        ,
      technologies: [
        "Python",
        "Pygame",
        "Tkinter"
       
      ],
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
      description: "Developed a housing price prediction model using Python, Pandas, Scikit-Learn, and NumPy based on data scraped from 300+ listings. Achieved a Mean Absolute Percentage Error of 25% through hyperparameter tuning with grid search.",
      
      
      technologies: [
        "Python",
        "Pandas",
        "Numpy",
        "Scikit-Learn",
        
      ],
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
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/librarian.png",
      video:
        "",
    },
  ],
  hackathons: [
    
  ],
} as const;
