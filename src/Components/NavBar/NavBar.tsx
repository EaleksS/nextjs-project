import Image from "next/image";
import styles from "./NavBar.module.scss";
import profileImg from "../../Assets/images/profile.png";
import home from "../../Assets/images/home.png";
import find from "../../Assets/images/find.png";
import message from "../../Assets/images/message.png";
import arrow from "../../Assets/images/go out/arrow.png";
import door from "../../Assets/images/go out/door.png";
import translateImg from "../../Assets/images/translate.png";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/store";

type Props = {
  menu: boolean;
  setMenu: any;
  setHiddenNavBar: React.Dispatch<React.SetStateAction<boolean>>;
  hiddenNavBar: boolean;
};

const NavBar = (props: Props) => {
  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState("");

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  const setHiddenNavBar = props.setHiddenNavBar;
  const hiddenNavBar = props.hiddenNavBar;
  const setMenu = props.setMenu;
  const menu = props.menu;

  return (
    <>
      <div className={styles.mobile_nav}>
        <div className={styles.mobile_profile_container}>
          <Image src={profileImg} alt="" />
          <div className={styles.mobile_profile_name}>
            <p>Имя</p>
          </div>
        </div>
      </div>
      <div
        className={styles.navbar_container}
        onMouseEnter={() => {
          setMenu(true);
        }}
      >
        <div className={styles.translate_container}>
          <Image
            src={translateImg}
            alt=""
            style={{ width: "35px", height: "35px" }}
          />
        </div>
        <div
          className={styles.profile_container}
          onClick={() => {
            setHiddenNavBar(!hiddenNavBar);
          }}
        >
          {menu && (
            <AnimatePresence>
              <motion.div
                animate={{
                  transition: { delay: 0.4, duration: 0.3 },
                  opacity: 1,
                }}
                className={styles.line}
              />
            </AnimatePresence>
          )}
          <Image
            src={profileImg}
            alt=""
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div className={styles.navigation_container}>
          <div className={styles.nav_container}>
            <Image src={home} alt="" className={styles.home_img} />
            <Image src={message} alt="" className={styles.message_img} />
            <Image src={find} alt="" className={styles.find_img} />
          </div>
          <div className={styles.exit_container}>
            <div className={styles.exit_img}>
              <Image src={arrow} alt="" />
              <Image src={door} alt="" />
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <AnimatePresence>
          <motion.div
            animate={{
              transition: { duration: 0.4 },
              width: "10%",
            }}
            className={styles.navbar_infos_container}
          >
            <motion.div
              animate={{
                transition: { delay: 0.5, duration: 0.3 },
                opacity: 1,
              }}
              className={styles.translate_cont}
              // onClick={translateHandle}
            ></motion.div>
            <motion.div
              animate={{
                transition: { delay: 0.4, duration: 0.3 },
                opacity: 1,
              }}
              className={styles.profile_cont}
              onClick={() => {
                setHiddenNavBar(!hiddenNavBar);
              }}
            >
              <p>Имя</p>
            </motion.div>
            <motion.div
              animate={{
                transition: { delay: 0.5, duration: 0.24 },
                opacity: 1,
              }}
              className={styles.nav_cont}
            >
              <Link href="/" style={{ textDecoration: "none" }}>
                <div className={styles.home}>
                  {/* <Text id={'home'} /> */}
                  {isLang === "ru" ? "Главная" : "Home"}
                </div>
              </Link>
              <Link href="/message" style={{ textDecoration: "none" }}>
                <div className={styles.message}>
                  {isLang === "ru" ? "Сообщения" : "Messages"}
                  {/* <Text id={'message'} /> */}
                </div>
              </Link>
              <div className={styles.find}>
                {isLang === "ru" ? "Поиск" : "Find"}
                {/* <Text id={'findLoop'} /> */}
              </div>
            </motion.div>
            <motion.div
              animate={{
                transition: { delay: 0.5, duration: 0.3 },
                opacity: 1,
              }}
              className={styles.exit_cont}
            >
              {isLang === "ru" ? "Выход" : "Exit"}
              {/* <Text id={'go_out'} /> */}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
      <div
        onMouseEnter={() => {
          setMenu(false);
          setHiddenNavBar(false);
        }}
        className={styles.closeAndExtraCAll_cont}
        style={{
          width: "85%",
          height: "100vh",
          position: "absolute",
          marginLeft: "15%",
        }}
      >
        <Link href="/call">
          <div className={styles.extracall} />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
