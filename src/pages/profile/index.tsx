import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import { useAuthStore } from '@/store/store';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styles from '../../styles/Profile.module.scss';
import Layout from '../Layout';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [menu, setMenu] = useState(false);
  const { user, userInfo, setUserInfo } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: user?.email,
      login: userInfo.login,
      username: userInfo.username,
      lastname: userInfo.lastname,
      phone: userInfo.phone,
      disease: userInfo.disease,
      country: userInfo.country,
      city: userInfo.city,
      family: userInfo.family,
    },
  });

  const onSubmit = (data: any) => {
    toast.success('Данные сохранены');
    setUserInfo(
      data.email,
      data.login,
      data.username,
      data.lastname,
      data.phone,
      data.disease,
      data.country,
      data.city,
      data.family
    );
  };

  return (
    <Layout title="prifile">
      <div className={styles.mobile_version}>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        <div className={styles.content}>
          <div className={styles.user_info}>
            {/* <img src="/profile2.png" alt="info" /> */}
            <img
              src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
              alt="logo"
            />
            <p>Пользователь</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Ваш логин"
              {...register('login', {
                required: true,
              })}
            />
            {errors.login && errors.login.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )}
            <input
              type="text"
              placeholder="Имя"
              {...register('username', {
                required: true,
              })}
            />
            {errors.username && errors.username.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )}
            <input
              type="text"
              placeholder="Фамилия"
              {...register('lastname', {
                required: true,
              })}
            />
            {errors.lastname && errors.lastname.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )}
            <input
              type="email"
              placeholder="Эл. почта"
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )}
            <input
              type="text"
              placeholder="Номер Телефона"
              {...register('phone', {
                required: true,
              })}
            />
            {errors.phone && errors.phone.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )}
            <input
              type="text"
              placeholder="Инт. заболевание"
              {...register('disease', {
                required: true,
              })}
            />
            {errors.disease && errors.disease.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )}
            <input
              type="text"
              placeholder="Страна"
              {...register('country', {
                required: true,
              })}
            />
            {errors.country && errors.country.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )}
            <input
              type="text"
              placeholder="Город"
              {...register('city', {
                required: true,
              })}
            />
            {errors.city && errors.city.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )}
            <input
              type="text"
              placeholder="Моя семья и те люди кто к ней относится"
              {...register('family', {
                required: true,
              })}
            />
            {errors.family && errors.family.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )}
            <button type="submit">Сохранить</button>
          </form>
        </div>
        <ToastContainer />
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Profile;
