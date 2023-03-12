import React, { useState } from 'react';
import styles from '../../styles/Registration.module.scss';
import Button from '@/Components/UiKit/Button/Button';
import CustomCheckbox from '@/Components/UiKit/CheckBox/CheckBox';
// import Input from '@/Components/UiKit/Input/Input';
import { routerConstants } from '@/Constants/RouterConstants';
import Link from 'next/link';
import Layout from '../Layout';
import { getConfirmRegister, getRegisterRequest } from '@/Actions/authRequest';

const Registration = () => {
  const [step, setStep] = useState<1 | 2>(1);

  const [isEmail, setIsEmail] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [isRepeatPassword, setIsRepeatPassword] = useState('');
  const [isPhone, setIsPhone] = useState('');
  const [isUsername, setIsUsername] = useState('');
  const [isError, setIsError] = useState('');

  const handleClick = () => {
    if (isEmail && isPassword === isRepeatPassword && isPhone && isUsername) {
      setIsError('')
      getRegisterRequest(isEmail, isPassword, isPhone, isUsername);
      setTimeout(() => {
        getConfirmRegister(isEmail, isPassword, isPhone, isUsername);
      }, 2000);
    } else {
      setIsError('Заполните поля правильно');
    }
  };

  const registrationStep = () => {
    const stepHandler = (step: 1 | 2) => {
      setStep(step);
    };
    switch (step) {
      case 1: {
        return (
          <div className={`auth-container ${styles['registration-container']}`}>
            <h1>Выберите причину регистрации</h1>
            <div className={styles['check-box-container']}>
              <CustomCheckbox label={'Вылечить заболевания'} />
              <CustomCheckbox label={'Наблюдение за пациентом'} />
              <CustomCheckbox label={'Другое'} />
            </div>
            <Button onClick={() => stepHandler(2)}>Продолжить</Button>
          </div>
        );
      }
      case 2: {
        return (
          <div
            className={`auth-container ${styles['registration-container']} ${styles['registration-container__step2-container']}`}
          >
            <h1>Регистрация</h1>
            <h2 style={{ color: 'red' }}>{isError}</h2>
            <div className={styles['input-container']}>
              {/* <Input placeholder={'Имя'} />
              <Input placeholder={'Номер телефона'} />
              <Input placeholder={'Почта'} />
              <Input placeholder={'Введите пароль'} />
              <Input placeholder={'Повторите пароль'} /> */}
              <input
                className={styles.input}
                type="text"
                placeholder="Имя"
                value={isUsername}
                onChange={(e) => setIsUsername(e.target.value)}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Номер телефона"
                value={isPhone}
                onChange={(e) => setIsPhone(e.target.value)}
              />
              <input
                className={styles.input}
                type="mail"
                placeholder="Почта"
                value={isEmail}
                onChange={(e) => setIsEmail(e.target.value)}
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Введите пароль"
                value={isPassword}
                onChange={(e) => setIsPassword(e.target.value)}
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Повторите пароль"
                value={isRepeatPassword}
                onChange={(e) => setIsRepeatPassword(e.target.value)}
              />
            </div>
            <div
              className={
                styles['registration-container__step2-container__footer-block']
              }
            >
              <div
                className={
                  styles[
                    'registration-container__step2-container__footer-block__policy-block'
                  ]
                }
              >
                <CustomCheckbox
                  label={
                    <>
                      Я согласен с<Link href=""> Условиями соглашения</Link>
                    </>
                  }
                />
              </div>
              <Button
                href={''
                  // isEmail &&
                  // isPassword === isRepeatPassword &&
                  // isPhone &&
                  // isUsername
                  //   ? routerConstants.CONFIRM_MOBILE
                  //   : '' 
                }
                onClick={handleClick}
              >
                Продолжить
              </Button>
            </div>
          </div>
        );
      }
    }
  };
  return (
    <Layout title="Registration">
      <div className={'background-auth-wrapper'} />
      <div className={styles['container']}>{registrationStep()}</div>
    </Layout>
  );
};

export default Registration;
