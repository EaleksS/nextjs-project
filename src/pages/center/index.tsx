import React, { FC, useState } from 'react';
import Layout from '../Layout';
import styles from './Center.module.scss';
import Mobile from '@/Components/CenterPage/Mobile/Mobile';
import Desktop from '@/Components/CenterPage/Desktop/Desktop';

const Center: FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Layout title="Центр">
      <Desktop menu={menu} setMenu={setMenu} />
      <Mobile menu={menu} setMenu={setMenu} />
    </Layout>
  );
};

export default Center;
