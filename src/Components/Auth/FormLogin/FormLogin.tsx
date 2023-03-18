import style from "./FormLogin.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/store";
import { useForm } from "react-hook-form";
import React from "react";
import { routerConstants } from "@/Constants/RouterConstants";
import Button from "../UiKit/Button/Button";
import { useCookies } from "react-cookie";
import { Text, TranslationsProvider } from "@eo-locale/react";
import { authTranslate } from "@/locale/authTranslate";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getLogin } = useAuthStore();
  const [cookies] = useCookies();
  let fogrotten = {
    required: cookies.lang === "en" ? "Enter the password" : "Введите пароль",
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
    },
  });

  const onSubmit = (data: any) => getLogin(data.email, data.password);

  return (
    <TranslationsProvider language={cookies.lang} locales={authTranslate}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`auth-container ${style["container"]}`}
      >
        <h1>
          <Text id={"login"} />
        </h1>
        {/* <Input type={'text'} placeholder={'Телефон или эл.почта'} /> */}
        {/* <Input type={'password'} placeholder={'Пароль'} /> */}
        <input
          className={style.input}
          type="text"
          placeholder={
            cookies.lang === "en" ? "Phone or email" : "Телефон или эл.почта"
          }
          {...register("email", {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p className={style.errorMsg}>
            <Text id={"mailNotField"} />
          </p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className={style.errorMsg}>
            <Text id={"mailNotCorrect"} />
          </p>
        )}
        <input
          className={style.input}
          type="password"
          placeholder={cookies.lang === "en" ? "Password" : "Пароль"}
          {...register("password")}
        />
        {errors.password && (
          <p className={style.errorMsg}>{errors.password.message}</p>
        )}
        <Link href={routerConstants.FORGOT_PASSWORD}>
          <Text id={"forgotPassword"} />?
        </Link>
        <Button type="submit">
          {cookies.lang === "en" ? "Enter" : "Войти"}
        </Button>
        <Link href={routerConstants.REGISTRATION}>
          <Text id={"register"} />
        </Link>
      </form>
    </TranslationsProvider>
  );
};
