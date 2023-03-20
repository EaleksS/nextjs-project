import React, { useEffect, useState } from 'react';
import styles from '../../styles/ForgotPassword.module.scss';
// import Input from '@/Components/UiKit/Input/Input';
import Button from '@/Components/Auth/UiKit/Button/Button';
import { routerConstants } from '@/Constants/RouterConstants';
import Layout from './Layout';
import { useAuthStore } from '@/store/store';

const ForgotPassword = () => {
  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  return (
    <Layout title="forgot-password">
      <div className={'background-auth-wrapper'} />
      <div className={styles['container']}>
        <div
          className={`auth-container ${styles['forgot-password-container']}`}
        >
          <h1>
            {/* <Text id={"forgotPassword"} /> */}
            {isLang === 'ru' ? 'Забыли пароль' : 'Forgot your password'}
          </h1>
          <span>
            {isLang === 'ru'
              ? 'Введите телефон или почту которая была использована ранее:'
              : 'Enter the phone number or email that was used earlier:'}
            {/* <Text id={"enterPhoneOrEmail"} /> */}
          </span>
          <input
            className={styles.input}
            type="text"
            placeholder={
              isLang === 'ru' ? 'Телефон или эл.почта' : 'Phone or email'
            }
          />
          <Button>{isLang === 'ru' ? 'Продолжить' : 'Continue'}</Button>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
