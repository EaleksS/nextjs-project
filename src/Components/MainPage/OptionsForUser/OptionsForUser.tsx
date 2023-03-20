import styles from './OptionsForUser.module.scss';
import arrow from '../../../Assets/images/whitearrow.png';
import Image from 'next/image';
import whitedoor from '../../../Assets/images/go out/whitedoor.png';
import whitearrow from '../../../Assets/images/go out/whitearrow.png';
import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuthStore } from '@/store/store';

type Props = {
  menu: boolean;
};

const OptionsForUser = (props: Props) => {
  const menu = props.menu;

  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles.navbar_container}`}
      >
        <div className={styles.top_container}>
          <div>
            <p>
              {/* <Text id={'aboutme'} /> */}
              {isLang === 'ru' ? 'О себе' : 'About me'}
            </p>
            <Image src={arrow} alt="" />
          </div>
          <div>
            <p>
              {isLang === 'ru' ? 'Геолокация' : 'Geolocation'}
              {/* <Text id={'geolocation'} /> */}
            </p>
            <Image src={arrow} alt="" />
          </div>
          <div>
            <p>
              {isLang === 'ru' ? 'Календарь' : 'Calendar'}
              {/* <Text id={'calendar'} /> */}
            </p>
            <Image src={arrow} alt="" />
          </div>
          <div>
            <p>
              {isLang === 'ru' ? 'Консилиум' : 'Consultation'}
              {/* <Text id={'consultation'} /> */}
            </p>
            <Image src={arrow} alt="" />
          </div>
        </div>
        <div className={styles.middle_container}>
          <div>
            <p>
              {isLang === 'ru' ? 'Доступ и контоль' : 'Access and control'}
              {/* <Text id={'controlAndAccess'} /> */}
            </p>
            <Image src={arrow} alt="" />
          </div>
          <div>
            <p>
              {isLang === 'ru' ? 'Настройки' : 'Settings'}
              {/* <Text id={'settings'} /> */}
            </p>
            <Image src={arrow} alt="" />
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.arrow_container}>
            <p>
              {isLang === 'ru' ? 'Выход' : 'Exit'}
              {/* <Text id={'exit'} /> */}
            </p>
            <div className={styles.arrows}>
              <Image src={whitearrow} alt="" />
              <Image src={whitedoor} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OptionsForUser;
