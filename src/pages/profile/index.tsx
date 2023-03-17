import FooterMobile from "@/Components/FooterMobile/FooterMobile";
import HeaderMobile from "@/Components/MainPage/HeaderMobile/HeaderMobile";
import MobileMenu from "@/Components/MainPage/MobileMenu/MobileMenu";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styles from "../../styles/Profile.module.scss";
import Layout from "../Layout";

const Profile = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Layout title="Profile">
      <div className={styles.mobile_version}>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        <div className={styles.content}>
          <div className={styles.user_info}>
            <img src="/profile2.png" alt="info" />
            <p>Пацинет</p>
          </div>
          <form>
            <input type="text" placeholder="Ваш логин" />
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Эл. почта" />
            <input type="text" placeholder="Номер Телефона" />
            <input type="text" placeholder="Инт. заболевание" />
            <input type="text" placeholder="Страна" />
            <input type="text" placeholder="Город" />
            <input
              type="text"
              placeholder="Моя семья и те люди кто к ней относится"
            />
          </form>
        </div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Profile;
