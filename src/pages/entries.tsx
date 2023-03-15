import React, { useState } from 'react';
import Layout from './Layout';
import styles from '../styles/Profile.module.scss';
import NavBar from '@/Components/NavBar/NavBar';
import { AnimatePresence } from 'framer-motion';
import SettingsMainPageMobile from '@/Components/MainPage/SettigsMainPageMobile/SettingsMainPageMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import HeaderMainPage from '@/Components/MainPage/HeaderMainPage/HeaderMainPage';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import EntriesModal from '@/Components/EntriesPage/EntriesModal/EntriesModal';

const Entries = () => {
  const [menu, setMenu] = useState(false);
  const [menuActive, setMenuActive] = useState('Предстоящие');
  const [settings, setSettings] = useState(false);

  return (
    <Layout title="Main Page">
      {/* <div className={styles.container}>
        <NavBar menu={menu} setMenu={setMenu} />
        <div className={styles.main_container}>
          <Header setSettings={setSettings} settin={settings} />
          <div className={styles.content}>
            <OptionsForUser menu={menu} className="" />
            <div className={styles.content_container}></div>
            {settings && <SettingsProfile />}
          </div>
        </div>
      </div> */}
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
          isMenu={false}
          isSetting={false}
          isPlus={true}
        />
        <div className={styles.menu}>
          <button
            className={menuActive === 'Предстоящие' ? styles.active_btn : ' '}
            onClick={() => setMenuActive('Предстоящие')}
          >
            Предстоящие
          </button>
          <button
            className={menuActive === 'История' ? styles.active_btn : ' '}
            onClick={() => setMenuActive('История')}
          >
            История
          </button>
        </div>
        <div className={styles.content}>
          {menuActive === 'Предстоящие' ? (
            [1, 2, 3, 4].map((i) => (
              <div className={styles.block} key={i}>
                <div>
                  <h2>Название: name</h2>
                  <h2>Ведущий: vedushiy</h2>
                  <h2>Специальность: service</h2>
                </div>
                <div className={styles.bottom}>
                  <div>
                    <h2>20/12/2024</h2>
                    <h2>14:00 - 15:00</h2>
                  </div>
                  <div className={styles.address}>
                    <h2>Адрес</h2>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className={styles.block}>
                <div>
                  <h2>Название: name</h2>
                  <h2>Ведущий: vedushiy</h2>
                  <h2>Специальность: service</h2>
                </div>
                <div className={styles.bottom}>
                  <div>
                    <h2>20/12/2024</h2>
                    <h2>14:00 - 15:00</h2>
                  </div>
                  <div className={styles.address}>
                    <h2>Адрес</h2>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <FooterMobile />
      </div>
      <EntriesModal />
    </Layout>
  );
};

export default Entries;
