import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from './Control.module.scss';
import { BsSearch } from 'react-icons/bs';
import FormControlLabel from '@mui/material/FormControlLabel';
import { GrClose } from 'react-icons/gr';
import { IOSSwitch } from '@/Components/UI/CheckBox/IOSSwitch';
import { useRouter } from 'next/router';
import CheckBox from '@/Components/UI/CheckBox/CheckBox';
import Sidebar from '@/Components/Sidebar/Sidebar';

const Control = () => {
  const [menu, setMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const [openSend, setOpenSend] = useState(false);
  const router = useRouter();

  return (
    <Layout title="Control">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
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
                <CheckBox checked={checked} setChecked={setChecked} />
              </div>
              <div className={styles.btn}>
                <button>Отправить</button>
              </div>
              {/* <button>Отправить</button> */}
            </div>
          )}
        </div>
      </div>
      <div className={styles.mobile_container}>
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
                <CheckBox checked={checked} setChecked={setChecked} />
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
