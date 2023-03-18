import Layout from "./Layout";
import styles from "../styles/Main.module.scss";
import NavBar from "@/Components/NavBar/NavBar";
import Header from "@/Components/MainPage/Header/Header";
import SettingsProfile from "@/Components/MainPage/SettingsProfile/SettingsProfile";
import OptionsForUser from "@/Components/MainPage/OptionsForUser/OptionsForUser";
import { useState } from "react";
import FooterMobile from "@/Components/FooterMobile/FooterMobile";
import SettingsMainPageMobile from "@/Components/MainPage/SettigsMainPageMobile/SettingsMainPageMobile";
import MobileMenu from "@/Components/MainPage/MobileMenu/MobileMenu";
import { AnimatePresence } from "framer-motion";
import HeaderMobile from "@/Components/MainPage/HeaderMobile/HeaderMobile";
import { useCookies } from "react-cookie";
const Main = () => {
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [hiddenNavBar, setHiddenNavBar] = useState(false);
  if (!cookies.lang) {
    setCookie("lang", "en");
  }

  return (
    <Layout title="Main Page">
      <div className={styles.container}>
        <NavBar
          menu={menu}
          setMenu={setMenu}
          setHiddenNavBar={setHiddenNavBar}
          hiddenNavBar={hiddenNavBar}
        />
        <div className={styles.main_container}>
          <Header setSettings={setSettings} settin={settings} />
          <div className={styles.content}>
            {hiddenNavBar && <OptionsForUser menu={hiddenNavBar} />}
            <div className={styles.content_container}>ad</div>
            {settings && <SettingsProfile />}
          </div>
        </div>
      </div>
      <div className={styles.mobile_version}>
        <AnimatePresence>
          {settings && (
            <SettingsMainPageMobile
              settings={settings}
              setSettings={setSettings}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMobile
          setSettings={setSettings}
          settin={settings}
          menu={menu}
          setMenu={setMenu}
          isMenu={true}
          isSetting={true}
        />
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Main;
