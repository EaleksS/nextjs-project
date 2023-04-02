import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from './Access.module.scss';
import { useRouter } from 'next/router';
import Sidebar from '@/Components/Sidebar/Sidebar';

const Access = () => {
  const [menu, setMenu] = useState(false);

  const router = useRouter();

  return (
    <Layout title="Access">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div>Доступ</div>
      </div>
      <div className={styles.mobile_container}>
        <HeaderMobile menu={menu} setMenu={setMenu} />

        <div className={styles.content}>
          <div>
            <p onClick={() => router.push('/access/control')}>Дать доступ</p>
            <p onClick={() => router.push('/access/control')}>
              Запросить доступ
            </p>
          </div>
        </div>

        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Access;
