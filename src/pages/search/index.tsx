import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { FC, useState } from 'react';
import Layout from '../Layout';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import { AnimatePresence } from 'framer-motion';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import styles from './Search.module.scss';

const Search: FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Layout title="Questionnaire">
      <div className={styles.container}>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMobile isOpenSearch={true} />
        <div className={styles.content}></div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Search;
