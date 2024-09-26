import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { title } from "process";

export const RESUME_DATA = {
  name: "Abdelrahman Ibrahim",
  initials: "AI",
  location: "Montréal, Québec, Canada",
  locationLink: "https://www.google.com/maps/place/Montreal",
  about:
    "Mathematics and Computer Science student hoping to become a Software Engineer.",
  summary:
    "I'm so tired of writing these...why does everyone need a summary? I'm a student, I'm learning, I'm trying to get a job. That's it.",
  avatarUrl: "https://avatars.githubusercontent.com/u/88764912?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "abdelrahman.inbox@gmail.com",
    tel: "+1 438 467 8441",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AbdelRahm4n",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdel-rahman-ibrahim-417702288",
        icon: LinkedInIcon,
      },
      /**{
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },**/
    ],
  },
  education: [
    {
      school: "Universté de Montréal",
      degree: "Bachelor's Degree in Mathematics and Computer Science",
      start: "2023",
      end: null,
    },
  ],
  work: [
    {
      company: "101.org",
      link: "https://film.io",
      badges: ["Remote"],
      title: "Software Engineer - Volunteer",
      logo: ConsultlyLogo,
      start: "2021",
      end: null,
      description:
        "Developed and optimized full-stack web applications using the MERN stack, improving page load times by 25% and handling up to 10,000 tasks per user with a 30% faster response time. Integrated third-party APIs, implemented CI/CD pipelines, and enhanced security through JWT-based authentication and role-based access control.",
      techStack: [" React, ", "Node.js, ", "Express, ", "MongoDB"],
    },
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Led the Android team and developed apps for major Polish companies like LOT, Polskie Radio, Agora, and PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Developed and tested software for LTE base stations",
    // },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "Haskell",
    "C++",
    "React/Next.js",
    "Node.js",
  ],
  projects: [
    {
      title: "Timetable Manager",
      techStack: [
        "Java",
      ],
      description:
        "Application designed to help students manage their schedules and courses efficiently",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/AbdelRahm4n/timetable-manager",
      },
    },
    {
      title: "ML emotion recognition",
      techStack: [
        "Python",
        "OpenCV",
        "TensorFlow",

      ],
      description:
        "Real time emotion recognition using machine learning",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://github.com/AbdelRahm4n/emotionDetectorML",
      },
    },
    {
      title: "ML match predictor",
      techStack: [
        "Python",
        "SciKit Learn",
        "Pandas",
        "Beautiful Soup",
      ],
      description: "Machine learning model that predicts football match outcomes, with error measuting and prediction improvement",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/AbdelRahm4n/PythonEPL",
      },
    },
    {
      title: "MERN task manager",
      techStack: ["React", "MongoDB", "Express.js", "Node.js"],
      description:
        "tile-based task manager with user authentication, CRUD operations using a REST API",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/AbdelRahm4n/task-manager",
      },
    },
  ],

  otherInterests: [
    {
      title: "DIRO Podcast",
      description: "I am part of the computer science and operations reseach podcast team at Université de Montréal. So far we've interviewed Gilles Brassard (look him up !), and we hope to interview many more."
    }
  ],
} as const;
