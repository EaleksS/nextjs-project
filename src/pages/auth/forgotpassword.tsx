import React from "react";
import styles from "../../styles/ForgotPassword.module.scss";
// import Input from '@/Components/UiKit/Input/Input';
import Button from "@/Components/Auth/UiKit/Button/Button";
import { routerConstants } from "@/Constants/RouterConstants";
import Layout from "./Layout";
import { useCookies } from "react-cookie";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { authTranslate } from "@/locale/authTranslate";

const ForgotPassword = () => {
  const [cookies] = useCookies();
  return (
    <Layout title="forgot-password">
      <TranslationsProvider locales={authTranslate} language={cookies.lang}>
        <div className={"background-auth-wrapper"} />
        <div className={styles["container"]}>
          <div
            className={`auth-container ${styles["forgot-password-container"]}`}
          >
            <h1>
              <Text id={"forgotPassword"} />
            </h1>
            <span>
              <Text id={"enterPhoneOrEmail"} />
            </span>
            <input
              className={styles.input}
              type="text"
              placeholder="Телефон или эл.почта"
            />
            <Button>{cookies.lang === "en" ? "Continue" : "Продолжить"}</Button>
          </div>
        </div>
      </TranslationsProvider>
    </Layout>
  );
};

export default ForgotPassword;
