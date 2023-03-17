import React, { useState } from "react";
import styles from "./Carucel.module.scss";
import rightArrow from "../../../Assets/images/rightArrow.png";
import leftArrow from "../../../Assets/images/leftArrow.png";
import Image from "next/image";
import { useCookies } from "react-cookie";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { carucelTranslate } from "@/locale/carucelTranslate";

const Carucel = () => {
  const [moving, setMoving] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies();
  return (
    <TranslationsProvider language={cookies.lang} locales={carucelTranslate}>
      <div className={styles.container}>
        <div className={styles.arrow_cont}>
          <div
            className={styles.arrows_left}
            onClick={() => {
              if (moving < 37) {
                setMoving(moving + 37 * 2);
              }
            }}
          >
            <Image src={leftArrow} alt="arrow" />
          </div>
          <div
            className={styles.arrows_right}
            onClick={() => {
              if (moving > -37) {
                setMoving(moving - 37);
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
          <div className={styles.content}>
            <Text id={"innovations"} />
          </div>
          <div className={styles.content}>
            <Text id={"news"} />
          </div>
          <div className={styles.content}>
            <Text id={"store"} />
          </div>
          <div className={styles.content}>
            <Text id={"group"} />
          </div>
          <div className={styles.content}>
            <Text id={"fo"} />
          </div>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default Carucel;
