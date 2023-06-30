import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({ index, name, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="p-10 rounded-3xl xs:w-[320px] w-full"
    style={{ backgroundColor: "#252F3E" }}
  >
    <div className="mt-1">
      {" "}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className={`mt-12 bg-secondary rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            What I have accomplished so far
          </p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.name}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");
