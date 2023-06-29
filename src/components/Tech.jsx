import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { programmingLanguages, frameworks, developerTools } from "../constants";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const TechIcon = ({ idx, name, icon }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl w-fit"
    >
      <div className="relative w-[100px] h-[100px] flex justify-center items-center">
        <img src={icon} alt={name} className="object-cover" />
      </div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Skills</p>
        <h2 className={styles.sectionHeadText}>Programming Languages.</h2>
      </motion.div>

      <div className="gallery">
        {programmingLanguages.map((programmingLanguage, idx) => (
          <div
            className={`w-fit h-fit bg-black-100 flex relative justify-center items-center ${
              idx < 6 ? "first-row" : "second-row"
            }`}
            key={programmingLanguage.name}
          >
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
                className="bg-black-100 w-20 h-20"
              />
            </Tilt>
          </div>
          // <div className="w-28 h-28" key={programmingLanguage.name}>
          //   <TechIcon
          //     idx={idx}
          //     name={programmingLanguage.name}
          //     icon={programmingLanguage.icon}
          //   />
          // </div>
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={styles.sectionHeadText}>Frameworks.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {frameworks.map((framework, idx) => (
          <div className="w-28 h-28" key={framework.name}>
            <TechIcon idx={idx} name={framework.name} icon={framework.icon} />
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={styles.sectionHeadText}>Developer Tools.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {developerTools.map((developerTool, idx) => (
          <div className="w-28 h-28" key={developerTool.name}>
            <TechIcon
              idx={idx}
              name={developerTool.name}
              icon={developerTool.icon}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
