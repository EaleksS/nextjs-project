import React, { useEffect, useState } from 'react';
import styles from './ConformMobile.module.scss';
import Button from '@/Components/Auth/UiKit/Button/Button';
import { routerConstants } from '@/Constants/RouterConstants';
import OtpInput from 'react-otp-input';
import Link from 'next/link';
import Layout from './Layout';
import { useAuthStore } from '@/store/store';

const ConformMobile = () => {
  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  const [seconds, setSeconds] = useState(60);
  const [otp, setOtp] = useState<string>('');

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  });
  const handleChangOtp = (otp: string) => {
    setOtp(otp);
  };

  return (
    <Layout title="Confirm Mobile">
      <div className={'background-auth-wrapper'} />
      <div className={styles['container']}>
        <div className={`auth-container ${styles['confirm-mobile-container']}`}>
          <h1>{`00:${seconds}`}</h1>
          <span>
            {/* <Text id={'enterCode'} /> */}
            {isLang === 'ru'
              ? 'Введите код который был отправлен вам на'
              : 'Enter the code that was sent to you on'}
            +1 111 111 11 11
          </span>
          <div className={styles['phone-number-block']}>
            <OtpInput
              inputStyle={styles['phone-number-block_otp']}
              value={otp}
              onChange={handleChangOtp}
              numInputs={4}
              separator={''}
            />
          </div>
          <div className={styles['link-block']}>
            <Link
              className={styles['link-block_link']}
              href={routerConstants.FORGOT_PASSWORD}
            >
              {/* <Text id={'accesskey'} /> */}
              {isLang === 'ru'
                ? 'Код доступа не был получен?'
                : 'The access code was not received?'}
            </Link>
          </div>
          <Button>{isLang === 'ru' ? 'Войти' : 'Enter'}</Button>
        </div>
      </div>
    </Layout>
  );
};

export default ConformMobile;
