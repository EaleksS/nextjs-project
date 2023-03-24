import React, { useState } from "react";
import styles from "./CenterInfo.module.scss";
import Image from "next/image";
import arrow from "../../../Assets/images/whitearrow.png";

type Props = {};

const CenterInfo = (props: Props) => {
  const array = [
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
    { name: "Специалист" },
  ];
  const [moving, setMoving] = useState(0);
  return (
    <div className={styles.center_info_container}>
      <div className={styles.cont}>
        <p className={styles.main_text}>Центр:</p>
        <div className={styles.main_info_container}>
          <div className={styles.img_and_text_container}>
            <div className={styles.img} />
            <p>Название</p>
          </div>
          <div className={styles.info_container}>
            <p>Страна: Россия</p>
            <p>Город: Санкт-Петербург</p>
            <p>Часовой пояс: GSM (+7)</p>
            <p>Время работы: 09:00 - 15:00</p>
          </div>
          <div className={styles.write_container}>
            <p>Записаться в центр</p>
          </div>
        </div>
        <div className={styles.specialist_container}>
          <p className={styles.text_specialist}>Специалисты:</p>
          <div className={styles.container}>
            {array.map((el) => (
              <div className={styles.specialist_info}>
                <div className={styles.img_specialist} />
                <p>{el.name}</p>
                <p>Пациентов: </p>
                <p>Вылечилось: </p>
                <button>Выбрать</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterInfo;
