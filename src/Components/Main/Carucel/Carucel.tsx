import React, { useEffect, useState } from 'react';
import styles from './Carucel.module.scss';
import rightArrow from '../../../Assets/images/rightArrow.png';
import leftArrow from '../../../Assets/images/leftArrow.png';
import Image from 'next/image';
import { useAuthStore } from '@/store/store';

const Carucel = () => {
  const [moving, setMoving] = useState(0);
  const { isLang: lang } = useAuthStore();

  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  return (
    <div className={styles.container}>
      <div className={styles.arrow_cont}>
        <div
          className={styles.arrows_left}
          onClick={() => {
            if (moving < 37) {
              setMoving(moving + 37 * 2);
            }
          }}
        >
          <Image src={leftArrow} alt="arrow" />
        </div>
        <div
          className={styles.arrows_right}
          onClick={() => {
            if (moving > -37) {
              setMoving(moving - 37);
            }
          }}
        >
          <Image src={rightArrow} alt="arrow" />
        </div>
      </div>
      <div
        style={{ transform: `translateX(${moving}px)` }}
        className={styles.content_container}
      >
        <div className={styles.content}>1</div>
        <div className={styles.content}>
          {/* <Text id={'innovations'} /> */}
          {isLang === 'ru' ? 'Инновации' : 'innovations'}
        </div>
        <div className={styles.content}>
          {isLang === 'ru' ? 'Новости' : 'News'}
          {/* <Text id={'news'} /> */}
        </div>
        <div className={styles.content}>
          {/* <Text id={'store'} /> */}
          {isLang === 'ru' ? 'Магазин' : 'Store'}
        </div>
        <div className={styles.content}>
          {/* <Text id={'group'} /> */}
          {isLang === 'ru' ? 'Группы' : 'Group'}
        </div>
        <div className={styles.content}>
          {/* <Text id={'fo'} /> */}
          {isLang === 'ru' ? 'фо' : 'fo'}
        </div>
      </div>
    </div>
  );
};

export default Carucel;
