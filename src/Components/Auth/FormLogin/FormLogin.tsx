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
  const { getLogin, user, isLang: lang } = useAuthStore();
  const [isLang, setIsLang] = useState('');

  useEffect(() => {
    setIsLang(lang);
  }, [lang]);

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

  const onSubmit = (data: any) => {
    getLogin(data.email, data.password)
  };

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
      <h1>{isLang === 'ru' ? 'Вход' : 'Log in'}</h1>
      {/* <Input type={'text'} placeholder={'Телефон или эл.почта'} /> */}
      {/* <Input type={'password'} placeholder={'Пароль'} /> */}
      <input
        className={style.input}
        type="text"
        placeholder={isLang === 'ru' ? 'Эл. Почта' : 'Email'}
        {...register('email', {
          required: true,
          pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        })}
      />
      {errors.email && errors.email.type === 'required' && (
        <p className={style.errorMsg}>
          {isLang === 'ru'
            ? 'Поле почта не заполнено'
            : 'The mail field is empty'}
        </p>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <p className={style.errorMsg}>
          {isLang === 'ru'
            ? 'ЭЛЕКТРОННЫЙ АДРЕС НЕВЕРНЫЙ.'
            : 'THE EMAIL ADDRESS IS INCORRECT.'}
        </p>
      )}
      <input
        className={style.input}
        type="password"
        placeholder={isLang === 'ru' ? 'Пароль' : 'Password'}
        {...register('password', {
          required: isLang === 'ru' ? 'Введите пароль' : 'Enter password',
          minLength: {
            value: 6,
            message:
              isLang === 'ru'
                ? 'Слишком короткий пароль'
                : 'The password is too short',
          },
          maxLength: {
            value: 10,
            message:
              isLang === 'ru'
                ? 'Слишком длинный пароль'
                : 'The password is too long',
          },
        })}
      />
      {errors.password && (
        <p className={style.errorMsg}>{errors.password.message}</p>
      )}
      <Link href={routerConstants.FORGOT_PASSWORD}>
        {isLang === 'ru' ? 'Забыли пароль?' : 'Forgot your password?'}
      </Link>
      <Button type="submit">{isLang === 'ru' ? 'Войти' : 'Login'}</Button>
      <Link href={routerConstants.REGISTRATION}>
        {isLang === 'ru' ? 'Зарегистрироваться' : 'Sign up'}
      </Link>
    </form>
  );
};
