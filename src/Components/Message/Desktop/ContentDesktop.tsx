import { BsSearch } from 'react-icons/bs';
import styles from './Content.module.scss';
import { useAuthStore } from '@/store/store';
import { FC, useEffect, useState } from 'react';

interface IContentDesktop {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

const ContentDesktop: FC<IContentDesktop> = ({ activeNav, setActiveNav }) => {
  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  return (
    <div className={styles.content}>
      <div className={styles.chat}>
        <div
          className={styles.search_message}
          style={{ borderTopLeftRadius: '20px' }}
        >
          <label>
            <BsSearch className={styles.BsSearch} />
            <input
              type="text"
              placeholder={isLang === 'ru' ? 'Найти сообщение' : 'Find message'}
            />
          </label>
        </div>

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
        <div
          className={styles.search_message}
          style={{
            borderTopRightRadius: '20px',
            borderBottomLeftRadius: '20px',
          }}
        >
          <h1>
            {isLang === 'ru'
              ? 'Введите профиль '
              : 'Specify the profile you want to send the message to'}
            {/* <Text id={'choice'} /> */}
          </h1>
          <label>
            <BsSearch className={styles.BsSearch} />
            <input
              type="text"
              placeholder={isLang === 'ru' ? 'Найти сообщение' : 'Find message'}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContentDesktop;
