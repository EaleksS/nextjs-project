import { BsSearch } from "react-icons/bs";
import styles from "./Content.module.scss";

type Props = {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
};

const ContentDesktop = (props: Props) => {
  const activeNav = props.activeNav;
  const setActiveNav = props.setActiveNav;
  return (
    <div className={styles.content}>
      <div className={styles.chat}>
        <label>
          <BsSearch className={styles.BsSearch} />
          <input type="text" placeholder="Поиск сообщений..." />
        </label>

        <div className={styles.nav}>
          <button
            className={activeNav === "Контакты" ? styles.active_nav : " "}
            onClick={() => setActiveNav("Контакты")}
          >
            Контакты
          </button>
          <button
            className={activeNav === "Специалисты" ? styles.active_nav : " "}
            onClick={() => setActiveNav("Специалисты")}
          >
            Специалисты
          </button>
        </div>
      </div>
      <div className={styles.search}>
        <h1>Укажите профиль которому вы хотите отправить сообщение</h1>
        <label>
          <BsSearch className={styles.BsSearch} />
          <input type="text" placeholder="Поиск..." />
        </label>
      </div>
    </div>
  );
};

export default ContentDesktop;
