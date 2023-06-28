import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: `${education.cardBg}`, color: "#fff" }}
      contentArrowStyle={{ borderRight: `7px solid ${education.cardBg}` }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.school_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {education.school_name}
        </h3>
        <p
          className="text-tertiary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.degree} {education.major}
        </p>
        {/* <p
          className="text-quaternary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.major}
        </p> */}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.awards.map((award, idx) => (
          <li
            key={`experience-point-${idx}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {award}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I earn so far</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={`experience-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "");
