import { messageTranslate } from "@/locale/messageTranslate";
import styles from "./Navigation.module.scss";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { useCookies } from "react-cookie";

type Props = {
  activeNav: string;
  setActiveNav: any;
};

const Navigation = (props: Props) => {
  const activeNav = props.activeNav;
  const setActiveNav = props.setActiveNav;
  const [cookies] = useCookies();
  return (
    <TranslationsProvider language={cookies.lang} locales={messageTranslate}>
      <div className={styles.nav}>
        <button
          className={activeNav === "Контакты" ? styles.active_nav : " "}
          onClick={() => setActiveNav("Контакты")}
        >
          <Text id={"contact"} />
        </button>
        <button
          className={activeNav === "Специалисты" ? styles.active_nav : " "}
          onClick={() => setActiveNav("Специалисты")}
        >
          <Text id={"specialists"} />
        </button>
      </div>
    </TranslationsProvider>
  );
};

export default Navigation;
