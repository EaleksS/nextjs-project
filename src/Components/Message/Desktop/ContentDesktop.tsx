import {
  BsArrowDownLeft,
  BsPinAngleFill,
  BsSearch,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import { ImArrowDownLeft2 } from 'react-icons/im';
import styles from './Content.module.scss';
import { useAuthStore } from '@/store/store';
import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoCall } from 'react-icons/io5';

interface IContentDesktop {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

const ContentDesktop: FC<IContentDesktop> = ({ activeNav, setActiveNav }) => {
  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  const [isSelectDots, setIsSelectDots] = useState(false);

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  return (
    <div className={styles.content} onClick={() => setIsSelectDots(false)}>
      <div className={styles.chat}>
        <div className={styles.circle}>
          <div></div>
        </div>
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
            className={activeNav === 'Messages' ? styles.active_nav : ' '}
            onClick={() => setActiveNav('Messages')}
          >
            {isLang === 'ru' ? 'Сообщения' : 'Messages'}
          </button>
          <button
            className={activeNav === 'Calls' ? styles.active_nav : ' '}
            onClick={() => setActiveNav('Calls')}
          >
            {isLang === 'ru' ? 'Звонки' : 'Calls'}
          </button>
        </div>
        {activeNav === 'Messages' && (
          <div className={styles.messages}>
            <div className={styles.message}>
              <img
                className={styles.img_user}
                src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                alt="img user"
              />
              <div className={styles.info}>
                <h3>Erik</h3>
                <div className={styles.truncate}>
                  <p className={styles.truncate_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className={styles.notification}>
                6{false && <BsPinAngleFill className={styles.BsPinAngleFill} />}
              </div>
              <div
                className={styles.dots}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSelectDots((prev) => !prev);
                }}
              >
                <BsThreeDotsVertical />
              </div>
              <AnimatePresence>
                {isSelectDots && (
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0, y: -40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: -40 }}
                    transition={{ duration: 0.25 }}
                    className={styles.isSelectDots}
                  >
                    <p>Закрепить</p>
                    <p>Удалить</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {activeNav === 'Calls' && (
          <div className={styles.calls}>
            <div className={styles.call}>
              <img
                className={styles.img_user}
                src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                alt="img user"
              />
              <div className={styles.info}>
                <h3>Erik</h3>
                <p>
                  <ImArrowDownLeft2
                    className={`${styles.icon} ${styles.success}`}
                  />
                  30 марта, 18:20
                </p>
              </div>
              <div className={styles.call_icon}>
                <IoCall />
              </div>
            </div>
            <div className={styles.call}>
              <img
                className={styles.img_user}
                src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                alt="img user"
              />
              <div className={styles.info}>
                <h3>Erik</h3>
                <p>
                  <ImArrowDownLeft2 className={`${styles.icon}`} />
                  30 марта, 18:20
                </p>
              </div>
              <div className={styles.call_icon}>
                <IoCall />
              </div>
            </div>
          </div>
        )}
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
