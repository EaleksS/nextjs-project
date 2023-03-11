import React, { useState } from 'react';
import styles from '../../styles/Registration.module.scss';
import Button from '@/Components/UiKit/Button/Button';
import CustomCheckbox from '@/Components/UiKit/CheckBox/CheckBox';
import { Input } from '@/Components/UiKit/Input/Input';
import { routerConstants } from '@/Constants/RouterConstants';
import Link from 'next/link';
import { Layout } from '../Layout';

const Registration = () => {
  const [step, setStep] = useState<1 | 2>(1);

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

            <div className={styles['input-container']}>
              <Input placeholder={'Имя'} />
              <Input placeholder={'Номер телефона'} />
              <Input placeholder={'Почта'} />
              <Input placeholder={'Введите пароль'} />
              <Input placeholder={'Повторите пароль'} />
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
              <Button href={routerConstants.CONFIRM_MOBILE}>Продолжить</Button>
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
