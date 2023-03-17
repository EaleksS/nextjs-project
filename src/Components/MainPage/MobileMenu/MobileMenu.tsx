import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoEnterOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./MobileMenu.module.scss";
import { useCookies } from "react-cookie";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { mobileMenuTranslate } from "@/locale/mobileMenuTranslate";

type Props = {
  menu: boolean;
  setMenu: any;
};

const MobileMenu = (props: Props) => {
  const menu = props.menu;
  const setMenu = props.setMenu;
  const [cookies] = useCookies();

  const router = useRouter();

  return (
    <TranslationsProvider language={cookies.lang} locales={mobileMenuTranslate}>
      <div className={styles.burger_menu}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <img className={styles.img_user} src="/profile.png" alt="img user" />
          <div className={styles.middle_container}>
            <div onClick={() => router.push("/profile")}>
              <p>
                <Text id={"profile"} />
              </p>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className={styles.top_container}>
            <div onClick={() => router.push("/questionnaire")}>
              <p>
                <Text id={"questionnaire"} />
              </p>
              <MdKeyboardArrowRight />
            </div>
            <div onClick={() => router.push("/geolocation")}>
              <p>
                <Text id={"geolocation"} />
              </p>
              <MdKeyboardArrowRight />
            </div>
            <div onClick={() => router.push("/entries")}>
              <p>
                <Text id={"note"} />
              </p>
              <MdKeyboardArrowRight />
            </div>
            <div onClick={() => router.push("/medicine")}>
              <p>
                <Text id={"medicine"} />
              </p>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className={styles.middle_container}>
            <div onClick={() => router.push("/access")}>
              <p>
                <Text id={"access"} />
              </p>
              <MdKeyboardArrowRight />
            </div>
            <div onClick={() => router.push("/settings")}>
              <p>
                <Text id={"setting"} />
              </p>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.arrow_container} onClick={() => ""}>
              <p>
                <Text id={"exit"} />
              </p>
              <div className={styles.arrows}>
                <IoEnterOutline />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.exit}
          onClick={() => setMenu(!menu)}
        ></motion.div>
      </div>
    </TranslationsProvider>
  );
};

export default MobileMenu;
