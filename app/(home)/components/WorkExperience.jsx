"use client";
import { config } from "@/config";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div className="relative flex flex-col h-full">
      <div
        className="relative h-full p-4 rounded-xl border border-zinc-700/70
                          hover:border-zinc-600/90 transition-all duration-300"
      >
        <div className="flex flex-col justify-start items-start  ">
          <div className="flex items-end">
            <h2 className="text-xl font-semibold text-primary">{experience.jobTitle},</h2>
            <h3 className="text-md  font-semibold text-primary/80  ml-2">{experience.companyName}</h3>
          </div>
          <div className="flex">
            <h3 className="text-sm  text-primary/70  ">{experience.location}</h3>
            <h4 className="text-sm   text-primary/70  ml-5 ">
              {experience.fromDate} - {experience.toDate}
            </h4>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{experience.companyDescription}</p>
        <ul>
          {experience.accomplishments?.map((accom, index) => (
            <li key={index} className="list-disc ml-10 mt-2 text-primary/90">
              {accom}index
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function WorkExperince() {
  const experience = config.experience;

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };
  return (
    <div className="">
      {" "}
      <motion.div variants={itemAnimation} className="flex flex-col items-center w-full justify-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Work Experience</h2>
        <p className="text-lg text-muted-foreground">
          A comprehensive overview of my work experince across various development domains and tools.
        </p>
      </motion.div>
      <div className="container mx-auto px-6 grid grid-cols-2 gap-4 mt-7">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
}
