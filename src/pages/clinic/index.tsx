import React, { FC, useState } from 'react';
import Layout from '../Layout';
import styles from './Сlinic.module.scss';
import Desktop from '@/Components/ClinicPage/Desktop/Desktop';
import Mobile from '@/Components/ClinicPage/Mobile/Mobile';

const Clinic: FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Layout title="Клиника">
      <Desktop menu={menu} setMenu={setMenu} />
      <Mobile menu={menu} setMenu={setMenu} />
    </Layout>
  );
};

export default Clinic;
