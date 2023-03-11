import React, { useState } from "react";
import styles from "./Carucel.module.scss";
import rightArrow from "../../Assets/images/rightArrow.png";
import leftArrow from "../../Assets/images/leftArrow.png";
import Image from "next/image";

const Carucel = () => {
  const [moving, setMoving] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.arrow_cont}>
        <div
          className={styles.arrows_left}
          onClick={() => {
            if (moving < 75) {
              setMoving(moving + 15);
            }
          }}
        >
          <Image src={leftArrow} alt="arrow" />
        </div>
        <div
          className={styles.arrows_right}
          onClick={() => {
            if (moving > -60) {
              setMoving(moving - 15);
            }
          }}
        >
          <Image src={rightArrow} alt="arrow" />
        </div>
      </div>
      <div
        style={{ transform: `translateX(${moving}px)` }}
        className={styles.content_container}
      >
        <div className={styles.content}>1</div>
        <div className={styles.content}>Инновации</div>
        <div className={styles.content}>Новости</div>
        <div className={styles.content}>Магазин</div>
        <div className={styles.content}>Группы</div>
        <div className={styles.content}>Фо</div>
      </div>
    </div>
  );
};

export default Carucel;
