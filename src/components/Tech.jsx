import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { programmingLanguages, frameworks, developerTools } from "../constants";

import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Skills</p>
        <h2 className={styles.sectionHeadText}>Programming Languages.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="container mt-20"
      >
        <div className="gallery">
          {programmingLanguages.map((programmingLanguage) => (
            <div className={`w-fit h-fit`} key={programmingLanguage.name}>
              <div className="w-full h-full bg-secondary flex relative justify-center items-center">
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                >
                  <img
                    src={programmingLanguage.icon}
                    alt={programmingLanguage.name}
                    className="bg-secondary w-20 h-20"
                  />
                </Tilt>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={styles.sectionHeadText}>Frameworks.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "spring", 0.5, 0.75)}
        className="container mt-20"
      >
        <div className="gallery">
          {frameworks.map((framework) => (
            <div className={`w-fit h-fit`} key={framework.name}>
              <div className="w-full h-full bg-secondary flex relative justify-center items-center">
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                >
                  <img
                    src={framework.icon}
                    alt={framework.name}
                    className="bg-secondary w-20 h-20"
                  />
                </Tilt>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={styles.sectionHeadText}>Developer Tools.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="container mt-20"
      >
        <div className="gallery">
          {developerTools.map((developerTool) => (
            <div className={`w-fit h-fit`} key={developerTool.name}>
              <div className="w-full h-full bg-secondary flex relative justify-center items-center">
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                >
                  <img
                    src={developerTool.icon}
                    alt={developerTool.name}
                    className="bg-secondary w-20 h-20"
                  />
                </Tilt>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
