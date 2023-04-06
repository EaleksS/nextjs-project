import React, { FC, useState } from 'react';
import styles from './Desktop.module.scss';
import Button from '@mui/material/Button';
import { HiArrowLongDown, HiArrowLongUp } from 'react-icons/hi2';
import hospital_logo from '../../../Assets/images/hospital.png';
import Image from 'next/image';
import img_logo from '../../../Assets/images/user-139.svg';
import Sidebar from '@/Components/Sidebar/Sidebar';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';

interface IDesktop {
  menu: boolean;
  setMenu: (bool: boolean) => void;
}

const Desktop: FC<IDesktop> = ({ menu, setMenu }) => {
  const [isDotsNav, setIsDotsNav] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className={styles.container} onClick={() => setIsDotsNav(false)}>
      <Sidebar menu={menu} setMenu={setMenu} />
      <div className={styles.content}>
        <div className={styles.nav}>
          <p style={{ color: 'transparent' }}>Клиника</p>
          <div className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <div
            className={styles.dots}
            onClick={(e) => {
              e.stopPropagation();
              setIsDotsNav((prev) => !prev);
            }}
          >
            <BsThreeDots />
            <AnimatePresence>
              {isDotsNav && (
                <motion.div
                  className={styles.dots_modal}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0, y: -150, x: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 0, y: -150, x: 100 }}
                  transition={{ duration: 0.25 }}
                >
                  <p>Подписаться</p>
                  <p>Посмотреть на карте</p>
                  <p style={{ borderBottom: '1px solid #fff' }}>
                    Рассчитать пользу
                  </p>
                  <p>Пожаловаться</p>
                  <p>Заблокировать</p>
                  <p>Cкопировать ссылку</p>
                  <p>Поделиться этим профилем</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className={styles.main}>
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <p style={{}}>
                  <b>Клиника:</b>
                </p>

                <Image
                  className={styles.imgImage}
                  src={hospital_logo}
                  alt="logo"
                />
              </div>

              <div
                style={{
                  background: '#fff',
                  marginLeft: '50px',
                  padding: '20px',
                  borderRadius: '5px',
                  height: '160px',
                }}
              >
                <table>
                  <tbody style={{}}>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>Все специалисты:</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>
                        Всего наблюдалось:
                      </td>
                      <td>111</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>Все публикации:</td>
                      <td>13</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                style={{
                  background: '#fff',
                  marginLeft: '50px',
                  padding: '20px',
                  borderRadius: '5px',
                  height: '160px',
                }}
              >
                <table>
                  <tbody style={{}}>
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
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                style={{
                  background: '#ff8181',
                  color: '#fff',
                  width: '300px',
                  marginTop: '20px',
                  borderRadius: '50px',
                  marginBottom: '20px',
                }}
              >
                Написать
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.onlinebtn}>
          <p style={{ textAlign: 'center' }}>Все методы лечения: (7):</p>
          <div className={styles.btn}>
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
              Офлайн
            </button>
          </div>
        </div>
        <div className={styles.items}>
          {[1, 2].map((e) => (
            <div className={styles.item} key={e + 100}>
              <h1 className={styles.title}>Название:</h1>
              <div className={styles.down}>
                <Image className={styles.imgImage} src={img_logo} alt="logo" />
                <div
                  style={{
                    marginLeft: '50px',
                    width: '100%',
                    borderRadius: '5px',
                  }}
                >
                  {/* <Select
                      placeholder={options[0].label}
                      options={options}
                      className={styles.select}
                     
                    /> */}

                  <div>
                    <p style={{}}>
                      Все представители : <br /> <b>Алексеев Эрнест</b>
                    </p>
                    <p style={{}}>
                      Наблюдалось: <br /> <b>5</b>
                    </p>
                    <p style={{}}>
                      Вылечилось: <br /> <b>3</b>
                    </p>
                    <p style={{}}>
                      Предназначен: <br /> <b>Ваше забол. и 12 видов</b>
                    </p>
                  </div>
                  {/* <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button className={styles.btns}>
                      Описание
                      <div className={styles.opicane_modal}>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Deserunt id necessitatibus veritatis iusto
                          accusamus nostrum, aut itaque nemo magni quam in!
                        </p>
                      </div>
                    </Button>
                  </div> */}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  style={{
                    background: '#ff8181',
                    color: '#fff',
                    borderRadius: '50px',
                    marginTop: '20px',
                    // width: '300px',
                  }}
                >
                  Развернуть/Записаться
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desktop;
