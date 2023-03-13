// import Input from '../UiKit/Input/Input';
<<<<<<< HEAD:src/Components/Auth/FormLogin/FormLogin.tsx
import Button from "../UiKit/Button/Button";
import { routerConstants } from "../../../Constants/RouterConstants";
import style from "./FormLogin.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/store";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

=======
import Button from '../UiKit/Button/Button';
import { routerConstants } from '../../Constants/RouterConstants';
import style from './FormLogin.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { useAuthStore } from '@/store/store';
import { useForm } from 'react-hook-form';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> a1400455976cfa5bb1fe97748e67cc0de767bed7:src/Components/FormLogin/FormLogin.tsx
  const { getLogin } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => getLogin(data.email, data.password);

  return (
<<<<<<< HEAD:src/Components/Auth/FormLogin/FormLogin.tsx
    <div className={`auth-container ${style["container"]}`}>
=======
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`auth-container ${style['container']}`}
    >
>>>>>>> a1400455976cfa5bb1fe97748e67cc0de767bed7:src/Components/FormLogin/FormLogin.tsx
      <h1>Вход</h1>
      {/* <Input type={'text'} placeholder={'Телефон или эл.почта'} /> */}
      {/* <Input type={'password'} placeholder={'Пароль'} /> */}
      <input
        className={style.input}
        type="text"
<<<<<<< HEAD:src/Components/Auth/FormLogin/FormLogin.tsx
        placeholder={"Телефон или эл.почта"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
=======
        placeholder={'Телефон или эл.почта'}
        {...register('email', {
          required: true,
          pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        })}
>>>>>>> a1400455976cfa5bb1fe97748e67cc0de767bed7:src/Components/FormLogin/FormLogin.tsx
      />
      {errors.email && errors.email.type === 'required' && (
        <p className={style.errorMsg}>Поле почта не заполнено</p>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <p className={style.errorMsg}>ЭЛЕКТРОННЫЙ АДРЕС НЕВЕРНЫЙ.</p>
      )}
      <input
        className={style.input}
        type="password"
<<<<<<< HEAD:src/Components/Auth/FormLogin/FormLogin.tsx
        placeholder={"Пароль"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
=======
        placeholder={'Пароль'}
        {...register('password', {
          required: 'Введите пароль',
          minLength: { value: 6, message: 'Слишком короткий пароль' },
          maxLength: { value: 10, message: 'Слишком длинный пароль' },
        })}
>>>>>>> a1400455976cfa5bb1fe97748e67cc0de767bed7:src/Components/FormLogin/FormLogin.tsx
      />
      {errors.password && (
        <p className={style.errorMsg}>{errors.password.message}</p>
      )}
      <Link href={routerConstants.FORGOT_PASSWORD}>Забыли пароль?</Link>
      <Button type="submit">Войти</Button>
      <Link href={routerConstants.REGISTRATION}>Зарегистрироваться</Link>
    </form>
  );
};
