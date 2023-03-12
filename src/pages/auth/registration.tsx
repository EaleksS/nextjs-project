import React, { useState } from 'react';
import styles from '../../styles/Registration.module.scss';
import Button from '@/Components/UiKit/Button/Button';
import CustomCheckbox from '@/Components/UiKit/CheckBox/CheckBox';
// import Input from '@/Components/UiKit/Input/Input';
import { routerConstants } from '@/Constants/RouterConstants';
import Link from 'next/link';
import Layout from '../Layout';
<<<<<<< Updated upstream
=======
import { useAuthStore } from '@/store/store';

import { useForm } from 'react-hook-form';
>>>>>>> Stashed changes

const Registration = () => {
  const [step, setStep] = useState<1 | 2>(1);

<<<<<<< Updated upstream
=======
  const { getRegister } = useAuthStore();

  const [isPassword, setIsPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      username: '',
      phone: '',
      repeatPassword: '',
    },
  });
  const onSubmit = (data: any) =>
    getRegister(data.email, data.phone, data.username, data.password);

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

            <div className={styles['input-container']}>
              {/* <Input placeholder={'Имя'} />
              <Input placeholder={'Номер телефона'} />
              <Input placeholder={'Почта'} />
              <Input placeholder={'Введите пароль'} />
              <Input placeholder={'Повторите пароль'} /> */}
              <input className={styles.input} type="text" placeholder="Имя" />
              <input
                className={styles.input}
                type="text"
                placeholder="Номер телефона"
              />
              <input className={styles.input} type="mail" placeholder="Почта" />
              <input
                className={styles.input}
                type="password"
                placeholder="Введите пароль"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Повторите пароль"
              />
            </div>
            <div
              className={
                styles['registration-container__step2-container__footer-block']
              }
=======
            <form
              className={styles['input-container']}
              onSubmit={handleSubmit(onSubmit)}
>>>>>>> Stashed changes
            >
              {/* USERNAME */}
              <label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Имя"
                  {...register('username', {
                    required: 'Поле имя не заполнено',
                  })}
                />
                {errors.username && (
                  <p className={styles.errorMsg}>{errors.username.message}</p>
                )}
              </label>
              {/* PHONE */}
              <label>
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="Номер телефона"
                  {...register('phone', {
                    required: true,
                    pattern: {
                      value:
                        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                      message: 'неправильный номер телефона',
                    },
                  })}
                />
                {errors.phone && errors.phone.type === 'required' && (
                  <p className={styles.errorMsg}>
                    Поле номер телефона не заполнено
                  </p>
                )}
                {errors.phone && errors.phone.type === 'pattern' && (
                  <p className={styles.errorMsg}>неправильный номер телефона</p>
                )}
              </label>
              {/* EMAIL */}
              <label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Почта"
                  {...register('email', {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email && errors.email.type === 'required' && (
                  <p className={styles.errorMsg}>Поле почта не заполнено</p>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                  <p className={styles.errorMsg}>ЭЛЕКТРОННЫЙ АДРЕС НЕВЕРНЫЙ.</p>
                )}
              </label>
              {/* PASSWORD AND REAPEAT PASSWORD */}
              <label>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Введите пароль"
                  {...register('password', {
                    required: 'Введите пароль',
                    minLength: { value: 6, message: 'Слишком короткий пароль' },
                    maxLength: { value: 10, message: 'Слишком длинный пароль' },
                  })}
                  onChange={(e) => setIsPassword(e.target.value)}
                />
                {errors.password && (
                  <p className={styles.errorMsg}>{errors.password.message}</p>
                )}
              </label>
              <label>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Повторите пароль"
                  {...register('repeatPassword', {
                    required: 'Введите пароль',
                    validate: (value) =>
                      value === isPassword || 'Пароли не совпадают',
                    minLength: { value: 6, message: 'Слишком короткий пароль' },
                    maxLength: { value: 10, message: 'Слишком длинный пароль' },
                  })}
                />
                {errors.repeatPassword && (
                  <p className={styles.errorMsg}>
                    {errors.repeatPassword.message}
                  </p>
                )}
              </label>

              <div
                className={
                  styles[
                    'registration-container__step2-container__footer-block'
                  ]
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
                  // href={routerConstants.CONFIRM_MOBILE}
                  type="submit"
                >
                  Продолжить
                </Button>
              </div>
<<<<<<< Updated upstream
              <Button href={routerConstants.CONFIRM_MOBILE}>Продолжить</Button>
            </div>
=======
            </form>
>>>>>>> Stashed changes
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
