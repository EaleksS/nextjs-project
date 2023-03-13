import { AnimatePresence, motion } from "framer-motion";
import styles from "./SettingsProfile.module.scss";

type Props = {};

const SettingsProfile = (props: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.settings_container}
      >
        ad
      </motion.div>
      ;
    </AnimatePresence>
  );
};

export default SettingsProfile;
