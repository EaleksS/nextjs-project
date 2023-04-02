import Layout from './Layout';
import styles from './Main.module.scss';
import { useEffect, useState } from 'react';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import SettingsMainPageMobile from '@/Components/Main/SettigsMainPageMobile/SettingsMainPageMobile';
import { AnimatePresence } from 'framer-motion';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import { useAuthStore } from '@/store/store';
import { toast } from 'react-toastify';
import { IoEnterOutline } from 'react-icons/io5';
import { MdAddCall } from 'react-icons/md';
import { useRouter } from 'next/router';
import Sidebar from '@/Components/Sidebar/Sidebar';

const Main = () => {
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);

  const { statusLogin, setStatusLogin } = useAuthStore();

  const { isLang: lang, isImage, userInfo, getLogout } = useAuthStore();
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

  const router = useRouter();

  return (
    <Layout title="Main Page">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div className={styles.main_container}>
          <div className={styles.logout} onClick={() => getLogout()}>
            Выход <IoEnterOutline className={styles.icon} />
          </div>
          <div className={styles.content}>content</div>
          <div className={styles.call} onClick={() => router.push('/call')}>
            <MdAddCall className={styles.icon} />
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
