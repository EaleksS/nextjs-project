import React, { FC, useEffect, useState } from 'react';
import Layout from '../Layout';
import styles from './Center.module.scss';
import Mobile from '@/Components/CenterPage/Mobile/Mobile';
import Desktop from '@/Components/CenterPage/Desktop/Desktop';
import { useSearchStore } from '@/store/SearchStore';
import { useCenterStore } from '@/store/CenterStore';
import { useEntriesStore } from '@/store/entriesStore';

const Center: FC = () => {
  const [menu, setMenu] = useState(false);

  const { getAllCenter, isCenter } = useSearchStore();
  const { isSelectCenter } = useCenterStore();
  const { getIsDoctors, isDoctors } = useEntriesStore();

  useEffect(() => {
    getAllCenter();
    getIsDoctors();
    console.log(isSelectCenter);
  }, []);

  return (
    <Layout title="Центр">
      {isSelectCenter ? (
        isCenter &&
        isCenter
          .filter((f) => f.name === isSelectCenter)
          .map((i) => {
            return (
              <React.Fragment key={i.name + 'key'}>
                <Desktop menu={menu} setMenu={setMenu} {...i} />
                <Mobile menu={menu} setMenu={setMenu} />
              </React.Fragment>
            );
          })
      ) : (
        <div>loading...</div>
      )}
    </Layout>
  );
};

export default Center;
