import React, { FC, useState } from 'react';
import styles from './Mobile.module.scss';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import { AnimatePresence, motion } from 'framer-motion';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { HiArrowLongDown, HiArrowLongUp } from 'react-icons/hi2';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import hospital_logo from '../../../Assets/images/hospital.png';
import Image from 'next/image';
import img_logo from '../../../Assets/images/user-139.svg';

interface IMobile {
  menu: boolean;
  setMenu: (bool: boolean) => void;
}

const Mobile: FC<IMobile> = ({ menu, setMenu }) => {
  const [isOnline, setIsOnline] = useState(true);
  const [isDots, setIsDots] = useState(false);

  return (
    <div className={styles.mobile_container} onClick={() => setIsDots(false)}>
      <HeaderMobile
        menu={menu}
        setMenu={setMenu}
        isDots={true}
        setIsDots={setIsDots}
      />
      <AnimatePresence>
        {isDots && (
          <motion.div
            className={styles.dots_modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0, y: -150, x: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0, y: -150, x: 100 }}
            transition={{ duration: 0.25 }}
          >
            <p style={{ borderBottom: '1px solid #fff', fontSize: '18px' }}>
              Сменить ведущий центр
            </p>
            <p>Подписаться</p>
            <p>Посмотреть на карте</p>
            <p style={{ borderBottom: '1px solid #fff' }}>Рассчитать пользу</p>
            <p>Пожаловаться</p>
            <p>Заблокировать</p>
            <p>Cкопировать ссылку</p>
            <p>Поделиться этим профилем</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.content}>
        <div className={styles.stars}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <h1 className={styles.title}>Центр (ведущий центр)</h1>
        <div className={styles.infoCenter}>
          <Image src={hospital_logo} alt="logo" width={100} height={100} />
          <div className={styles.info}>
            <table>
              <tbody>
                <tr>
                  <td style={{ paddingRight: '20px' }}>Всего наблюдалось:</td>
                  <td>111</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: '20px' }}>Изучено заболеваний:</td>
                  <td>111</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: '20px' }}>Все методы лечения:</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: '20px' }}>Все публикации:</td>
                  <td>13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.btn}>
          <Button>Написать</Button>
          {/* <Button>Записаться</Button> */}
        </div>
        <div className={styles.infoGeo}>
          <table>
            <tbody>
              <tr>
                <td style={{ paddingRight: '20px' }}>Страна:</td>
                <td>Россия</td>
              </tr>
              <tr>
                <td style={{ paddingRight: '20px' }}>Город:</td>
                <td>Санкт-Петербург</td>
              </tr>
              <tr>
                <td style={{ paddingRight: '20px' }}>Часовой пояс:</td>
                <td>GSM (+7)</td>
              </tr>
              <tr>
                <td style={{ paddingRight: '20px' }}>Время работы:</td>
                <td>09:00 - 15:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.specialists}>
          <h2>Специалисты:</h2>
          <div className={styles.items}>
            {[1, 2, 3].map((e) => (
              <div className={styles.item} key={e + 100}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    className={styles.imgImage}
                    src={img_logo}
                    alt="logo"
                  />
                  <div className={styles.likes}>
                    <HiArrowLongUp
                      style={{ fontSize: '30px', color: 'green' }}
                    />
                    <p
                      style={{
                        margin: '-20px',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      +20
                    </p>
                    <HiArrowLongDown
                      style={{ fontSize: '30px', color: 'red' }}
                    />
                    <p
                      style={{
                        margin: '-20px',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      -10
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    background: '#fff',
                    marginLeft: '50px',
                    display: 'flex',
                    borderRadius: '5px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <p style={{ fontSize: '13px' }}>
                      Имя Фамилия: <br /> <b>Алексеев Эрнест</b>
                    </p>
                    <p style={{ fontSize: '13px' }}>
                      Специальность: <br /> <b>Психолог</b>
                    </p>
                    <p style={{ fontSize: '13px' }}>
                      Онлайн методы лечения: <br /> <b>14</b>
                    </p>
                    <p style={{ fontSize: '13px' }}>
                      Офлайн методы лечения: <br /> <b>13</b>
                    </p>
                  </div>
                  <Button
                    style={{
                      background: '#ff8181',
                      color: '#fff',
                      width: '100%',
                      marginTop: '20px',
                      borderRadius: '50px',
                    }}
                  >
                    Перейти/записаться
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterMobile />
    </div>
  );
};

export default Mobile;
