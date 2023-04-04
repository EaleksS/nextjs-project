import styles from './Navigation.module.scss';
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
        className={activeNav === 'Messages' ? styles.active_nav : ' '}
        onClick={() => setActiveNav('Messages')}
      >
        {isLang === 'ru' ? 'Сообщение' : 'Messages'}
      </button>
      <button
        className={activeNav === 'Calls' ? styles.active_nav : ' '}
        onClick={() => setActiveNav('Calls')}
      >
        {isLang === 'ru' ? 'Звонки' : 'Calls'}
      </button>
    </div>
  );
};

export default Navigation;
