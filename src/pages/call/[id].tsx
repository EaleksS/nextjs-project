import { useRouter } from "next/router";
import React from "react";
import styles from "./Ids.module.scss";
import car from "../../Assets/images/car.png";
import Image from "next/image";

type Props = {};

const Message = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      {id === "1" && (
        <div className={styles.content_container}>
          <div className={styles.header_container}>
            <div className={styles.image_cont}>
              <Image src={car} alt="" />
            </div>
            <p>Перепроверте свои данные</p>
          </div>
          <div className={styles.main_container}>
            <div className={styles.input_container}>
              <div className={styles.top_container}>
                <div>
                  <p>Имя</p>
                  <input />
                </div>
                <div>
                  <p>Фамилия</p>
                  <input />
                </div>
              </div>
              <div className={styles.bottom_container}>
                <div>
                  <p>Дата рождения</p>
                  <input type="date" />
                </div>
                <div>
                  <p>Заболевание</p>
                  <input />
                </div>
              </div>
            </div>
            <div className={styles.check_number}>
              <p>Перепроверьте свой номер</p>
              <div className={styles.input_cont}>
                <input className={styles.region_input} />
                <input className={styles.number_input} />
              </div>
            </div>
            <div className={styles.button_container}>
              <button>Позвонить сейчас</button>
            </div>
          </div>
        </div>
      )}
      {id === "2" && <div>{id}</div>}
    </div>
  );
};

export default Message;
