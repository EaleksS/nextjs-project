import ModalDots from '@/Components/CenterPage/ModalDots/ModalDots';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from './Сlinic.module.scss';
import Sidebar from '@/Components/Sidebar/Sidebar';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import img_logo from '../../Assets/images/user-139.svg';
import hospital_logo from '../../Assets/images/hospital.png';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Select from 'react-select';

const options = [
  { value: '1', label: 'Серегей Сергеев' },
  { value: '2', label: 'Алексеев Эрнест' },
  { value: '3', label: 'Слепцов Вадим' },
];

const Clinic = () => {
  const [menu, setMenu] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isDots, setIsDots] = useState(false);
  const [isDotsNav, setIsDotsNav] = useState(false);

  return (
    <Layout title="Клиника">
      <div className={styles.container} onClick={() => setIsDotsNav(false)}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div className={styles.content}>
          <div className={styles.nav}>
            <p>Клиника</p>
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
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
                  padding: '20px',
                  borderRadius: '5px',
                }}
              >
                <table>
                  <tbody>
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
                <Button
                  style={{
                    background: '#ff8181',
                    color: '#fff',
                    width: '100%',
                    marginTop: '20px',
                  }}
                >
                  Написать
                </Button>
              </div>
              <div
                style={{
                  background: '#fff',
                  marginLeft: '50px',
                  padding: '20px',
                  borderRadius: '5px',
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
                <Button
                  style={{
                    background: '#ff8181',
                    color: '#fff',
                    width: '100%',
                    marginTop: '20px',
                  }}
                >
                  Посмотреть на карте
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.onlinebtn}>
            <p> Все методы лечения: (7):</p>
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
            {[1, 2, 3, 4].map((e) => (
              <div className={styles.item} key={e + 100}>
                <h1 className={styles.title}>Название</h1>
                <div className={styles.down}>
                  <Image
                    className={styles.imgImage}
                    src={img_logo}
                    alt="logo"
                  />
                  <div
                    style={{
                      marginLeft: '50px',
                      width: '100%',
                      borderRadius: '5px',
                    }}
                  >
                    <Select
                      placeholder={options[0].label}
                      options={options}
                      className={styles.select}
                      // onChange={(e) => setSelectValueMap(e?.value)}
                    />
                    <table style={{ width: '100%', marginTop: '20px ' }}>
                      <tbody>
                        <tr>
                          <td>Наблюдалось:</td>
                          <td
                            style={{
                              width: '100%',
                              display: 'flex',
                              justifyContent: 'flex-end',
                            }}
                          >
                            3
                          </td>
                        </tr>
                        <tr>
                          <td>Вылечилось:</td>
                          <td
                            style={{
                              width: '100%',
                              display: 'flex',
                              justifyContent: 'flex-end',
                            }}
                          >
                            2
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
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
                      <Button className={styles.btns}>Записаться</Button>
                    </div>
                  </div>
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
          <h1 className={styles.title}>Клиника</h1>
          <div className={styles.infoCenter}>
            <Image src={hospital_logo} alt="logo" width={100} height={100} />
            <div className={styles.info}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ paddingRight: '20px' }}>Все специалисты:</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td style={{ paddingRight: '20px' }}>Всего наблюдалось:</td>
                    <td>111</td>
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
            <h2>Все методы лечения: (7):</h2>
            <div className={styles.items}>
              {[1, 2, 3].map((e) => (
                <div className={styles.item} key={e + 100}>
                  <h1 className={styles.title}>Название</h1>
                  <div className={styles.down}>
                    <Image
                      className={styles.imgImage}
                      src={img_logo}
                      alt="logo"
                    />
                    <div
                      style={{
                        marginLeft: '10px',
                        width: '100%',
                        borderRadius: '5px',
                      }}
                    >
                      <Select
                        placeholder={options[0].label}
                        options={options}
                        className={styles.select}
                        // onChange={(e) => setSelectValueMap(e?.value)}
                      />
                      <table style={{ width: '100%', marginTop: '20px ' }}>
                        <tbody>
                          <tr>
                            <td>Наблюдалось:</td>
                            <td
                              style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                              }}
                            >
                              3
                            </td>
                          </tr>
                          <tr>
                            <td>Вылечилось:</td>
                            <td
                              style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                              }}
                            >
                              2
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Button className={styles.btns}>
                          Описание
                          <div className={styles.opicane_modal}>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Deserunt id necessitatibus
                              veritatis iusto accusamus nostrum, aut itaque nemo
                              magni quam in!
                            </p>
                          </div>
                        </Button>
                        <Button className={styles.btns}>Записаться</Button>
                      </div>
                    </div>
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

export default Clinic;
