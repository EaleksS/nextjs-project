import Layout from './Layout';
import styles from '../styles/Main.module.scss';
import NavBar from '@/Components/NavBar/NavBar';
import Header from '@/Components/Header/Header';
import SettingsProfile from '@/Components/SettingsProfile/SettingsProfile';
import OptionsForUser from '@/Components/OptionsForUser/OptionsForUser';
import { useEffect, useState } from 'react';
import {
  getAllRegRequest,
  getConfirmRegister,
  getVerifyAccount,
} from '@/Actions/authRequest';

const Main = () => {
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);
  useEffect(() => {
    getAllRegRequest();
  }, []);

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
    </Layout>
  );
};

export default Main;
