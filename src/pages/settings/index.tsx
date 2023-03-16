import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import SettingsMainPageMobile from '@/Components/MainPage/SettigsMainPageMobile/SettingsMainPageMobile';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Layout from '../Layout';

const Settings = () => {
  const [menu, setMenu] = useState(false);
  
  return (
    <Layout title="Settings">
      <div >
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMobile
          menu={menu}
          setMenu={setMenu}
        />
        {/* <div className={styles.content}>
          
        </div> */}
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Settings;
