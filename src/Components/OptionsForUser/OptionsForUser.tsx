import styles from "./OptionsForUser.module.scss";
import arrow from "../../Assets/images/whitearrow.png";
import Image from "next/image";
import whitedoor from "../../Assets/images/go out/whitedoor.png";
import whitearrow from "../../Assets/images/go out/whitearrow.png";
import { ReactNode } from "react";

type Props = {
  menu: boolean;
  className: ReactNode;
};

const OptionsForUser = (props: Props) => {
  const menu = props.menu;
  return (
    <>
      {menu && (
        <div className={`${styles.navbar_container} ${props.className}`}>
          <div className={styles.top_container}>
            <div>
              <p>О себе</p>
              <Image src={arrow} alt="" />
            </div>
            <div>
              <p>Геолокация</p>
              <Image src={arrow} alt="" />
            </div>
            <div>
              <p>Календарь</p>
              <Image src={arrow} alt="" />
            </div>
            <div>
              <p>Консилиум</p>
              <Image src={arrow} alt="" />
            </div>
          </div>
          <div className={styles.middle_container}>
            <div>
              <p>Доступ и контроль</p>
              <Image src={arrow} alt="" />
            </div>
            <div>
              <p>Настройки</p>
              <Image src={arrow} alt="" />
            </div>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.arrow_container}>
              <p>Выход</p>
              <div className={styles.arrows}>
                <Image src={whitearrow} alt="" />
                <Image src={whitedoor} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OptionsForUser;
