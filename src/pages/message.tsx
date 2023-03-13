import OptionsForUser from '@/Components/OptionsForUser/OptionsForUser';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from '../styles/Message.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPinAngleFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import NavBar from '@/Components/NavBar/NavBar';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import MobileMenu from '@/Components/MobileMenu/MobileMenu';

const array = [
  {
    id: 1,
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, illum.',
    name: 'Oleg',
    fix: true,
  },
  {
    id: 2,
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, illum.',
    name: 'Sasha',
    fix: false,
  },
  {
    id: 3,
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, illum.',
    name: 'Georgiy',
    fix: false,
  },
  {
    id: 4,
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, illum.',
    name: 'Kolya',
    fix: false,
  },
];

const Message = () => {
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('Контакты');

  const [isValue, setIsValue] = useState(0);
  const [isValueStart, setIsValueStart] = useState(0);
  const [isDelete, setIsDelete] = useState<any>([]);
  const [isFix, setIsFix] = useState<any>([]);
  const [contactId, setContactId] = useState(0);

  const array2 = array
    .filter((i) => {
      let flag = 0;
      isDelete.forEach((j: number) => {
        if (i.id === j) {
          flag = i.id;
        }
      });
      return i.id !== flag;
    })
    .map((g) => {
      let flag = g.fix;
      isFix.forEach((h: number) => {
        if (g.id === h) {
          flag = !flag;
        }
      });
      return { ...g, fix: flag };
    });

  const handleTouchMove = (x: number) => {
    if (isValueStart > x) {
      setIsValue((res) => res - 5);
      setIsValueStart(x + 0.01);
    } else {
      setIsValue((res) => res + 5);
      setIsValueStart(x - 0.01);
    }
  };

  return (
    <div className={styles.container}>
      <NavBar menu={menu} setMenu={setMenu} />
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
            ? array2
                .sort((a: any, b: any) => b.fix - a.fix)
                .map((i) => (
                  <div
                    className={styles.contact}
                    key={i.id}
                    style={
                      i.id === contactId
                        ? {
                            transform: `translateX(${
                              isValue > 0
                                ? isValue < 100
                                  ? isValue
                                  : 110
                                : isValue < -110
                                ? -110
                                : isValue
                            }px)`,
                            transition: '.3s',
                          }
                        : { transform: `translateX(0px)` }
                    }
                    onTouchStart={(e) => {
                      setIsValueStart(e.touches[0].clientX);
                      setContactId(i.id);
                    }}
                    onTouchMove={(e) => handleTouchMove(e.touches[0].clientX)}
                    onTouchEnd={() => {
                      console.log(isValue);
                      if (isValue > 100) {
                        setIsDelete((res: number[]) => [
                          ...res,
                          Number(contactId),
                        ]);
                      }
                      if (isValue < -120) {
                        setIsFix((res: number[]) => [...res, contactId]);
                      }

                      setIsValue(0);
                    }}
                  >
                    <img src="/profile.png" alt="logo" />

                    <div className={styles.info}>
                      <h3>{i.name}</h3>
                      <div className={styles.truncate}>
                        <p className={styles.truncate_text}>{i.message}</p>
                      </div>
                    </div>
                    <div className={styles.notification}>
                      2
                      {i.fix && (
                        <BsPinAngleFill className={styles.BsPinAngleFill} />
                      )}
                    </div>
                  </div>
                ))
            : array.map((i, index) => (
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
        <FooterMobile />
      </div>
      <AnimatePresence>
        {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Message;
