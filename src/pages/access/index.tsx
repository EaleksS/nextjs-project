import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from '../../styles/Questionnaire.module.scss';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Access = () => {
  const [menu, setMenu] = useState(false);

  const router = useRouter();

  return (
    <Layout title="Access">
      <div className={styles.container}>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMobile menu={menu} setMenu={setMenu} />

        <div className={styles.content}>
          <div>
            <p onClick={() => router.push('/access/control')}>
              Дать доступ
            </p>
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
