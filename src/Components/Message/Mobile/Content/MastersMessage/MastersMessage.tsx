import styles from "./MastersMessage.module.scss";

type Props = {
  index: number;
};

const MastersMessage = (props: Props) => {
  const index = props.index;
  return (
    <div className={styles.contact} key={index}>
      <img src="/profile.png" alt="logo" />
      <div className={styles.info}>
        <h3>Ангелина Лангуева</h3>
        <div className={styles.truncate}>
          <p className={styles.truncate_text}>Не было сообщений</p>
        </div>
      </div>
      <div className={styles.notification}></div>
    </div>
  );
};

export default MastersMessage;
