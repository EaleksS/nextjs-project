import React, { FC, useState } from 'react';
import styles from './Map.module.scss';
import CenterInfo from '@/Components/Map/CenterInfo/CenterInfo';
import NavBar from '@/Components/Map/NavBar/NavBar';
import Content from '@/Components/Map/Content/Content';
import Layout from '../Layout';
import Sidebar from '@/Components/Sidebar/Sidebar';

const Map: FC = () => {
  const [infoCenter, setInfoCenter] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Layout title="Карта">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div>Карта</div>
      </div>
      <div className={styles.mobile_container}>
        <NavBar />
        <div className={styles.cont}>
          <Content infoCenter={infoCenter} setIngoCenter={setInfoCenter} />
          {infoCenter && <CenterInfo />}
        </div>
      </div>
    </Layout>
  );
};

export default Map;
