import { Layout } from './Layout';
import style from '../styles/Login.module.scss';
import { FormLogin } from '@/Components/FormLogin/FormLogin';
import doctorsImages from '@/Assets/Images/doctors.png';
import Image from 'next/image';

export default function Login() {
  return (
    <>
      <Layout title="Login">
        <div className={'background-auth-wrapper'} />
        <div className={style.container}>
          <div className={style['login']}>
            <div className={style['login__images-container']}>
              <Image
                className={style['login__images-container_doctors']}
                src={doctorsImages}
                alt={'doctors'}
              />
            </div>
            <FormLogin />
          </div>
          <div className={style['mobile-container']}>
            <h1>Pre-Recover</h1>
            <FormLogin />
          </div>
        </div>
      </Layout>
    </>
  );
}
