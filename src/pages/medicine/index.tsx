import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { useState } from 'react';
import Layout from '../Layout';

const Medicine = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Layout title="Medicine">
      <div>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        {/* <div className={styles.content}>
          
        </div> */}

        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Medicine;
