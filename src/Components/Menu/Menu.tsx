import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { IoEnterOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styles from './Menu.module.scss';
import { useAuthStore } from '@/store/store';
import img_logo from '../../Assets/images/user-139.svg';
import Image from 'next/image';

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
        {isImage === null ? (
          <Image className={styles.img_user} src={img_logo} alt="img user" />
        ) : (
          <img className={styles.img_user} src={isImage} alt="logo" />
        )}
        {userInfo.role === 'Nurse' ? (
          <>
            <div
              className={styles.userAsses}
              onClick={() => router.push('/profile')}
              style={
                router.asPath === '/profile'
                  ? { background: 'rgba(255, 255, 255, 0.15)' }
                  : {}
              }
            >
              {isLang === 'ru' ? 'О центре/О себе' : 'user'}
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
                <p>{isLang === 'ru' ? 'Календарь' : 'Note'}</p>
                <MdKeyboardArrowRight className={styles.icon} />
              </div>
              <div
                onClick={() => router.push('/map')}
                style={
                  router.asPath === '/map'
                    ? { background: 'rgba(255, 255, 255, 0.15)' }
                    : {}
                }
              >
                <p>{isLang === 'ru' ? 'Отчет' : 'Geolocation'}</p>
                <MdKeyboardArrowRight className={styles.icon} />
              </div>

              <div
                onClick={() => router.push('/questionnaire')}
                style={
                  router.asPath === '/questionnaire'
                    ? { background: 'rgba(255, 255, 255, 0.15)' }
                    : {}
                }
              >
                <p>
                  {isLang === 'ru' ? 'Статистика (показатели)' : 'The medicine'}
                </p>
                <MdKeyboardArrowRight className={styles.icon} />
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.middle_container}>
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
              <div
                className={styles.arrow_container}
                onClick={() => getLogout()}
              >
                <p>{isLang === 'ru' ? 'Выход' : 'Exit'}</p>
                <div className={styles.arrows}>
                  <IoEnterOutline className={styles.icon} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
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
                onClick={() => router.push('/questionnaire')}
                style={
                  router.asPath === '/questionnaire'
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
              <div
                className={styles.arrow_container}
                onClick={() => getLogout()}
              >
                <p>{isLang === 'ru' ? 'Выход' : 'Exit'}</p>
                <div className={styles.arrows}>
                  <IoEnterOutline className={styles.icon} />
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
      <motion.div
        className={styles.exit}
        onClick={() => setMenu(false)}
      ></motion.div>
    </div>
  );
};

export default Menu;
