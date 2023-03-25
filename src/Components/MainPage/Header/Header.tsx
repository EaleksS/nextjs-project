import Image from 'next/image';
import styles from './Header.module.scss';
import Carucel from '../Carucel/Carucel';
import settings from '../../../Assets/images/settings.png';
import setting from '../../../Assets/images/setting.png';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setSettings?: Dispatch<SetStateAction<boolean>>;
};

const Header = (props: Props) => {
  const setSettings = props.setSettings;

  return (
    <div className={styles.header_container}>
      <div className={styles.content_container}>
        <Carucel />
        <div
          className={styles.settings_container}
          onClick={() => {
            setSettings && setSettings((prev) => !prev);
          }}
        >
          <Image src={setting} alt="" />
          <Image src={settings} alt="" />
          <Image src={setting} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
