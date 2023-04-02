import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { FC, useState } from 'react';
import Layout from '../Layout';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import styles from './Search.module.scss';
import Sidebar from '@/Components/Sidebar/Sidebar';

const Search: FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Layout title="Search">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div>Search</div>
      </div>
      <div className={styles.mobile_container}>
        <HeaderMobile isOpenSearch={true} />
        <div className={styles.content}>Search</div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Search;
