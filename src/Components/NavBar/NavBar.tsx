import Image from 'next/image';
import styles from './NavBar.module.scss';
import profileImg from '../../Assets/images/profile.png';
import home from '../../Assets/images/home.png';
import find from '../../Assets/images/find.png';
import message from '../../Assets/images/message.png';
import arrow from '../../Assets/images/go out/arrow.png';
import door from '../../Assets/images/go out/door.png';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuthStore } from '@/store/store';
import { useEffect, useState } from 'react';

type Props = {
  menu: boolean;
  setMenu: any;
};

const NavBar = (props: Props) => {
  const setMenu = props.setMenu;
  const menu = props.menu;
  const { user, userInfo } = useAuthStore();

  const [name, setName] = useState('');

  useEffect(() => {
    if (user?.email && user !== null && !userInfo.username) {
      setName(user?.email.replace('@gmail.com', '').replace('@mail.ru', ''));
    }
    if (userInfo.username) {
      setName(userInfo.username);
    }
  }, [user]);

  return (
    <>
      <div className={styles.mobile_nav}>
        <div
          className={styles.mobile_profile_container}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {/* <Image src={profileImg} alt="" /> */}
          <img
            src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
            alt="logo"
          />
          <div className={styles.mobile_profile_name}>
            <p>{name}</p>
          </div>
        </div>
      </div>
      <div className={styles.navbar_container}>
        <div style={{ width: '100%', display: 'flex' }}>
          <div className={styles.navbar_container_content}>
            <div className={styles.profile}>
              <div
                className={styles.profile_container}
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                {/* <Image src={profileImg} alt="" /> */}
                <img
                  src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                  alt="logo"
                />
                <div className={styles.profile_name}>
                  <p>{name}</p>
                </div>
              </div>
            </div>
            <div className={styles.navigation_container}>
              <div className={styles.cont_nav}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <div className={styles.content_nav}>
                    <Image
                      src={home}
                      alt=""
                      style={{ width: '25px', height: '25px' }}
                    />
                    Главная страница
                  </div>
                </Link>
                <div className={styles.content_nav}>
                  <Image
                    src={find}
                    alt=""
                    style={{ width: '25px', height: '25px' }}
                  />
                  Поиск
                </div>
                <Link href="/message" style={{ textDecoration: 'none' }}>
                  <div className={styles.content_nav}>
                    <Image
                      src={message}
                      alt=""
                      style={{ width: '25px', height: '20px' }}
                    />
                    <p>Сообщения</p>
                  </div>
                </Link>
              </div>
              <div className={styles.go_out_cont}>
                Выход
                <div className={styles.go_out_img}>
                  <Image src={arrow} alt="" />
                  <Image src={door} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '13%',
              backgroundColor: '#f8fbff',
              height: '100vh',
            }}
          >
            {menu && (
              <AnimatePresence>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={styles.line}
                />
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
