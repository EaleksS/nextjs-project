import OptionsForUser from '@/Components/MainPage/OptionsForUser/OptionsForUser';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './Message.module.scss';
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
        {/* <NavBar
          menu={menu}
          setMenu={setMenu}
          setHiddenNavBar={setHiddenNavBar}
          hiddenNavBar={hiddenNavBar}
        /> */}
        <div className={styles.main_container}>
          {hiddenNavBar && <OptionsForUser />}
          <ContentDesktop activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>

        <div className={styles.main_container_mobile}>
          <AnimatePresence>
            {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
          </AnimatePresence>
          <HeaderMobile menu={menu} setMenu={setMenu} />
          <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
          <Content activeNav={activeNav} />
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
