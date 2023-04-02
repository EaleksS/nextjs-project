import styles from './OptionsForUser.module.scss';
import arrow from '../../../Assets/images/whitearrow.png';
import Image from 'next/image';
import whitedoor from '../../../Assets/images/go out/whitedoor.png';
import whitearrow from '../../../Assets/images/go out/whitearrow.png';
import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuthStore } from '@/store/store';
import Link from 'next/link';

type Props = {};

const OptionsForUser = (props: Props) => {
  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');
  const [geolocation, setGeolocation] = useState(false);

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
          <div
            onClick={() => {
              setGeolocation(!geolocation);
            }}
          >
            <p>
              {isLang === 'ru' ? 'Геолокация' : 'Geolocation'}
              {/* <Text id={'geolocation'} /> */}
            </p>
            <Image src={arrow} alt="" />
            {geolocation && (
              <div className={styles.geolocation_cont_settings}>
                <div>
                  <div>
                    <Link href="/map" style={{ textDecoration: 'none' }}>
                      <p>Карта</p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
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
              {isLang === 'ru' ? 'Доступ и контроль' : 'Access and control'}
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
