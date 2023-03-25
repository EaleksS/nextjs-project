import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from './Settings.module.scss';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/router';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IOSSwitch } from '@/Components/CheckBox/IOSSwitch';

const Settings = () => {
  const [menu, setMenu] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);

  return (
    <Layout title="Settings">
      <div className={styles.container}>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMobile menu={menu} setMenu={setMenu} />

        <div className={styles.content}>
          <div className={styles.info}>
            <h1>Настройте доступ к вашей странице</h1>
            <div className={styles.checkbox}>
              <h2>Доступ к анкете</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked1}
                    onChange={(e) => setChecked1(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к обсуждениям</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked2}
                    onChange={(e) => setChecked2(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к геолокации</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked3}
                    onChange={(e) => setChecked3(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к записям</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked4}
                    onChange={(e) => setChecked4(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к покупкам</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked5}
                    onChange={(e) => setChecked5(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к сообщениям</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked6}
                    onChange={(e) => setChecked6(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div className={styles.checkbox}>
              <h2>Включить мои оповещения </h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked7}
                    onChange={(e) => setChecked7(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к поиску</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked8}
                    onChange={(e) => setChecked8(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <h3>Доступ к вашей страницы будет работать с:</h3>
            <div className={styles.accessDate}>
              <label>
                <p>C</p>
                <input type="text" placeholder="_" />
              </label>
              <label>
                <p>До</p>
                <input type="text" placeholder="_" />
              </label>
            </div>
            <div className={styles.btn}>
              <button>Отправить</button>
            </div>
          </div>
        </div>

        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Settings;
