import { BsSearch } from 'react-icons/bs';
import styles from './Content.module.scss';
import { useAuthStore } from '@/store/store';
import { useEffect, useState } from 'react';

type Props = {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
};

const ContentDesktop = (props: Props) => {
  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  const activeNav = props.activeNav;
  const setActiveNav = props.setActiveNav;

  return (
    <div className={styles.content}>
      <div className={styles.chat}>
        <label>
          <BsSearch className={styles.BsSearch} />
          <input
            type="text"
            placeholder={isLang === 'ru' ? 'Найти сообщение' : 'Find message'}
          />
        </label>

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
      </div>
      <div className={styles.search}>
        <h1>
          {isLang === 'ru'
            ? 'Укажите профиль которому вы хотите отправить сообщение'
            : 'Specify the profile you want to send the message to'}
          {/* <Text id={'choice'} /> */}
        </h1>
        <label>
          <BsSearch className={styles.BsSearch} />
          <input
            type="text"
            placeholder={isLang === 'ru' ? 'Поиск...' : 'Search...'}
          />
        </label>
      </div>
    </div>
  );
};

export default ContentDesktop;
