import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./MobileMenu.module.scss";

type Props = {
  menu: boolean;
  setMenu: any;
};

const MobileMenu = (props: Props) => {
  const menu = props.menu;
  const setMenu = props.setMenu;
  return (
    <AnimatePresence>
      <div className={styles.burger_menu}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <img className={styles.img_user} src="/profile.png" alt="img user" />
          <div className={styles.top_container}>
            <div>
              <p>О себе</p>
              <MdKeyboardArrowRight />
            </div>
            <div>
              <p>Геолокация</p>
              <MdKeyboardArrowRight />
            </div>
            <div>
              <p>Календарь</p>
              <MdKeyboardArrowRight />
            </div>
            <div>
              <p>Консилиум</p>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className={styles.middle_container}>
            <div>
              <p>Доступ и контроль</p>
              <MdKeyboardArrowRight />
            </div>
            <div>
              <p>Настройки</p>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.arrow_container}>
              <p>Выход</p>
              <div className={styles.arrows}>
                <FiLogOut />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.exit}
          onClick={() => setMenu(!menu)}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MobileMenu;
