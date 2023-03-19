import React, { useEffect, useState } from "react";
import styles from "../../styles/Registration.module.scss";
import Button from "@/Components/Auth/UiKit/Button/Button";
import CustomCheckbox from "@/Components/Auth/UiKit/CheckBox/CheckBox";
import { routerConstants } from "@/Constants/RouterConstants";
import Link from "next/link";
import Layout from "./Layout";
import { useAuthStore } from "@/store/store";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { authTranslate } from "@/locale/authTranslate";

const Registration = () => {
  const [step, setStep] = useState<1 | 2>(1);

  const { getRegister, getVerifyAccount } = useAuthStore();
  const [cookies] = useCookies();
  const [isPassword, setIsPassword] = useState("");
  let enterPassword: object = {
    required: cookies.lang === "en" ? "Enter the password" : "Введите пароль",
    minLength: {
      value: 6,
      message: "Слишком короткий пароль",
    },
    maxLength: {
      value: 10,
      message: "Слишком длинный пароль",
    },
  };

  let repeatPasswordObject = {
    required: cookies.lang === "en" ? "Enter the password" : "Введите пароль",
    validate: (value: string) =>
      value === isPassword || cookies.lang === "en"
        ? "Passwords don't match"
        : "Пароли не совпадают",
    minLength: {
      value: 6,
      message:
        cookies.lang === "en"
          ? "The password is too short"
          : "Слишком короткий пароль",
    },
    maxLength: {
      value: 10,
      message:
        cookies.lang === "en"
          ? "The password is too long"
          : "Слишком длинный пароль",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (data: any) => getRegister(data.email, data.password);

  const registrationStep = () => {
    const stepHandler = (step: 1 | 2) => {
      setStep(step);
    };
    switch (step) {
      case 1: {
        return (
          <TranslationsProvider language={cookies.lang} locales={authTranslate}>
            <div
              className={`auth-container ${styles["registration-container"]}`}
            >
              <h1>
                <Text id={"reason"} />
              </h1>
              <div className={styles["check-box-container"]}>
                <CustomCheckbox
                  label={
                    cookies.lang === "en"
                      ? "Cure diseases"
                      : "Вылечить заболевания"
                  }
                />
                <CustomCheckbox
                  label={
                    cookies.lang === "en"
                      ? "Patient monitoring"
                      : "Наблюдение за пациентом"
                  }
                />
                <CustomCheckbox label={"Другое"} />
              </div>
              <Button onClick={() => stepHandler(2)}>
                {cookies.lang === "en" ? "Continue" : "Продолжить"}
              </Button>
            </div>
          </TranslationsProvider>
        );
      }
      case 2: {
        return (
          <TranslationsProvider language={cookies.lang} locales={authTranslate}>
            <div
              className={`auth-container ${styles["registration-container"]} ${styles["registration-container__step2-container"]}`}
            >
              <h1>
                <Text id={"registration"} />
              </h1>
              <form
                className={styles["input-container"]}
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* EMAIL */}
                <label>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder={cookies.lang === "en" ? "Email" : "Почта"}
                    {...register("email", {
                      required: true,
                      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className={styles.errorMsg}>
                      <Text id={"mailNotField"} />
                    </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className={styles.errorMsg}>
                      <Text id={"mailNotCorrect"} />
                    </p>
                  )}
                </label>
                {/* PASSWORD AND REAPEAT PASSWORD */}
                <label>
                  <input
                    className={styles.input}
                    type="password"
                    placeholder={
                      cookies.lang === "en"
                        ? "Enter the password"
                        : "Введите пароль"
                    }
                    {...register("password", enterPassword)}
                    onChange={(e) => setIsPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className={styles.errorMsg}>{errors.password.message}</p>
                  )}
                </label>
                <label>
                  <input
                    className={styles.input}
                    type="password"
                    placeholder="Повторите пароль"
                    {...register("repeatPassword", repeatPasswordObject)}
                  />
                  {errors.repeatPassword && (
                    <p className={styles.errorMsg}>
                      {errors.repeatPassword.message}
                    </p>
                  )}
                </label>

                <div
                  className={
                    styles[
                      "registration-container__step2-container__footer-block"
                    ]
                  }
                >
                  <div
                    className={
                      styles[
                        "registration-container__step2-container__footer-block__policy-block"
                      ]
                    }
                  >
                    <CustomCheckbox
                      label={
                        <>
                          <Text id={"iAgree"} />
                          &nbsp;
                          <Link href="">
                            <Text id={"termsOfTheAgreement"} />
                          </Link>
                        </>
                      }
                    />
                  </div>
                  <Button
                    // href={routerConstants.CONFIRM_MOBILE}
                    type="submit"
                  >
                    {cookies.lang === "en" ? "Continue" : "Продолжить"}
                  </Button>
                </div>
              </form>
            </div>
          </TranslationsProvider>
        );
      }
    }
  };
  return (
    <Layout title="Registration">
      <div className={"background-auth-wrapper"} />
      <div className={styles["container"]}>{registrationStep()}</div>
    </Layout>
  );
};

export default Registration;
