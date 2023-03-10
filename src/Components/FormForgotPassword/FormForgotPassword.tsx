import React from 'react';
import { Input } from '../UiKit/Input/Input';
// import { Link, useNavigate } from 'react-router-dom';
import Button from '../UiKit/Button/Button';
import { routerConstants } from '../../Constants/RouterConstants';
import style from '../../Pages/Login/Login.module.scss';
import Link from 'next/link';

const FormForgotPassword = () => {
  // const navigate = useNavigate();
  // const navigateForgotPasswordHandler = () => {
  // 	return navigate(routerConstants.FORGOT_PASSWORD);
  // };

  return (
    <div className={`auth-container ${style['container']}`}>
      <h1>Вход</h1>
      <Input placeholder={'Телефон или эл.почта'} />
      <Input type={'password'} placeholder={'Пароль'} />
      <Link href={routerConstants.FORGOT_PASSWORD}>Забыли пороль ?</Link>
      <span>
        <Button>Войти</Button>
      </span>

      <Link href={'/login'}>Зарегистрироваться</Link>
    </div>
  );
};

export default FormForgotPassword;
