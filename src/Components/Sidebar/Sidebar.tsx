import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import Menu from '../Menu/Menu';
import styles from './Sidebar.module.scss';
import { useAuthStore } from '@/store/store';
import Link from 'next/link';
import { BiHomeAlt, BiMessageAltDetail, BiSearch } from 'react-icons/bi';

interface ISidebar {
  menu: boolean;
  setMenu: (bool: boolean) => void;
}

const Sidebar: FC<ISidebar> = ({ menu, setMenu }) => {
  const { userInfo, isImage } = useAuthStore();

  return (
    <>
      <AnimatePresence>{menu && <Menu setMenu={setMenu} />}</AnimatePresence>
      <div className={styles.sidebar}>
        <div className={styles.user} onClick={() => setMenu(true)}>
          {isImage === null ? (
            <img
              className={styles.user_img}
              src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
              alt="img user"
            />
          ) : (
            <img className={styles.user_img} src={isImage} alt="logo" />
          )}
          <p>{userInfo?.username ? userInfo.lastname : userInfo?.email}</p>
        </div>
        <div className={styles.links}>
          <Link href="/">
            <BiHomeAlt className={styles.icon} /> Главная страница
          </Link>
          <Link href="/message">
            <BiMessageAltDetail className={styles.icon} /> Сообщения
          </Link>
          <Link href="/search">
            <BiSearch className={styles.icon} /> Поиск
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
