import OptionsForUser from '@/Components/OptionsForUser/OptionsForUser';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from '../styles/Medic.module.scss';

const Medic = () => {
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('Контакты');

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div
          className={styles.profile_container}
          onClick={() => setMenu((res) => !res)}
        >
          <img
            src="http://localhost:7070/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.a750af2a.png&w=256&q=75"
            alt="logo"
          />
          <div className={styles.profile_name}>
            <p>Эрнест</p>
            <p>Алексеев</p>
          </div>
          {menu && <div className={styles.profile_menu}>s</div>}
        </div>
      </div>
      <div className={styles.main_container}>
        <OptionsForUser menu={menu} className={styles.menu} />
        <div className={styles.content}>
          <div className={styles.chat}>
            <label>
              <BsSearch className={styles.BsSearch} />
              <input type="text" placeholder="Поиск сообщений..." />
            </label>

            <div className={styles.nav}>
              <button
                className={activeNav === 'Контакты' ? styles.active_nav : ' '}
                onClick={() => setActiveNav('Контакты')}
              >
                Контакты
              </button>
              <button
                className={
                  activeNav === 'Специалисты' ? styles.active_nav : ' '
                }
                onClick={() => setActiveNav('Специалисты')}
              >
                Специалисты
              </button>
            </div>
          </div>
          <div className={styles.search}>
            <h1>Укажите профиль которому вы хотите отправить сообщение</h1>
            <label>
              <BsSearch className={styles.BsSearch} />
              <input type="text" placeholder="Поиск..." />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medic;
