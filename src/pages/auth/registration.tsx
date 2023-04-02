import React, { useEffect, useState } from 'react';
import styles from './Registration.module.scss';
import Button from '@/Components/Auth/UiKit/Button/Button';
import CustomCheckbox from '@/Components/Auth/UiKit/CheckBox/CheckBox';
import { routerConstants } from '@/Constants/RouterConstants';
import Link from 'next/link';
import Layout from './Layout';
import { useAuthStore } from '@/store/store';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Registration = () => {
  const [step, setStep] = useState<1 | 2>(1);

  const { getRegister, statusRegister, setStatusRegister, getConfirmRegister } =
    useAuthStore();
  const [isPassword, setIsPassword] = useState('');

  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  const router = useRouter();

  let enterPassword: object = {
    required: isLang === 'ru' ? 'Введите пароль' : 'Enter the password',
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
        isLang === 'ru' ? 'Слишком длинный пароль' : 'The password is too long',
    },
  };

  let repeatPasswordObject = {
    required: isLang === 'ru' ? 'Введите пароль' : 'Enter the password',
    validate: (value: string) =>
      value === String(isPassword) ||
      (isLang === 'ru' ? 'Пароли не совпадают' : 'Passwords do not match'),
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
        isLang === 'ru' ? 'Слишком длинный пароль' : 'The password is too long',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  useEffect(() => {
    if (statusRegister === 200) {
      setTimeout(() => {
        router.push('/auth/login');
      }, 6000);
      toast.success(
        isLang === 'ru'
          ? 'Подтверждение отправлено в почту'
          : 'Confirmation sent in the mail'
      );
      setStatusRegister();
    }
    if (statusRegister === 208) {
      toast(
        isLang === 'ru'
          ? 'Registration request made. Check your email.'
          : 'Запрос на регистрацию сделан. Проверьте почту'
      );
      setStatusRegister();
    }
  }, [statusRegister]);

  const onSubmit = (data: any) => {
    getRegister(data.email, data.password);
    setTimeout(() => {
      getConfirmRegister(data.email);
    }, 10000);
  };

  const registrationStep = () => {
    const stepHandler = (step: 1 | 2) => {
      setStep(step);
    };
    switch (step) {
      case 1: {
        return (
          <div className={`auth-container ${styles['registration-container']}`}>
            <h1>
              {isLang === 'ru'
                ? 'Выберите причину регистрации'
                : 'Select the reason for registration'}
            </h1>
            <div className={styles['check-box-container']}>
              <CustomCheckbox
                label={
                  isLang === 'ru' ? 'Вылечить заболевания' : 'Cure diseases'
                }
              />
              <CustomCheckbox
                label={
                  isLang === 'ru'
                    ? 'Наблюдение за пациентом'
                    : 'Patient monitoring'
                }
              />
              <CustomCheckbox label={isLang === 'ru' ? 'Другое' : 'Other'} />
            </div>
            <Button onClick={() => stepHandler(2)}>
              {isLang === 'ru' ? 'Продолжить' : 'Continue'}
            </Button>
          </div>
        );
      }
      case 2: {
        return (
          <div
            className={`auth-container ${styles['registration-container']} ${styles['registration-container__step2-container']}`}
          >
            <h1>
              {/* <Text id={'registration'} /> */}
              {isLang === 'ru' ? 'Регистрация' : 'Registration'}
            </h1>
            <form
              className={styles['input-container']}
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* EMAIL */}
              <label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder={isLang === 'ru' ? 'Почта' : 'Email'}
                  {...register('email', {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email && errors.email.type === 'required' && (
                  <p className={styles.errorMsg}>
                    {isLang === 'ru'
                      ? 'Поле почта не заполнено'
                      : 'The mail field is not filled in'}
                  </p>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                  <p className={styles.errorMsg}>
                    {isLang === 'ru'
                      ? 'ЭЛЕКТРОННЫЙ АДРЕС НЕВЕРНЫЙ.'
                      : 'THE EMAIL ADDRESS IS NOT CORRECT.'}
                  </p>
                )}
              </label>
              {/* PASSWORD AND REAPEAT PASSWORD */}
              <label>
                <input
                  className={styles.input}
                  type="password"
                  placeholder={
                    isLang === 'ru' ? 'Введите пароль' : 'Enter the password'
                  }
                  {...register('password', enterPassword)}
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
                  placeholder={
                    isLang === 'ru' ? 'Повторите пароль' : 'Repeat password'
                  }
                  {...register('repeatPassword', repeatPasswordObject)}
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
                        {/* <Text id={'iAgree'} /> */}
                        {isLang === 'ru' ? 'Я согласен с ' : 'I agree to'}
                        &nbsp;
                        <Link href="">
                          {/* <Text id={'termsOfTheAgreement'} /> */}
                          {isLang === 'ru'
                            ? ' Условиями соглашения'
                            : 'the terms of the agreement'}
                        </Link>
                      </>
                    }
                  />
                </div>
                <Button
                  // href={routerConstants.CONFIRM_MOBILE}
                  type="submit"
                >
                  {isLang === 'ru' ? 'Продолжить' : 'Continue'}
                </Button>
              </div>
            </form>
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
