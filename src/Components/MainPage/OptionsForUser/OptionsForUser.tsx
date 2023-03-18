import styles from "./OptionsForUser.module.scss";
import arrow from "../../../Assets/images/whitearrow.png";
import Image from "next/image";
import whitedoor from "../../../Assets/images/go out/whitedoor.png";
import whitearrow from "../../../Assets/images/go out/whitearrow.png";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { useCookies } from "react-cookie";
import { optionsForUserTranslate } from "@/locale/optionsForUserTranslate";

type Props = {
  menu: boolean;
};

const OptionsForUser = (props: Props) => {
  const menu = props.menu;
  const [cookies] = useCookies();
  return (
    <TranslationsProvider
      language={cookies.lang}
      locales={optionsForUserTranslate}
    >
      <AnimatePresence>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${styles.navbar_container}`}
        >
          <div className={styles.top_container}>
            <div>
              <p>
                <Text id={"aboutme"} />
              </p>
              <Image src={arrow} alt="" />
            </div>
            <div>
              <p>
                <Text id={"geolocation"} />
              </p>
              <Image src={arrow} alt="" />
            </div>
            <div>
              <p>
                <Text id={"calendar"} />
              </p>
              <Image src={arrow} alt="" />
            </div>
            <div>
              <p>
                <Text id={"consultation"} />
              </p>
              <Image src={arrow} alt="" />
            </div>
          </div>
          <div className={styles.middle_container}>
            <div>
              <p>
                <Text id={"controlAndAccess"} />
              </p>
              <Image src={arrow} alt="" />
            </div>
            <div>
              <p>
                <Text id={"settings"} />
              </p>
              <Image src={arrow} alt="" />
            </div>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.arrow_container}>
              <p>
                <Text id={"exit"} />
              </p>
              <div className={styles.arrows}>
                <Image src={whitearrow} alt="" />
                <Image src={whitedoor} alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </TranslationsProvider>
  );
};

export default OptionsForUser;
