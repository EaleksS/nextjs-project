import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import Menu from '../Menu/Menu';
import styles from './Sidebar.module.scss';
import { useAuthStore } from '@/store/store';
import Link from 'next/link';
import { BiHomeAlt, BiMessageAltDetail, BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import img_logo from '../../Assets/images/user-139.svg';

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
            <Image className={styles.user_img} src={img_logo} alt="img user"  />
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
