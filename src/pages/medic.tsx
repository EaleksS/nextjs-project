import OptionsForUser from '@/Components/OptionsForUser/OptionsForUser';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from '../styles/Medic.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

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
            <p>Имя</p>
            <p>Фамилия</p>
          </div>
          {menu && <div className={styles.profile_menu}>.</div>}
        </div>
        <BsSearch className={styles.BsSearch} />
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
      <div className={styles.main_container_mobile}>
        <div className={styles.nav}>
          <button
            className={activeNav === 'Контакты' ? styles.active_nav : ' '}
            onClick={() => setActiveNav('Контакты')}
          >
            Контакты
          </button>
          <button
            className={activeNav === 'Специалисты' ? styles.active_nav : ' '}
            onClick={() => setActiveNav('Специалисты')}
          >
            Специалисты
          </button>
        </div>
        <div className={styles.contacts}>
          {activeNav === 'Контакты'
            ? [0, 0, 0].map((i, index) => (
                <div className={styles.contact} key={index}>
                  <img src="/profile.png" alt="logo" />
                  <div className={styles.info}>
                    <h3>Ангелина Лангуева</h3>
                    <div className={styles.truncate}>
                      <p className={styles.truncate_text}>
                        Я созванивались с ней и не один раз, она ведет себя
                      </p>
                    </div>
                  </div>
                  <div className={styles.notification}>2</div>
                </div>
              ))
            : [0, 0, 0, 0].map((i, index) => (
                <div className={styles.contact} key={index}>
                  <img src="/profile.png" alt="logo" />
                  <div className={styles.info}>
                    <h3>Ангелина Лангуева</h3>
                    <div className={styles.truncate}>
                      <p className={styles.truncate_text}>Не было сообщений</p>
                    </div>
                  </div>
                  <div className={styles.notification}></div>
                </div>
              ))}
        </div>
      </div>
      <AnimatePresence>
        {menu && (
          <div className={styles.burger_menu}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.content}
            >
              <img
                className={styles.img_user}
                src="/profile.png"
                alt="img user"
              />
              <div className={styles.top_container}>
                <div>
                  <p>О себе</p>
                  <MdKeyboardArrowRight />
                </div>
                <div>
                  <p>Геолокация</p>
                  <MdKeyboardArrowRight />
                </div>
                <div>
                  <p>Календарь</p>
                  <MdKeyboardArrowRight />
                </div>
                <div>
                  <p>Консилиум</p>
                  <MdKeyboardArrowRight />
                </div>
              </div>
              <div className={styles.middle_container}>
                <div>
                  <p>Доступ и контроль</p>
                  <MdKeyboardArrowRight />
                </div>
                <div>
                  <p>Настройки</p>
                  <MdKeyboardArrowRight />
                </div>
              </div>
              <div className={styles.bottom_container}>
                <div className={styles.arrow_container}>
                  <p>Выход</p>
                  <div className={styles.arrows}>
                    <FiLogOut />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.exit}
              onClick={() => setMenu((res) => !res)}
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Medic;
