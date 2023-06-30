import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-1/2 h-screen ml-40">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-tertiary" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#428675]">
              <TypeWriter
                options={{
                  strings: [
                    "Wenjie Wang",
                    "a Software Engineer",
                    "a Web Developer",
                    "a Data Scienctist",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div className="w-full">
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 flex w-full items-center`}
            >
              "Being the richest man in the cemetery doesn't matter to me. Going
              to bed at night saying we've done something wonderful…that's what
              matters to me."
            </p>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 flex w-full flex-row-reverse`}
            >
              - Steve Jobs
            </p>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
