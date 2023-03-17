import { BsSearch } from "react-icons/bs";
import styles from "./Content.module.scss";
import { useCookies } from "react-cookie";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { messageTranslate } from "@/locale/messageTranslate";

type Props = {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
};

const ContentDesktop = (props: Props) => {
  const [cookies] = useCookies();
  const activeNav = props.activeNav;
  const setActiveNav = props.setActiveNav;

  return (
    <TranslationsProvider language={cookies.lang} locales={messageTranslate}>
      <div className={styles.content}>
        <div className={styles.chat}>
          <label>
            <BsSearch className={styles.BsSearch} />
            <input
              type="text"
              placeholder={
                cookies.lang === "en" ? "Find message" : "Найти сообщение"
              }
            />
          </label>

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
        </div>
        <div className={styles.search}>
          <h1>
            <Text id={"choice"} />
          </h1>
          <label>
            <BsSearch className={styles.BsSearch} />
            <input
              type="text"
              placeholder={cookies.lang === "en" ? "Search..." : "Поиск..."}
            />
          </label>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ContentDesktop;
