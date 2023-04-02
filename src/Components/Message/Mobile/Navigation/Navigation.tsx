
import styles from "./Navigation.module.scss";
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/store';

type Props = {
  activeNav: string;
  setActiveNav: any;
};

const Navigation = (props: Props) => {
  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  const activeNav = props.activeNav;
  const setActiveNav = props.setActiveNav;

  return (
    <div className={styles.nav}>
      <button
        className={activeNav === 'Контакты' ? styles.active_nav : ' '}
        onClick={() => setActiveNav('Контакты')}
      >
        {/* <Text id={'contact'} /> */}
        {isLang === 'ru' ? 'Контакты' : 'Contacts'}
      </button>
      <button
        className={activeNav === 'Специалисты' ? styles.active_nav : ' '}
        onClick={() => setActiveNav('Специалисты')}
      >
        {isLang === 'ru' ? 'Специалисты' : 'Specialists'}
        {/* <Text id={'specialists'} /> */}
      </button>
    </div>
  );
};

export default Navigation;
