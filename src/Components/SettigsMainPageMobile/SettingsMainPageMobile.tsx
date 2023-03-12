import { AnimatePresence, motion } from "framer-motion";
import styles from "./SettingsMainPageMobile.module.scss";

type Props = {
  settings: boolean;
  setSettings: any;
};

const SettingsMainPageMobile = (props: Props) => {
  const settings = props.settings;
  const setSettings = props.setSettings;
  return (
    <AnimatePresence>
      <div className={styles.settings_container}>
        <motion.div
          className={styles.exit}
          onClick={() => {
            setSettings(!settings);
          }}
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.main_container}
        >
          CONTENT
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SettingsMainPageMobile;
