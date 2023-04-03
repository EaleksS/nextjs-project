import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { IoEnterOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styles from './Menu.module.scss';
import { useAuthStore } from '@/store/store';

interface IMobileMenu {
  setMenu: (bool: boolean) => void;
}

const Menu: FC<IMobileMenu> = ({ setMenu }) => {
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
          style={
            router.asPath === '/profile'
              ? { background: 'rgba(255, 255, 255, 0.15)' }
              : {}
          }
        >
          {isLang === 'ru' ? 'Аккаунт' : 'user'}
          <MdKeyboardArrowRight className={styles.icon} />
        </div>
        <div className={styles.line}></div>
        <div
          className={styles.top_container}
          style={userInfo?.role ? { opacity: '1' } : { opacity: '.7' }}
        >
          <div
            onClick={() => router.push('/entries')}
            style={
              router.asPath === '/entries'
                ? { background: 'rgba(255, 255, 255, 0.15)' }
                : {}
            }
          >
            <p>{isLang === 'ru' ? 'Записи' : 'Note'}</p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>
          {/* <div onClick={() => router.push('/questionnaire')}>
            <p>
              {isLang === 'ru' ? 'Анкета' : 'Questionnaire'}
            </p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div> */}
          <div
            onClick={() => router.push('/map')}
            style={
              router.asPath === '/map'
                ? { background: 'rgba(255, 255, 255, 0.15)' }
                : {}
            }
          >
            <p>{isLang === 'ru' ? 'Местоположение' : 'Geolocation'}</p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>

          <div
            onClick={() => router.push('/medicine')}
            style={
              router.asPath === '/medicine'
                ? { background: 'rgba(255, 255, 255, 0.15)' }
                : {}
            }
          >
            <p>{isLang === 'ru' ? 'Медицинская карта' : 'The medicine'}</p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.middle_container}>
          <div
            onClick={() => router.push('/access')}
            style={
              router.asPath === '/access'
                ? { background: 'rgba(255, 255, 255, 0.15)' }
                : {}
            }
          >
            <p>{isLang === 'ru' ? 'Доступ' : 'Access'}</p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>
          <div
            onClick={() => router.push('/settings')}
            style={
              router.asPath === '/settings'
                ? { background: 'rgba(255, 255, 255, 0.15)' }
                : {}
            }
          >
            <p>{isLang === 'ru' ? 'Настройки' : 'Settings'}</p>
            <MdKeyboardArrowRight className={styles.icon} />
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.arrow_container} onClick={() => getLogout()}>
            <p>{isLang === 'ru' ? 'Выход' : 'Exit'}</p>
            <div className={styles.arrows}>
              <IoEnterOutline className={styles.icon} />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={styles.exit}
        onClick={() => setMenu(false)}
      ></motion.div>
    </div>
  );
};

export default Menu;
