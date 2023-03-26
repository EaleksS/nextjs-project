import React, { useState } from "react";
import styles from "./CenterInfo.module.scss";
import Image from "next/image";
import arrow from "../../../Assets/images/whitearrow.png";

type Props = {};

const CenterInfo = (props: Props) => {
  const array = [
    { name: "Специалист1" },
    { name: "Специалист2" },
    { name: "Специалист2" },
    { name: "Специалист2" },
    { name: "Специалист2" },
    { name: "Специалист2" },
    { name: "Специалист2" },
    { name: "Специалист2" },
    { name: "Специалист2" },
    { name: "Специалист3" },
    { name: "Специалист4" },
    { name: "Специалист5" },
    { name: "Специалист6" },
    { name: "Специалист7" },
    { name: "Специалист8" },
    { name: "Специалист9" },
  ];
  const offset = window.screen.width;
  const lenght = array.length * 300;
  const [moving, setMoving] = useState(0);
  const leftClickHandle = () => {
    if (offset <= 600) {
      if (moving < 0) {
        setMoving(moving + 300);
      }
    }
    if (offset > 800) {
      if (array.length >= 5) {
        if (moving <= -300) {
          setMoving(moving + 300);
          console.log(moving);
        }
      }
    }
  };
  const rightClickHandle = () => {
    if (offset <= 600) {
      if (moving > -lenght + 300) {
        setMoving(moving - 300);
      }
    }
    if (offset > 800) {
      if (array.length >= 5) {
        if (moving != -(lenght - 1200)) {
          setMoving(moving - 300);
        }
      }
    }
  };
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
          <div className={styles.left_arrow} onClick={leftClickHandle}>
            <Image src={arrow} alt="none" />
          </div>
          <div className={styles.container}>
            <div
              style={{
                transform: `translateX(${moving}px)`,
                display: "flex",
                transition: "0.5s",
              }}
            >
              {array.map((el, index) => (
                <div className={styles.specialist_info} key={index}>
                  <div
                    className={styles.img_specialist}
                    onClick={() => {
                      console.log(moving);
                    }}
                  />
                  <p>{el.name}</p>
                  <p>Пациентов: </p>
                  <p>Вылечилось: </p>
                  <button>Выбрать</button>
                </div>
              ))}
            </div>
            <div className={styles.right_arrow}>
              <div onClick={rightClickHandle}>
                <Image src={arrow} alt="none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterInfo;
