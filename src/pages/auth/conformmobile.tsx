import React, { useEffect, useState } from "react";
import styles from "../../styles/ConformMobile.module.scss";
import Button from "@/Components/Auth/UiKit/Button/Button";
import { routerConstants } from "@/Constants/RouterConstants";
import OtpInput from "react-otp-input";
import Link from "next/link";
import Layout from "../Layout";
import { useCookies } from "react-cookie";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { authTranslate } from "@/locale/authTranslate";

const ConformMobile = () => {
  const [seconds, setSeconds] = useState(60);
  const [otp, setOtp] = useState<string>("");

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  });
  const handleChangOtp = (otp: string) => {
    setOtp(otp);
  };
  const [cookies] = useCookies();
  return (
    <Layout title="Confirm Mobile">
      <TranslationsProvider language={cookies.lang} locales={authTranslate}>
        <div className={"background-auth-wrapper"} />
        <div className={styles["container"]}>
          <div
            className={`auth-container ${styles["confirm-mobile-container"]}`}
          >
            <h1>{`00:${seconds}`}</h1>
            <span>
              <Text id={"enterCode"} /> +1 111 111 11 11
            </span>
            <div className={styles["phone-number-block"]}>
              <OtpInput
                inputStyle={styles["phone-number-block_otp"]}
                value={otp}
                onChange={handleChangOtp}
                numInputs={4}
                separator={""}
              />
            </div>
            <div className={styles["link-block"]}>
              <Link
                className={styles["link-block_link"]}
                href={routerConstants.FORGOT_PASSWORD}
              >
                <Text id={"accesskey"} />
              </Link>
            </div>
            <Button>{cookies.lang === "en" ? "Enter" : "Войти"}</Button>
          </div>
        </div>
      </TranslationsProvider>
    </Layout>
  );
};

export default ConformMobile;
