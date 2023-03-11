import React from 'react';
// import Input from '../UiKit/Input/Input';
import Button from '../UiKit/Button/Button';
import { routerConstants } from '../../Constants/RouterConstants';
import style from '../../Pages/Login/Login.module.scss';
import Link from 'next/link';

const FormForgotPassword = () => {
  return (
    <div className={`auth-container ${style['container']}`}>
      <h1>Вход</h1>
      {/* <Input placeholder={'Телефон или эл.почта'} />
      <Input type={'password'} placeholder={'Пароль'} /> */}
      <input type="text" placeholder={'Телефон или эл.почта'} />
      <input type="password" placeholder={'Пароль'} />
      <Link href={routerConstants.FORGOT_PASSWORD}>Забыли пороль ?</Link>
      <span>
        <Button>Войти</Button>
      </span>

      <Link href={routerConstants.REGISTRATION}>Зарегистрироваться</Link>
    </div>
  );
};

export default FormForgotPassword;
