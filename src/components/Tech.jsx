import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { programmingLanguages, frameworks, developerTools } from "../constants";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Skills</p>
        <h2 className={styles.sectionHeadText}>Programming Languages.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {programmingLanguages.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={styles.sectionHeadText}>Frameworks.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {frameworks.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={styles.sectionHeadText}>Developer Tools.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {developerTools.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
