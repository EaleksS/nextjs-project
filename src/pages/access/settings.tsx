import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from './Settings.module.scss';
import CheckBox from '@/Components/UI/CheckBox/CheckBox';

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
        <HeaderMobile menu={menu} setMenu={setMenu} />

        <div className={styles.content}>
          <div className={styles.info}>
            <h1>Настройте доступ к вашей странице</h1>
            <div className={styles.checkbox}>
              <h2>Доступ к анкете</h2>
              <CheckBox checked={checked1} setChecked={setChecked1} />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к обсуждениям</h2>
              <CheckBox checked={checked2} setChecked={setChecked2} />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к геолокации</h2>
              <CheckBox checked={checked3} setChecked={setChecked3} />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к записям</h2>
              <CheckBox checked={checked4} setChecked={setChecked4} />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к покупкам</h2>
              <CheckBox checked={checked5} setChecked={setChecked5} />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к сообщениям</h2>
              <CheckBox checked={checked6} setChecked={setChecked6} />
            </div>
            <div className={styles.checkbox}>
              <h2>Включить мои оповещения </h2>
              <CheckBox checked={checked7} setChecked={setChecked7} />
            </div>
            <div className={styles.checkbox}>
              <h2>Доступ к поиску</h2>
              <CheckBox checked={checked8} setChecked={setChecked8} />
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
