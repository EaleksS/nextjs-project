import Image from 'next/image';
import styles from './HeaderMobile.module.scss';
import settings from '../../Assets/images/settings.png';
import setting from '../../Assets/images/setting.png';
import profileImg from '../../Assets/images/profile.png';
import { GoPlus } from 'react-icons/go';
import { useAuthStore } from '@/store/store';
import { useEffect, useState } from 'react';

type Props = {
  setSettings?: any;
  settin?: boolean;
  menu?: boolean;
  setMenu?: any;
  isMenu?: boolean;
  isSetting?: boolean;
  isPlus?: boolean;
  setOpenPlus?: (prev: boolean) => void;
};

const HeaderMobile = (props: Props) => {
  const menu = props.menu;
  const setMenu = props.setMenu;
  const settin = props.settin;
  const setSettings = props.setSettings;
  const { userInfo, user } = useAuthStore();
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
      <div className={styles.main_container}>
        <div className={styles.top_container}>
          <div
            className={styles.mobile_profile_container}
            onClick={() => setMenu(!menu)}
          >
            <img
              src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
              alt="logo"
            />
            {/* <Image src={profileImg} alt="" /> */}
            <div className={styles.mobile_profile_name}>
              <p>{name}</p>
            </div>
          </div>
          {props.isSetting && (
            <div
              className={styles.settings_container}
              onClick={() => {
                setSettings(!settin);
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
        </div>
        {props.isMenu && (
          <div className={styles.bottom_container}>
            <div className={styles.content}>Инновации</div>
            <div className={styles.content}>Новости</div>
            <div className={styles.content}>Магазин</div>
            <div className={styles.content}>Группы</div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderMobile;
