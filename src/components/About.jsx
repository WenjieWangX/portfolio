import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ idx, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * idx, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <div className="bg-gray-100 rounded-full w-20 h-20 flex justify-center items-center">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          </div>
          <h4 className="text-white text-[20px] font-bold text-center">
            {title}
          </h4>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I recently graduated from Connecticut College with dual majors in
        Computer Science and Statistics & Data Science. I am also thrilled to
        announce that I have been accepted as an incoming student at Cornell
        Tech for the Master of Engineering in Computer Science program. With a
        strong foundation in these disciplines, I possess the skills of a
        proficient software developer. My experience encompasses a diverse range
        of programming languages and technologies, including Python, Java,
        React, AWS, TypeScript, and more. I am excited to showcase my portfolio,
        which highlights my expertise and passion for creating innovative
        solutions through code.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} index={idx} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
