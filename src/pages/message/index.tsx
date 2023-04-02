
import React, { useState } from 'react';
import styles from './Message.module.scss';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import Navigation from '@/Components/Message/Mobile/Navigation/Navigation';
import Content from '@/Components/Message/Mobile/Content/Content';
import ContentDesktop from '@/Components/Message/Desktop/ContentDesktop';
import Layout from '../Layout';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';

const Message = () => {
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('Контакты');

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
          <ContentDesktop activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>
        <div className={styles.main_container_mobile}>
          <HeaderMobile menu={menu} setMenu={setMenu} />
          <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
          <Content activeNav={activeNav} />
          <FooterMobile />
        </div>
      </div>
    </Layout>
  );
};

export default Message;
