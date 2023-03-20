import { useAuthStore } from '@/store/store';
import React, { useEffect, useState } from 'react';
import styles from './SelectLang.module.scss';

const SelectLang = () => {
  const { isLang, setIsLang } = useAuthStore();
  const [lang, setlang] = useState('');

  useEffect(() => {
    setlang(isLang);
  }, [isLang]);

  return (
    <div className={styles.container}>
      <div>
        <span
          className={lang === 'ru' ? styles.active : ''}
          onClick={() => setIsLang('ru')}
        >
          RU
        </span>
        |
        <span
          className={lang === 'ru' ? '' : styles.active}
          onClick={() => setIsLang('en')}
        >
          EN
        </span>
      </div>
    </div>
  );
};

export default SelectLang;
