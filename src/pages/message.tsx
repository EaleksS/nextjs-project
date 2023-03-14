import OptionsForUser from '@/Components/MainPage/OptionsForUser/OptionsForUser';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from '../styles/Message.module.scss';
import { AnimatePresence } from 'framer-motion';
import NavBar from '@/Components/NavBar/NavBar';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import Navigation from '@/Components/MessagePage/Mobile/Navigation/Navigation';
import Content from '@/Components/MessagePage/Mobile/Content/Content';
import ContentDesktop from '@/Components/MessagePage/Desktop/ContentDesktop';
import Layout from './Layout';

const array = [
  {
    id: 1,
    message: 'Я созванивались с ней и не один раз, она ведет себя ',
    name: 'Олег',
    fix: false,
  },
  {
    id: 2,
    message: 'Попробуй так',
    name: 'Саша',
    fix: true,
  },
  {
    id: 3,
    message: 'Не было сообщений',
    name: 'Георгий',
    fix: false,
  },
  {
    id: 4,
    message: 'Не было сообщений',
    name: 'Коля',
    fix: false,
  },
];

const Message = () => {
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('Контакты');
  return (
    <Layout title="message">
      <div className={styles.container}>
        <NavBar menu={menu} setMenu={setMenu} />
        <div className={styles.main_container}>
          <OptionsForUser menu={menu} className={styles.menu} />
          <ContentDesktop activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>
        <div className={styles.main_container_mobile}>
          <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
          <Content array={array} activeNav={activeNav} />
          <FooterMobile />
        </div>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Message;
