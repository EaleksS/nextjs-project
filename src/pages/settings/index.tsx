import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { FC, useState } from 'react';
import Layout from '../Layout';
import styles from './Settings.module.scss';
import Sidebar from '@/Components/Sidebar/Sidebar';

const Settings:FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Layout title="Settings">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div>Settings</div>
      </div>
      <div className={styles.mobile_container}>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        <div className={styles.content}>Settings</div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Settings;
