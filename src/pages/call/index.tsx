import React from "react";
import styles from "../../styles/ExtraCall.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import car from "../../Assets/images/car.png";
import hospitalImg from "../../Assets/images/hospital.png";
import Link from "next/link";

type Props = {};

const hospital = (props: Props) => {
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
          <Link href="/call/1">
            <div className={styles.image_cont}>
              <Image src={car} alt="" className={styles.car_img} />
            </div>
          </Link>
          <Link href="/call/2">
            <div className={styles.image_cont}>
              <Image src={hospitalImg} alt="" className={styles.hospital_img} />
            </div>
          </Link>
        </div>
      </motion.div>
      <Link href="/">
        <motion.div
          className={styles.go_out_cont}
          animate={{
            transition: { duration: 0.6, delay: 0.2 },
            opacity: 1,
            y: -5,
          }}
        />
      </Link>
    </motion.div>
  );
};

export default hospital;
