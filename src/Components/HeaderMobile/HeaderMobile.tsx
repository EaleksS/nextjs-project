import Image from 'next/image';
import styles from './HeaderMobile.module.scss';
import settings from '../../Assets/images/settings.png';
import setting from '../../Assets/images/setting.png';
import profileImg from '../../Assets/images/profile.png';
import { GoPlus } from 'react-icons/go';
import { useAuthStore } from '@/store/store';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { log } from 'console';

type Props = {
  setSettings?: (prev: boolean) => void;
  menu?: boolean;
  setMenu?: any;
  isMenu?: boolean;
  isSetting?: boolean;
  isPlus?: boolean;
  isSearch?: boolean;
  setIsOpenSearch?: (prev: boolean) => void;
  isOpenSearch?: boolean;
  setOpenPlus?: (prev: boolean) => void;
  isDots?: boolean;
  setIsDots?: (prev: boolean) => void;
};

const HeaderMobile = (props: Props) => {
  const menu = props.menu;
  const setMenu = props.setMenu;
  const setSettings = props.setSettings;
  const { userInfo, user, isLang: lang, isImage } = useAuthStore();
  const [isLang, setisLang] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  useEffect(() => {
    if (user?.email && user !== null && userInfo && !userInfo.username) {
      setName(user?.email.replace('@gmail.com', '').replace('@mail.ru', ''));
    }
    if (userInfo !== null && userInfo.username) {
      setName(userInfo.username);
    }
  }, [user]);

  const [imageSrc, setImageSrc] = useState<string>('');

  console.log(isImage);

  return (
    <div className={styles.main_container}>
      {props.isOpenSearch ? (
        <div className={styles.top_container}>
          <div className={styles.search}>
            <input type="text" placeholder="Поиск" />
            <button
              onClick={() =>
                props?.setIsOpenSearch && props?.setIsOpenSearch(false)
              }
            >
              отменить
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.top_container}>
          <div
            className={styles.mobile_profile_container}
            onClick={() => setMenu(!menu)}
          >
            {isImage === null &&
            'blob:http://localhost:7070/855e95af-d9dc-4544-a929-095f740f0acf' !==
              isImage ? (
              <img
                src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                alt="logo"
              />
            ) : (
              <img src={isImage} alt="Some description" />
            )}

            <div className={styles.mobile_profile_name}>
              <p>{name}</p>
            </div>
          </div>
          {props.isSetting && (
            <div
              className={styles.settings_container}
              onClick={() => {
                setSettings && setSettings(true);
              }}
            >
              <Image src={setting} alt="" />
              <Image src={settings} alt="" />
              <Image src={setting} alt="" />
            </div>
          )}
          {props.isPlus && (
            <div className={styles.plus_container}>
              <GoPlus
                onClick={() => props?.setOpenPlus && props?.setOpenPlus(true)}
              />
            </div>
          )}
          {props.isSearch && (
            <div className={styles.plus_container}>
              <FiSearch
                onClick={() =>
                  props?.setIsOpenSearch && props?.setIsOpenSearch(true)
                }
              />
            </div>
          )}
          {props.isDots && (
            <div className={styles.plus_container}>
              <BiDotsHorizontalRounded
                onClick={() => props?.setIsDots && props?.setIsDots(true)}
              />
            </div>
          )}
        </div>
      )}

      {props.isMenu && (
        <div className={styles.bottom_container}>
          <div className={styles.content}>
            {/* <Text id={'innovations'} /> */}
            {isLang === 'ru' ? 'Инновации' : 'innovations'}
          </div>
          <div className={styles.content}>
            {isLang === 'ru' ? 'Новости' : 'News'}
            {/* <Text id={'news'} /> */}
          </div>
          <div className={styles.content}>
            {/* <Text id={'store'} /> */}
            {isLang === 'ru' ? 'Магазин' : 'Store'}
          </div>
          <div className={styles.content}>
            {/* <Text id={'group'} /> */}
            {isLang === 'ru' ? 'Группы' : 'Group'}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
