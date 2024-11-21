import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";

export const config = {
  developer: {
    name: "Abdul Rehman",
  },
  social: {
    // github: "aWahabMalik",
    github: "AbdulRehman0094",
    discord: "1155137511954337887",
  },
  NAV_ITEMS: [
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  projects: [
    {
      id: 1,
      title: "Laboratory Management System",
      description:
        "This client management system provides the automated way to book appointments, get reports, calculate revenue and many other features. It comes with Admin Dashboard to present better user experience.",
      image: "/projects/portfolio-app.png",
      technologies: ["React", "MongoDB", "NODE", "Express"],
    },
    {
      id: 2,
      title: "Univerity Process Automation",
      description:
        "Developed a virtual makeup application using TensorFlow.js to precisely extract facial landmarks and apply makeup, including lipstick, concealers, foundation, and more.",
      image: "/projects/code-share-app.png",
      technologies: ["React", "MongoDB", "NODE", "Express"],
    },
    {
      id: 3,
      title: "AI Survillance System",
      description:
        "Developed a large scale product that provide AI Security survillance. Optimized the API calls from Frontend and reduced real time notification delay fron backend ",
      image: "/projects/wytra-bot-app.png",
      technologies: ["React", "MongoDB", "NODE", "Express"],
    },
    {
      id: 4,
      title: "Campus Management System",
      description:
        "Developed a Campus 360 Application for Government College University Lahore to automate their management process including student clearance, Fee management, Hostle management, committee constitution and Student and Staff Search.",
      image: "/projects/code-share-app.png",
      technologies: ["React", "MongoDB", "NODE", "Express"],
    },
  ],
  skills: [
    {
      title: "Full Stack Development",
      icon: <HiCode />,
      description: "Modern web interfaces",
      bgClass: "bg-blue-500/10",
      iconClass: "text-blue-500",
      skills: [
        { name: "MERN", level: "Intermediate" },
        { name: "React", level: "Advanced" },
        { name: "NEXT", level: "Expert" },
        { name: ".NET Core", level: "Expert" },
        { name: "Block-chain", level: "Beginner" },
        { name: "RTSP/HLS Streaming", level: "Begineer" },
      ],
    },
    {
      title: "Programs & Tools",
      icon: <HiCube />,
      description: "Development & Productivity Tools",
      bgClass: "bg-orange-500/10",
      iconClass: "text-orange-500",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "Visual Studio Code", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Amazon Web Services", level: "Intermediate" },
        { name: "DigitalOcean", level: "Intermediate" },
        { name: "Adobe Photoshop", level: "Intermediate" },
        { name: "Adobe Lightroom", level: "Intermediate" },
      ],
    },
  ],
  experience: [
    {
      companyName: "Deutics Global",
      location: "Lahore, Pakistan",
      companyDescription: "A comapny that provides Security Survilance through integrated AI Features",
      accomplishments: [
        "Leveraging the power of React.js for delivering feature rich web applications",
        "Identifying and fixing bugs and performance bottlenecks",
        "Contributing to the design and Integration of APIs, and other backend functionalities that interact with the frontend",
        "•Maintaining data integrity and scalability with MS SQL and MongoDB",
      ],
      jobTitle: "Software Engineer",
      fromDate: "Sep, 2023",
      toDate: "present",
    },
    {
      companyName: "DIT GCU",
      location: "Lahore, Pakistan",
      companyDescription:
        "The IT Department of Goverment College Univeristy that takes care of LMS and Campus Management System",
      accomplishments: [
        "Developed and maintained university software applications, using Node Js, Express.js, and React.Js contributing to the enhancement of campus-wide systems",
        "Collaborated with a multidisciplinary team to design and implement features, ensuring functionality met the requirements of various departments",
        "Collaborated with team members to ensure seamless integration of software components and adherence to coding standards",
        "•Actively participated in agile development processes, attending sprint planning meetings, and contributing to the completion of project milestones",
      ],
      jobTitle: "Frontend Developer",
      fromDate: "Feb, 2023",
      toDate: "Aug, 2023",
    },
  ],
  contactInfo: [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "@AbdulRehman0094",
      // link: `https://www.github.com/awahabmalik`,
      link: `https://www.github.com/AbdulRehman0094`,
    },
    {
      icon: <HiMail className="w-5 h-5" />,
      label: "Email",
      value: "abdlrhmnashfaq@gmail.com",
      link: "mailto:abdlrhmnashfaq@gmail.com",
    },
  ],
};
