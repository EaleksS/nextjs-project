import OptionsForUser from '@/Components/MainPage/OptionsForUser/OptionsForUser';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from '../../styles/Message.module.scss';
import { AnimatePresence } from 'framer-motion';
import NavBar from '@/Components/NavBar/NavBar';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import Navigation from '@/Components/MessagePage/Mobile/Navigation/Navigation';
import Content from '@/Components/MessagePage/Mobile/Content/Content';
import ContentDesktop from '@/Components/MessagePage/Desktop/ContentDesktop';
import Layout from '../Layout';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';

const Message = () => {
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('Контакты');
  const [hiddenNavBar, setHiddenNavBar] = useState(false);

  return (
    <Layout title="message">
      <div className={styles.container}>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        <div className={styles.main_container}>
          {hiddenNavBar && <OptionsForUser menu={hiddenNavBar} />}
          <ContentDesktop activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>

        <div className={styles.main_container_mobile}>
          <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
          <Content  activeNav={activeNav} />
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
