import { Input } from '../UiKit/Input/Input';
import Button from '../UiKit/Button/Button';
import { routerConstants } from '../../Constants/RouterConstants';
import style from './FormLogin.module.scss';
import Link from 'next/link';

export const FormLogin = () => {
  return (
    <div className={`auth-container ${style['container']}`}>
      <h1>Вход</h1>
      <Input
        type={'text'}
        placeholder={'Телефон или эл.почта'}
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
      />
      <Link href={routerConstants.FORGOT_PASSWORD}>Забыли пароль?</Link>
      <Button>Войти</Button>
      <Link href={routerConstants.REGISTRATION}>Зарегистрироваться</Link>
    </div>
  );
};
