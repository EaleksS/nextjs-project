import Image from "next/image";
import styles from "./NavBar.module.scss";
import call from "../../Assets/images/extraCall.png";
import profileImg from "../../Assets/images/profile.png";
import home from "../../Assets/images/home.png";
import find from "../../Assets/images/find.png";
import message from "../../Assets/images/message.png";
import arrow from "../../Assets/images/go out/arrow.png";
import door from "../../Assets/images/go out/door.png";

type Props = {
  menu: boolean;
  setMenu: any;
};

const NavBar = (props: Props) => {
  const setMenu = props.setMenu;
  const menu = props.menu;
  return (
    <div className={styles.navbar_container}>
      <div className={styles.find_container}>
        <Image src={call} alt="call" className={styles.img} />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <div className={styles.navbar_container_content}>
          <div className={styles.profile}>
            <div
              className={styles.profile_container}
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <Image src={profileImg} alt="" />
              <div className={styles.profile_name}>
                <p>Имя</p>
                <p>Фамилия</p>
              </div>
            </div>
          </div>
          <div className={styles.navigation_container}>
            <div className={styles.cont_nav}>
              <div className={styles.content_nav}>
                <Image src={home} alt="" />
                Главная страница
              </div>
              <div className={styles.content_nav}>
                <Image src={find} alt="" />
                Поиск
              </div>
              <div className={styles.content_nav}>
                <Image src={message} alt="" />
                Сообщения
              </div>
            </div>
            <div className={styles.go_out_cont}>
              Выход
              <div className={styles.go_out_img}>
                <Image src={arrow} alt="" />
                <Image src={door} alt="" />
              </div>
            </div>
          </div>
        </div>
        {menu && <div className={styles.line}></div>}
      </div>
    </div>
  );
};

export default NavBar;
