import React from "react";
import styles from "../../styles/ForgotPassword.module.scss";
// import Input from '@/Components/UiKit/Input/Input';
import Button from "@/Components/Auth/UiKit/Button/Button";
import { routerConstants } from "@/Constants/RouterConstants";
import Layout from "../Layout";

const ForgotPassword = () => {
  return (
    <Layout title="forgot-password">
      <div className={"background-auth-wrapper"} />
      <div className={styles["container"]}>
        <div
          className={`auth-container ${styles["forgot-password-container"]}`}
        >
          <h1>Забыли пароль</h1>
          <span>
            Введите телефон или почту которая была использована ранее:
          </span>
          <input
            className={styles.input}
            type="text"
            placeholder="Телефон или эл.почта"
          />
          <Button>Продолжить</Button>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
