import OptionsForUser from "@/Components/OptionsForUser/OptionsForUser";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "../styles/Message.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import NavBar from "@/Components/NavBar/NavBar";
import FooterMobile from "@/Components/FooterMobile/FooterMobile";
import MobileMenu from "@/Components/MobileMenu/MobileMenu";

const Message = () => {
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("Контакты");

  return (
    <div className={styles.container}>
      <NavBar menu={menu} setMenu={setMenu} />
      <div className={styles.main_container}>
        <OptionsForUser menu={menu} className={styles.menu} />
        <div className={styles.content}>
          <div className={styles.chat}>
            <label>
              <BsSearch className={styles.BsSearch} />
              <input type="text" placeholder="Поиск сообщений..." />
            </label>

            <div className={styles.nav}>
              <button
                className={activeNav === "Контакты" ? styles.active_nav : " "}
                onClick={() => setActiveNav("Контакты")}
              >
                Контакты
              </button>
              <button
                className={
                  activeNav === "Специалисты" ? styles.active_nav : " "
                }
                onClick={() => setActiveNav("Специалисты")}
              >
                Специалисты
              </button>
            </div>
          </div>
          <div className={styles.search}>
            <h1>Укажите профиль которому вы хотите отправить сообщение</h1>
            <label>
              <BsSearch className={styles.BsSearch} />
              <input type="text" placeholder="Поиск..." />
            </label>
          </div>
        </div>
      </div>
      <div className={styles.main_container_mobile}>
        <div className={styles.nav}>
          <button
            className={activeNav === "Контакты" ? styles.active_nav : " "}
            onClick={() => setActiveNav("Контакты")}
          >
            Контакты
          </button>
          <button
            className={activeNav === "Специалисты" ? styles.active_nav : " "}
            onClick={() => setActiveNav("Специалисты")}
          >
            Специалисты
          </button>
        </div>
        <div className={styles.contacts}>
          {activeNav === "Контакты"
            ? [0, 0, 0].map((i, index) => (
                <div className={styles.contact} key={index}>
                  <img src="/profile.png" alt="logo" />
                  <div className={styles.info}>
                    <h3>Ангелина Лангуева</h3>
                    <div className={styles.truncate}>
                      <p className={styles.truncate_text}>
                        Я созванивались с ней и не один раз, она ведет себя
                      </p>
                    </div>
                  </div>
                  <div className={styles.notification}>2</div>
                </div>
              ))
            : [0, 0, 0, 0].map((i, index) => (
                <div className={styles.contact} key={index}>
                  <img src="/profile.png" alt="logo" />
                  <div className={styles.info}>
                    <h3>Ангелина Лангуева</h3>
                    <div className={styles.truncate}>
                      <p className={styles.truncate_text}>Не было сообщений</p>
                    </div>
                  </div>
                  <div className={styles.notification}></div>
                </div>
              ))}
        </div>
        <FooterMobile />
      </div>
      {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
    </div>
  );
};

export default Message;
