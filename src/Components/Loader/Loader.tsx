import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Loader.module.scss";
import doctors from "../../Assets/images/doctors.png";

const Loader = () => {
  return (
    <motion.div
      animate={{
        transition: { delay: 5 },
        display: "none",
      }}
    >
      <motion.div
        className={styles.loader_container}
        animate={{
          transition: { delay: 2, duration: 0.5 },
          y: "-100vh",
        }}
      >
        <div className={styles.container}>
          <Image src={doctors} alt="doctors" />
          <div className={styles.loader}>
            <motion.div
              className={styles.load}
              animate={{
                transition: { duration: 1.5 },
                width: "55.3%",
              }}
            />
            <p className={styles.text}>0%</p>
            <p className={styles.text}>100%</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
