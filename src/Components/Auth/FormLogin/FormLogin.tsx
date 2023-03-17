import style from './FormLogin.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/store';
import { useForm } from 'react-hook-form';
import React from 'react';
import { routerConstants } from '@/Constants/RouterConstants';
import Button from '../UiKit/Button/Button';
import { useRouter } from 'next/router';

export const FormLogin = () => {
  const { getLogin, user } = useAuthStore();
  const router = useRouter();

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

  useEffect(() => {
    if (user !== null) {
      router.push('/');
    }
  }, [user]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`auth-container ${style['container']}`}
    >
      <h1>Вход</h1>
      {/* <Input type={'text'} placeholder={'Телефон или эл.почта'} /> */}
      {/* <Input type={'password'} placeholder={'Пароль'} /> */}
      <input
        className={style.input}
        type="text"
        placeholder={'Телефон или эл.почта'}
        {...register('email', {
          required: true,
          pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        })}
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
        placeholder={'Пароль'}
        {...register('password', {
          required: 'Введите пароль',
          minLength: { value: 6, message: 'Слишком короткий пароль' },
          maxLength: { value: 10, message: 'Слишком длинный пароль' },
        })}
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
