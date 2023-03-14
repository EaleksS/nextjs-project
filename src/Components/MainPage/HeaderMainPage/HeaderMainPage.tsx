<<<<<<< Updated upstream:src/Components/MainPage/HeaderMainPage/HeaderMainPage.tsx
import Image from "next/image";
import styles from "./HeaderMainPage.module.scss";
import settings from "../../../Assets/images/settings.png";
import setting from "../../../Assets/images/setting.png";
import profileImg from "../../../Assets/images/profile.png";
=======
import Image from 'next/image';
import profileImg from '../../Assets/images/profile.png';
import styles from './HeaderMainPage.module.scss';
import settings from '../../Assets/images/settings.png';
import setting from '../../Assets/images/setting.png';
>>>>>>> Stashed changes:src/Components/HeaderMainPage/HeaderMainPage.tsx

type Props = {
  setSettings: any;
  settin: boolean;
  menu: boolean;
  setMenu: any;
  isMenu: boolean;
};

const HeaderMainPage = (props: Props) => {
  const menu = props.menu;
  const setMenu = props.setMenu;
  const settin = props.settin;
  const setSettings = props.setSettings;

  return (
    <div className={styles.main_container}>
      <div className={styles.top_container}>
        <div
          className={styles.mobile_profile_container}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <Image src={profileImg} alt="" />
          <div className={styles.mobile_profile_name}>
            <p>asinast.petro</p>
          </div>
        </div>
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
  );
};

export default HeaderMainPage;
