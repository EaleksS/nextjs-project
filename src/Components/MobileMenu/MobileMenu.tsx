import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoEnterOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styles from './MobileMenu.module.scss';
import { useAuthStore } from '@/store/store';
import { userInfo } from 'os';

type Props = {
  menu: boolean;
  setMenu: any;
};

const MobileMenu = (props: Props) => {
  const menu = props.menu;
  const setMenu = props.setMenu;
  const { getLogout, isLang: lang, isImage, userInfo } = useAuthStore();
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
        {isImage === null ? (
          <img
            className={styles.img_user}
            src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
            alt="img user"
          />
        ) : (
          <img className={styles.img_user} src={isImage} alt="logo" />
        )}

        {/* <img className={styles.img_user} src="/profile.png" alt="img user" /> */}
        <div
          className={styles.userAsses}
          onClick={() => router.push('/profile')}
        >
          {isLang === 'ru' ? 'Аккаунт' : 'user'}
          <MdKeyboardArrowRight className={styles.icon} />
        </div>
        <div className={styles.line}></div>
        <div
          className={styles.top_container}
          style={userInfo?.role ? { opacity: '1' } : { opacity: '.7' }}
        >
          <div onClick={() => router.push('/entries')}>
            <p>
              {isLang === 'ru' ? 'Записи' : 'Note'}
            </p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>
          {/* <div onClick={() => router.push('/questionnaire')}>
            <p>
              {isLang === 'ru' ? 'Анкета' : 'Questionnaire'}
            </p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div> */}
          <div onClick={() => router.push('/map')}>
            <p>
              {isLang === 'ru' ? 'Местоположение' : 'Geolocation'}
            </p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>

          <div onClick={() => router.push('/medicine')}>
            <p>
              {isLang === 'ru' ? 'Медицинская карта' : 'The medicine'}
            </p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.middle_container}>
          <div onClick={() => router.push('/access')}>
            <p>
              {isLang === 'ru' ? 'Доступ' : 'Access'}
            </p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>
          <div onClick={() => router.push('/settings')}>
            <p>
              {isLang === 'ru' ? 'Настройки' : 'Settings'}
            </p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.arrow_container} onClick={() => getLogout()}>
            <p>
              {isLang === 'ru' ? 'Выход' : 'Exit'}
            </p>
            <div className={styles.arrows}>
              <IoEnterOutline className={styles.icon} />
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
