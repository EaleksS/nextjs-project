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
import { ICenter } from '@/store/SearchStore';
import { useEntriesStore } from '@/store/entriesStore';

interface IDesktop extends ICenter {
  menu: boolean;
  setMenu: (bool: boolean) => void;
}

const Desktop: FC<IDesktop> = (props) => {
  const [isDotsNav, setIsDotsNav] = useState(false);

  const { isDoctors } = useEntriesStore();

  return (
    <div className={styles.container} onClick={() => setIsDotsNav(false)}>
      <Sidebar menu={props.menu} setMenu={props.setMenu} />
      <div className={styles.content}>
        <div className={styles.nav}>
          <p style={{ color: 'transparent' }}>{props.name}</p>
          <div className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
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
                  <p style={{ borderBottom: '1px solid #fff' }}>
                    Сменить ведущий центр
                  </p>
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
                <p style={{ fontSize: '25px' }}>
                  <b>{props.name}:</b>
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
                  // padding: '20px',
                  borderRadius: '5px',
                  height: '160px',
                  fontSize: '24px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <table>
                  <tbody style={{}}>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>Все специалисты:</td>
                      <td>{isDoctors.length}</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>
                        Всего наблюдалось:
                      </td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>Все публикации:</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                style={{
                  background: '#fff',
                  marginLeft: '50px',
                  // padding: '20px',
                  borderRadius: '5px',
                  height: '160px',
                  fontSize: '24px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <table>
                  <tbody style={{}}>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>Страна:</td>
                      <td>{props.state}</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>Город:</td>
                      <td>{props.city}</td>
                    </tr>
                    {/* <tr>
                      <td style={{ paddingRight: '20px' }}>Часовой пояс:</td>
                      <td>GSM (+7)</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>Время работы:</td>
                      <td>09:00 - 15:00</td>
                    </tr> */}
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
        <p
          style={{
            width: '1000px',
            margin: '0 auto',
            marginTop: '20px',
            fontSize: '30px',
            textAlign: 'center',
          }}
        >
          Специалисты: ({isDoctors.length})
        </p>
        <div className={styles.items}>
          {isDoctors.length > 0 ? (
            isDoctors.map((e) => (
              <div className={styles.item} key={e.id}>
                <div style={{ display: 'flex' }}>
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
                        style={{ color: 'green', fontSize: '30px' }}
                      />
                      <p
                        style={{
                          margin: '-20px',
                          padding: 0,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        -
                      </p>
                      <HiArrowLongDown
                        style={{ color: 'red', fontSize: '30px' }}
                      />
                      <p
                        style={{
                          margin: '-20px',
                          padding: 0,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        -
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
                      fontSize: '14px',
                      color: '#A4A4A4',
                    }}
                  >
                    <div>
                      <p>
                        Имя Фамилия: <br />
                        <b style={{ fontSize: '20px', color: '#454545' }}>
                          {e.firstname && e.lastname
                            ? `${e.lastname} ${e.firstname}`
                            : `${e.username}`}
                        </b>
                      </p>
                      <p>
                        Специальность: <br />
                        <b style={{ fontSize: '20px', color: '#454545' }}>
                          Доктор
                        </b>
                      </p>
                      <p>
                        Онлайн методы лечения: <br />
                        <b style={{ fontSize: '20px', color: '#454545' }}>-</b>
                      </p>
                      <p>
                        Офлайн методы лечения: <br />
                        <b style={{ fontSize: '20px', color: '#454545' }}>-</b>
                      </p>
                    </div>
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
                      fontSize: '20px',
                    }}
                  >
                    Перейти/записаться
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ display: 'flex', justifyContent: 'center' }}>Пусто</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Desktop;
