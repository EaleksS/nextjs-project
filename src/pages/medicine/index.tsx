import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { FC, useState } from 'react';
import Layout from '../Layout';
import styles from './Medicine.module.scss';
import Sidebar from '@/Components/Sidebar/Sidebar';

const Medicine:FC = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Layout title="Medicine">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div>Medicine</div>
      </div>
      <div className={styles.mobile_container}>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        <div className={styles.content}>Медицина</div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Medicine;
