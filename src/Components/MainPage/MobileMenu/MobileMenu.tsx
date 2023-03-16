import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoEnterOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styles from './MobileMenu.module.scss';

type Props = {
  menu: boolean;
  setMenu: any;
};

const MobileMenu = (props: Props) => {
  const menu = props.menu;
  const setMenu = props.setMenu;

  const router = useRouter();

  return (
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
          <div onClick={() => router.push('/profile')}>
            <p>Профиль</p>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={styles.top_container}>
          <div onClick={() => router.push('/questionnaire')}>
            <p>Анкета</p>
            <MdKeyboardArrowRight />
          </div>
          <div onClick={() => router.push('/geolocation')}>
            <p>Геолокация</p>
            <MdKeyboardArrowRight />
          </div>
          <div onClick={() => router.push('/entries')}>
            <p>Записи</p>
            <MdKeyboardArrowRight />
          </div>
          <div onClick={() => router.push('/medicine')}>
            <p>Медицина</p>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={styles.middle_container}>
          <div onClick={() => router.push('/access')}>
            <p>Доступ</p>
            <MdKeyboardArrowRight />
          </div>
          <div onClick={() => router.push('/settings')}>
            <p>Настройки</p>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.arrow_container} onClick={() => ''}>
            <p>Выход</p>
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
  );
};

export default MobileMenu;
