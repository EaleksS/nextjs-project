import React from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../../Assets/images/whitearrow.png";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className={styles.header}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <div className={styles.go_back_con}>
          <Image src={arrow} alt="" />
          <p>Назад</p>
        </div>
      </Link>
      <div className={styles.input_container}>
        <input />
        <p>Найти</p>
      </div>
    </div>
  );
};

export default NavBar;
