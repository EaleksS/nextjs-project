import React, { useState } from 'react';
import { Input } from '../UiKit/Input/Input';
// import { Link } from 'react-router-dom';
import Button from '../UiKit/Button/Button';
import { routerConstants } from '../../Constants/RouterConstants';
import style from './FormLogin.module.scss';
import Link from 'next/link';
// import useStore from 'src/store/store';

export const FormLogin = () => {
  const [valueEmail, setValueEmail] = useState('');
  const [valuePass, setValuePass] = useState('');

  return (
    <div className={`auth-container ${style['container']}`}>
      <h1>Вход</h1>
      <Input
        type={'text'}
        placeholder={'Телефон или эл.почта'}
        // onChange={(e) => setValueEmail(e.target.value)}
        // value={valueEmail}
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
        // onChange={(e) => setValuePass(e.target.value)}
        // value={valuePass}
      />
      <Link href={routerConstants.FORGOT_PASSWORD}>Забыли пароль ?</Link>

      <Button>Войти</Button>

      <Link href={routerConstants.REGISTRATION}>Зарегистрироваться</Link>
    </div>
  );
};
