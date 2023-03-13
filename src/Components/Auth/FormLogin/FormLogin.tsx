// import Input from '../UiKit/Input/Input';
import Button from "../UiKit/Button/Button";
import { routerConstants } from "../../../Constants/RouterConstants";
import style from "./FormLogin.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/store";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLogin } = useAuthStore();

  return (
    <div className={`auth-container ${style["container"]}`}>
      <h1>Вход</h1>
      {/* <Input type={'text'} placeholder={'Телефон или эл.почта'} /> */}
      {/* <Input type={'password'} placeholder={'Пароль'} /> */}
      <input
        className={style.input}
        type="text"
        placeholder={"Телефон или эл.почта"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className={style.input}
        type="password"
        placeholder={"Пароль"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Link href={routerConstants.FORGOT_PASSWORD}>Забыли пароль?</Link>
      <Button onClick={() => getLogin(email, password)}>Войти</Button>
      <Link href={routerConstants.REGISTRATION}>Зарегистрироваться</Link>
    </div>
  );
};
