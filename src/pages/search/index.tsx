import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { FC, useState } from 'react';
import Layout from '../Layout';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import styles from './Search.module.scss';

const Search: FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Layout title="Questionnaire">
      <div className={styles.container}>
        <HeaderMobile isOpenSearch={true} />
        <div className={styles.content}></div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Search;
