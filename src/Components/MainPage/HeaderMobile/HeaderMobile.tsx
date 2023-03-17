import Image from "next/image";
import styles from "./HeaderMobile.module.scss";
import settings from "../../../Assets/images/settings.png";
import setting from "../../../Assets/images/setting.png";
import profileImg from "../../../Assets/images/profile.png";
import { GoPlus } from "react-icons/go";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { carucelTranslate } from "@/locale/carucelTranslate";
import { useCookies } from "react-cookie";
import { useState } from "react";

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
  const [cookies, setCookie, removeCookie] = useCookies();
  const menu = props.menu;
  const setMenu = props.setMenu;
  const settin = props.settin;
  const setSettings = props.setSettings;

  return (
    <TranslationsProvider locales={carucelTranslate} language={cookies.lang}>
      <div className={styles.main_container}>
        <div className={styles.top_container}>
          <div
            className={styles.mobile_profile_container}
            onClick={() => setMenu(!menu)}
          >
            <Image src={profileImg} alt="" />
            <div className={styles.mobile_profile_name}>
              <p>Имя</p>
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
            <div className={styles.content}>
              <Text id={"innovations"} />
            </div>
            <div className={styles.content}>
              <Text id={"news"} />
            </div>
            <div className={styles.content}>
              <Text id={"store"} />
            </div>
            <div className={styles.content}>
              <Text id={"group"} />
            </div>
          </div>
        )}
      </div>
    </TranslationsProvider>
  );
};

export default HeaderMobile;
