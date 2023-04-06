import ModalDots from '@/Components/CenterPage/ModalDots/ModalDots';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from './Center.module.scss';
import Sidebar from '@/Components/Sidebar/Sidebar';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import img_logo from '../../Assets/images/user-139.svg';
import hospital_logo from '../../Assets/images/hospital.png';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { HiArrowLongDown, HiArrowLongUp } from 'react-icons/hi2';

const Center = () => {
  const [menu, setMenu] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isDots, setIsDots] = useState(false);
  const [isDotsNav, setIsDotsNav] = useState(false);

  return (
    <Layout title="Центр">
      <div className={styles.container} onClick={() => setIsDotsNav(false)}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div className={styles.content}>
          <div className={styles.nav}>
            <p style={{ color: 'transparent' }}>Центр</p>
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
                    <p>Сменить ведущий центр</p>
                    <p>Подписаться</p>
                    <p>Пожаловаться</p>
                    <p>Заблокировать</p>
                    <p>Cкопировать ссылку</p>
                    <p>Поделиться этим профилем</p>
                    <p>Рассчитать пользу</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.main}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                padding: '20px 165px',
                borderRadius: '50px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
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
                  height: '140px',
                  borderRadius: '5px',
                }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>
                        Всего наблюдалось:
                      </td>
                      <td>111</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>
                        Изучено заболеваний:
                      </td>
                      <td>111</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>
                        Все методы лечения:
                      </td>
                      <td>35</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>Все публикации:</td>
                      <td>13</td>
                    </tr>
                  </tbody>
                </table>
                <Button
                  style={{
                    background: '#ff8181',
                    color: '#fff',
                    width: '100%',
                    marginTop: '20px',
                    borderRadius: '50px',
                  }}
                >
                  Написать
                </Button>
              </div>
              <div
                style={{
                  background: '#fff',
                  marginLeft: '50px',
                  borderRadius: '5px',
                  height: '140px',
                }}
              >
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
                {/* <Button
                  style={{
                    background: 'transparent',
                    color: '#fff',
                    width: '100%',
                    marginTop: '20px',
                  }}
                  href="/map"
                >
                  Посмотреть на карте
                </Button> */}
              </div>
            </div>
          </div>
          <p
            style={{
              width: '1000px',
              margin: '0 auto',
              fontSize: '20px',
              marginTop: '20px',
            }}
          >
            Специалисты:
          </p>
          <div className={styles.items}>
            {[1, 2].map((e) => (
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
              <p>Сменить ведущий центр</p>
              <p>Подписаться</p>
              <p>Пожаловаться</p>
              <p>Заблокировать</p>
              <p>Cкопировать ссылку</p>
              <p>Поделиться этим профилем</p>
              <p>Рассчитать пользу</p>
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
                    <td style={{ paddingRight: '20px' }}>
                      Изучено заболеваний:
                    </td>
                    <td>111</td>
                  </tr>
                  <tr>
                    <td style={{ paddingRight: '20px' }}>
                      Все методы лечения:
                    </td>
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
            <Button
              style={{
                background: '#ff8181',
                color: '#fff',
                margin: '20px 0',
              }}
              href="/map"
            >
              Посмотреть на карте
            </Button>
          </div>
          <div className={styles.specialists}>
            <h2>Специалисты:</h2>
            <div className={styles.items}>
              {/* <div className={styles.item}>
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
              </div> */}
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
      {/* <AnimatePresence>
        {isDots && <ModalDots setIsDots={setIsDots} />}
      </AnimatePresence> */}
    </Layout>
  );
};

export default Center;
