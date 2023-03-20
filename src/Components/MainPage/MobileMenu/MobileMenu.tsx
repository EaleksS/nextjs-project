import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoEnterOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styles from './MobileMenu.module.scss';
import { useAuthStore } from '@/store/store';

type Props = {
  menu: boolean;
  setMenu: any;
};

const MobileMenu = (props: Props) => {
  const menu = props.menu;
  const setMenu = props.setMenu;
  const { getLogout, isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

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
        {/* <img className={styles.img_user} src="/profile.png" alt="img user" /> */}
        <img
          className={styles.img_user}
          src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          alt="img user"
        />
        {/* <img className={styles.img_user} src="/profile.png" alt="img user" /> */}
        <div className={styles.userAsses}>
          {isLang === 'ru' ? 'Пользователь' : 'user'}
        </div>
        <div className={styles.middle_container}>
          <div onClick={() => router.push('/profile')}>
            <p>
              {/* <Text id={'profile'} /> */}
              {isLang === 'ru' ? 'Профиль' : 'Profile'}
            </p>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={styles.top_container}>
          <div onClick={() => router.push('/questionnaire')}>
            <p>
              {isLang === 'ru' ? 'Анкета' : 'Questionnaire'}
              {/* <Text id={'questionnaire'} /> */}
            </p>
            <MdKeyboardArrowRight />
          </div>
          <div onClick={() => router.push('/geolocation')}>
            <p>
              {isLang === 'ru' ? 'Геолокация' : 'Geolocation'}
              {/* <Text id={'geolocation'} /> */}
            </p>
            <MdKeyboardArrowRight />
          </div>
          <div onClick={() => router.push('/entries')}>
            <p>
              {isLang === 'ru' ? 'Записи' : 'Note'}
              {/* <Text id={'note'} /> */}
            </p>
            <MdKeyboardArrowRight />
          </div>
          <div onClick={() => router.push('/medicine')}>
            <p>
              {isLang === 'ru' ? 'Медицина' : 'The medicine'}
              {/* <Text id={'medicine'}  */}
            </p>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={styles.middle_container}>
          <div onClick={() => router.push('/access')}>
            <p>
              {isLang === 'ru' ? 'Доступ' : 'Access'}
              {/* <Text id={'access'} /> */}
            </p>
            <MdKeyboardArrowRight />
          </div>
          <div onClick={() => router.push('/settings')}>
            <p>
              {isLang === 'ru' ? 'Настройки' : 'Settings'}
              {/* <Text id={'setting'} /> */}
            </p>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.arrow_container} onClick={() => getLogout()}>
            <p>
              {isLang === 'ru' ? 'Выход' : 'Exit'}
              {/* <Text id={'exit'} /> */}
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
  );
};

export default MobileMenu;
