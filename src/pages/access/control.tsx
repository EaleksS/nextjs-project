import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from '../../styles/Control.module.scss';
import { BsSearch } from 'react-icons/bs';
import FormControlLabel from '@mui/material/FormControlLabel';
import { GrClose } from 'react-icons/gr';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { IOSSwitch } from '@/Components/CheckBox/IOSSwitch';
import { useRouter } from 'next/router';

const Control = () => {
  const [menu, setMenu] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [openSend, setOpenSend] = useState(false);
  const router = useRouter();

  return (
    <Layout title="Control">
      <div className={styles.container}>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        <div className={styles.content}>
          {!openSend ? (
            <div className={styles.h}>
              <p>Укажите имя пользователя, к которому вы хотите дать доступ</p>
              <label>
                <BsSearch className={styles.BsSearch} />
                <input
                  type="text"
                  placeholder="Поиск..."
                  style={{ width: '100%' }}
                />
              </label>

              <div>
                <a href="#" onClick={() => setOpenSend(true)}>
                  Человек находится вне нашей платформы?
                </a>
              </div>

              <button onClick={() => router.push('/access/settings')}>
                Настроить
              </button>
            </div>
          ) : (
            <div className={styles.info}>
              <div className={styles.close} onClick={() => setOpenSend(false)}>
                <GrClose />
              </div>
              <h1>Доступ вне платформы:</h1>
              <p>Введите данные для отправки доступа</p>
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Фамилия" />
              <input type="text" placeholder="Номер телефона" />
              <div className={styles.checkbox}>
                <h2>Оповестить о совершении регистрации?</h2>
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
              <div className={styles.btn}>
                <button>Отправить</button>
              </div>
              {/* <button>Отправить</button> */}
            </div>
          )}
        </div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Control;
