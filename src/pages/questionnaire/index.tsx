import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from './Questionnaire.module.scss';

const Questionnaire = () => {
  const [menu, setMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const router = useRouter();

  return (
    <Layout title="Questionnaire">
      <div className={styles.container}>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>

        <HeaderMobile
          menu={menu}
          setMenu={setMenu}
          isSearch={true}
          setIsOpenSearch={setIsOpenSearch}
          isOpenSearch={isOpenSearch}
        />
        <div className={styles.content}>
          <div className={styles.items}>
            <div className={styles.title}>
              <h1>Март</h1>
              <h1>2023</h1>
            </div>
            <div className={styles.item}>
              <div className={styles.date}>
                Вт <br /> 1
              </div>
              <div className={styles.name}>
                <h1>Название</h1>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.date}>
                Ср <br /> 7
              </div>
              <div className={styles.name}>
                <h1>Название</h1>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.date}>
                Чт <br /> 9
              </div>
              <div className={styles.name}>
                <h1>Название</h1>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.date}>
                Пт <br /> 11
              </div>
              <div className={styles.name}>
                <h1>Название</h1>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.date}>
                Сб <br /> 15
              </div>
              <div className={styles.name}>
                <h1>Название</h1>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.date}>
                Вс <br /> 17
              </div>
              <div className={styles.name}>
                <h1>Название</h1>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.date}>
                Пн <br /> 21
              </div>
              <div className={styles.name}>
                <h1>Название</h1>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.title}>
                <h1>Февраль</h1>
                <h1>2023</h1>
              </div>
              <div className={styles.item}>
                <div className={styles.date}>
                  Вт <br /> 1
                </div>
                <div className={styles.name}>
                  <h1>Название</h1>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.date}>
                  Ср <br /> 7
                </div>
                <div className={styles.name}>
                  <h1>Название</h1>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.date}>
                  Чт <br /> 9
                </div>
                <div className={styles.name}>
                  <h1>Название</h1>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.date}>
                  Пт <br /> 11
                </div>
                <div className={styles.name}>
                  <h1>Название</h1>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.date}>
                  Сб <br /> 15
                </div>
                <div className={styles.name}>
                  <h1>Название</h1>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.date}>
                  Вс <br /> 17
                </div>
                <div className={styles.name}>
                  <h1>Название</h1>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.date}>
                  Пн <br /> 21
                </div>
                <div className={styles.name}>
                  <h1>Название</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Questionnaire;
