import Layout from './Layout';
import styles from './Main.module.scss';
import NavBar from '@/Components/NavBar/NavBar';
import Header from '@/Components/Main/Header/Header';
import SettingsProfile from '@/Components/Main/SettingsProfile/SettingsProfile';
import OptionsForUser from '@/Components/Main/OptionsForUser/OptionsForUser';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import SettingsMainPageMobile from '@/Components/Main/SettigsMainPageMobile/SettingsMainPageMobile';
import MobileMenu from '@/Components/MobileMenu/MobileMenu';
import { AnimatePresence } from 'framer-motion';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import { useAuthStore } from '@/store/store';
import { toast } from 'react-toastify';

const Main = () => {
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);

  const [hiddenNavBar, setHiddenNavBar] = useState(false);
  const { statusLogin, setStatusLogin } = useAuthStore();

  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  let flag = true;

  useEffect(() => {
    if (statusLogin === 200 && flag) {
      toast.success('Вы успешно вошли');
      setStatusLogin();
      flag = false;
    }
  }, []);

  return (
    <Layout title="Main Page">
      <div className={styles.container}>
        <NavBar
          menu={menu}
          setMenu={setMenu}
          setHiddenNavBar={setHiddenNavBar}
          hiddenNavBar={hiddenNavBar}
        />
        <div className={styles.main_container}>
          <Header setSettings={setSettings} />
          <div className={styles.content}>
            {hiddenNavBar && <OptionsForUser />}
            <div className={styles.content_container}>ad</div>
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
        <HeaderMobile
          setSettings={setSettings}
          menu={menu}
          setMenu={setMenu}
          isMenu={true}
          isSetting={true}
        />
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Main;
