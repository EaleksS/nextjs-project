import Layout from './Layout';
import styles from '../styles/Main.module.scss';
import NavBar from '@/Components/NavBar/NavBar';
import Header from '@/Components/Header/Header';
import SettingsProfile from '@/Components/SettingsProfile/SettingsProfile';
import OptionsForUser from '@/Components/OptionsForUser/OptionsForUser';
import { useEffect, useState } from 'react';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMainPage from '@/Components/HeaderMainPage/HeaderMainPage';
import SettingsMainPageMobile from '@/Components/SettigsMainPageMobile/SettingsMainPageMobile';
import MobileMenu from '@/Components/MobileMenu/MobileMenu';
import { AnimatePresence } from 'framer-motion';

const Main = () => {
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);

  return (
    <Layout title="Main Page">
      <div className={styles.container}>
        <NavBar menu={menu} setMenu={setMenu} />
        <div className={styles.main_container}>
          <Header setSettings={setSettings} settin={settings} />
          <div className={styles.content}>
            <OptionsForUser menu={menu} className="" />
            <div className={styles.content_container}></div>
            {settings && <SettingsProfile />}
          </div>
        </div>
      </div>
      <div className={styles.mobile_version}>
        <AnimatePresence>
          {settings && (
            <SettingsMainPageMobile
              settings={settings}
              setSettings={setSettings}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMainPage
          setSettings={setSettings}
          settin={settings}
          menu={menu}
          setMenu={setMenu}
        />
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Main;
