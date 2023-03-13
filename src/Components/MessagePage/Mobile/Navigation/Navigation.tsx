import styles from "./Navigation.module.scss";

type Props = {
  activeNav: string;
  setActiveNav: any;
};

const Navigation = (props: Props) => {
  const activeNav = props.activeNav;
  const setActiveNav = props.setActiveNav;
  return (
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
  );
};

export default Navigation;
