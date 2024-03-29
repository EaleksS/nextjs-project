import React from "react";
import styles from "./ExtraCall.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import car from "../../Assets/images/car.png";
import hospitalImg from "../../Assets/images/hospital.png";
import { useRouter } from "next/router";

type Props = {};

const Hospital = (props: Props) => {
  const router = useRouter();
  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.cont}
        animate={{
          transition: { duration: 0.6 },
          y: 20,
          opacity: 1,
        }}
      >
        <p>Экстренные контакты</p>
        <div className={styles.container_for_image}>
          <div
            className={styles.image_cont}
            onClick={() => {
              router.push("/call/1");
            }}
          >
            <Image src={car} alt="" className={styles.car_img} />
          </div>
          <div
            className={styles.image_cont}
            onClick={() => {
              router.push("/call/2");
            }}
          >
            <Image src={hospitalImg} alt="" className={styles.hospital_img} />
          </div>
        </div>
      </motion.div>
      <motion.div
        className={styles.go_out_cont}
        onClick={() => {
          router.push("/");
        }}
        animate={{
          transition: { duration: 0.6, delay: 0.2 },
          opacity: 1,
          y: -5,
        }}
      />
    </motion.div>
  );
};

export default Hospital;
