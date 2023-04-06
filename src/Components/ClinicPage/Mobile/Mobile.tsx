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
  const [isDots, setIsDots] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

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
          <Button style={{ borderRadius: '50px' }}>Написать</Button>
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
          <h2>Все методы лечения: (7):</h2>
          <div className={styles.items}>
            {[1, 2, 3].map((e) => (
              <div className={styles.item} key={e + 100}>
                <h1 className={styles.title}>Название:</h1>
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
  );
};

export default Mobile;
