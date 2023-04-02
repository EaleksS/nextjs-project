import ModalDots from '@/Components/CenterPage/ModalDots/ModalDots';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from './Center.module.scss';
import Sidebar from '@/Components/Sidebar/Sidebar';

const Center = () => {
  const [menu, setMenu] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isDots, setIsDots] = useState(false);

  return (
    <Layout title="Questionnaire">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div>Центр</div>
      </div>
      <div className={styles.mobile_container}>
        <HeaderMobile
          menu={menu}
          setMenu={setMenu}
          isDots={true}
          setIsDots={setIsDots}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>Центр</h1>
          <div className={styles.infoCenter}>
            <img
              src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
              alt="logo"
              width={100}
              height={100}
            />
            <div className={styles.info}>
              <p>Наблюдалось: 111</p>
              <p>Вылечилось: 111</p>
              <p>Изучено заболеваний: 111</p>
            </div>
          </div>
          <div className={styles.btn}>
            <button>Написать</button>
            <button>Записаться</button>
          </div>
          <div className={styles.infoGeo}>
            <p>Страна: Россия</p>
            <p>Город: Санкт-Петербург</p>
            <p>Часовой пояс: GSM (+7)</p>
            <p>Время работы: 09:00 - 15:00 </p>
            <p>Посмотреть на карте</p>
          </div>
          <div className={styles.specialists}>
            <h2>Специалисты:</h2>
            <div className={styles.items}>
              <div className={styles.item}>
                <img
                  src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                  alt="logo"
                  width={55}
                  height={55}
                />
                <p>Имя фамилия</p>
                <p>Специальность </p>
                <p>Наблюдалось: 1100 </p>
                <p>Вылечилось: 950</p>
              </div>
              <div className={styles.item}>
                <img
                  src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                  alt="logo"
                  width={55}
                  height={55}
                />
                <p>Имя фамилия</p>
                <p>Специальность </p>
                <p>Наблюдалось: 1100 </p>
                <p>Вылечилось: 950</p>
              </div>
              <div className={styles.item}>
                <img
                  src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                  alt="logo"
                  width={55}
                  height={55}
                />
                <p>Имя фамилия</p>
                <p>Специальность </p>
                <p>Наблюдалось: 1100 </p>
                <p>Вылечилось: 950</p>
              </div>
              <div className={styles.item}>
                <img
                  src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                  alt="logo"
                  width={55}
                  height={55}
                />
                <p>Имя фамилия</p>
                <p>Специальность </p>
                <p>Наблюдалось: 1100 </p>
                <p>Вылечилось: 950</p>
              </div>
            </div>
          </div>
          <div className={styles.treatment}>
            <h2>Методы лечения:</h2>
            <div className={styles.btnOnline}>
              <div>
                <button
                  className={isOnline ? styles.active : ''}
                  onClick={() => setIsOnline(true)}
                >
                  Онлайн
                </button>
                <button
                  className={!isOnline ? styles.active : ''}
                  onClick={() => setIsOnline(false)}
                >
                  Оффлайн
                </button>
              </div>
            </div>
            <h3>Название:</h3>
            <div className={styles.infoTreatment}>
              <img
                src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                alt="logo"
                width={70}
                height={70}
              />
              <div className={styles.info}>
                <p>Предоставляет: Сергей Сергеев / На выбор</p>
                <p>Наблюдалось: 1110 </p>
                <p>Вылечилось: 950</p>
              </div>
            </div>
            <div className={styles.opicanie}>
              <p>Предназначен: Ваше забол. и 12 видов</p>
              <p>Описание:</p>
              <p>Комментарии:</p>
              <p>Статистика:</p>
            </div>
            <div className={styles.btnPodr}>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
        <FooterMobile />
      </div>
      <AnimatePresence>
        {isDots && <ModalDots setIsDots={setIsDots} />}
      </AnimatePresence>
    </Layout>
  );
};

export default Center;
