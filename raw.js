import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";

export const config = {
  developer: {
    // name: "Abdul Wahab Malik",
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
      title: "Surveillance System",
      description:
        "The Surveillance System processes RTSP streams and applies advanced features such as object detection, motion detection, line intrusion, and more. It ensures comprehensive monitoring with intelligent analysis capabilities.",
      image: "/projects/portfolio-app.png",
      technologies: ["OpenCV", "NumPy", "Yolo", "DeepSORT"],
    },
    {
      id: 2,
      title: "Virtual Makeup",
      description:
        "Developed a virtual makeup application using TensorFlow.js to precisely extract facial landmarks and apply makeup, including lipstick, concealers, foundation, and more.",
      image: "/projects/code-share-app.png",
      technologies: ["OpenCV", "TensorFlow.js", "JavaScript"],
    },
    {
      id: 3,
      title: "Fish Species Detection",
      description: "Trained a model to detect different Species of fish on boat deck ",
      image: "/projects/wytra-bot-app.png",
      technologies: ["Python", "Object Detection", "Yolo", "Roboflow"],
    },
    {
      id: 4,
      title: "Multiple Choice Questions Checking Application",
      description: "An application that takes image of MCQ sheet and check the number of correctly marked questions.",
      image: "/projects/code-share-app.png",
      technologies: ["Python", "OpenCV", "Jupyter Notebook"],
    },
  ],
  skills: [
    {
      title: "Computer Vision",
      icon: <HiCode />,
      description: "Modern web interfaces",
      bgClass: "bg-blue-500/10",
      iconClass: "text-blue-500",
      skills: [
        { name: "OpenCV", level: "Intermediate" },
        { name: "PyTorch", level: "Advanced" },
        { name: "Object Detection & Tracking", level: "Expert" },
        { name: "Object Segmentation", level: "Expert" },
        { name: "Data Annotation", level: "Expert" },
        { name: "RTSP/HLS Streaming", level: "Advanced" },
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
        { name: "Amazon Web Services", level: "Intermediate" },
        { name: "DigitalOcean", level: "Intermediate" },
        { name: "Adobe Photoshop", level: "Intermediate" },
        { name: "Adobe Lightroom", level: "Intermediate" },
      ],
    },
  ],
  contactInfo: [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "@awahabmalik",
      // link: `https://www.github.com/awahabmalik`,
      link: `https://www.github.com/AbdulRehman0094`,
    },
    {
      icon: <HiMail className="w-5 h-5" />,
      label: "Email",
      // value: "abdulwahabmalik999@gmail.com",
      value: "abdlrhmnashfaq@gmail.com",
      // link: "mailto:abdulwahabmalik999@gmail.com",
      link: "mailto:abdlrhmnashfaq@gmail.com",
    },
  ],
};
