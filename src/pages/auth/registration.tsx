<<<<<<< HEAD
import React, { useState } from "react";
import styles from "../../styles/Registration.module.scss";
import Button from "@/Components/Auth/UiKit/Button/Button";
import CustomCheckbox from "@/Components/Auth/UiKit/CheckBox/CheckBox";
=======
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Registration.module.scss';
import Button from '@/Components/UiKit/Button/Button';
import CustomCheckbox from '@/Components/UiKit/CheckBox/CheckBox';
>>>>>>> a1400455976cfa5bb1fe97748e67cc0de767bed7
// import Input from '@/Components/UiKit/Input/Input';
import { routerConstants } from "@/Constants/RouterConstants";
import Link from "next/link";
import Layout from "../Layout";
import { useAuthStore } from "@/store/store";

import { useForm } from "react-hook-form";

const Registration = () => {
  const [step, setStep] = useState<1 | 2>(1);

  const { getRegister, getVerifyAccount } = useAuthStore();

  const [isPassword, setIsPassword] = useState("");

  useEffect(() => {
    // getVerifyAccount('ealkser@gmail.com');
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
<<<<<<< Updated upstream
      email: "",
      password: "",
      username: "",
      phone: "",
      repeatPassword: "",
=======
      email: '',
      password: '',
      repeatPassword: '',
>>>>>>> Stashed changes
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
          <div className={`auth-container ${styles["registration-container"]}`}>
            <h1>Выберите причину регистрации</h1>
            <div className={styles["check-box-container"]}>
              <CustomCheckbox label={"Вылечить заболевания"} />
              <CustomCheckbox label={"Наблюдение за пациентом"} />
              <CustomCheckbox label={"Другое"} />
            </div>
            <Button onClick={() => stepHandler(2)}>Продолжить</Button>
          </div>
        );
      }
      case 2: {
        return (
          <div
            className={`auth-container ${styles["registration-container"]} ${styles["registration-container__step2-container"]}`}
          >
            <h1>Регистрация</h1>
            <form
              className={styles["input-container"]}
              onSubmit={handleSubmit(onSubmit)}
            >
<<<<<<< Updated upstream
              {/* USERNAME */}
              <label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Имя"
                  {...register("username", {
                    required: "Поле имя не заполнено",
                  })}
                />
                {errors.username && (
                  <p className={styles.errorMsg}>{errors.username.message}</p>
                )}
              </label>
              {/* PHONE */}
              <label>
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="Номер телефона"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value:
                        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                      message: "неправильный номер телефона",
                    },
                  })}
                />
                {errors.phone && errors.phone.type === "required" && (
                  <p className={styles.errorMsg}>
                    Поле номер телефона не заполнено
                  </p>
                )}
                {errors.phone && errors.phone.type === "pattern" && (
                  <p className={styles.errorMsg}>неправильный номер телефона</p>
                )}
              </label>
=======
>>>>>>> Stashed changes
              {/* EMAIL */}
              <label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Почта"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className={styles.errorMsg}>Поле почта не заполнено</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className={styles.errorMsg}>ЭЛЕКТРОННЫЙ АДРЕС НЕВЕРНЫЙ.</p>
                )}
              </label>
              {/* PASSWORD AND REAPEAT PASSWORD */}
              <label>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Введите пароль"
                  {...register("password", {
                    required: "Введите пароль",
                    minLength: { value: 6, message: "Слишком короткий пароль" },
                    maxLength: { value: 10, message: "Слишком длинный пароль" },
                  })}
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
                  {...register("repeatPassword", {
                    required: "Введите пароль",
                    validate: (value) =>
                      value === isPassword || "Пароли не совпадают",
                    minLength: { value: 6, message: "Слишком короткий пароль" },
                    maxLength: { value: 10, message: "Слишком длинный пароль" },
                  })}
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
                        Я согласен с<Link href=""> Условиями соглашения</Link>
                      </>
                    }
                  />
                </div>
                <Button
                  // href={routerConstants.CONFIRM_MOBILE}
                  type="submit"
                >
                  Продолжить
                </Button>
              </div>
            </form>
          </div>
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
