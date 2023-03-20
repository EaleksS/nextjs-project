import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import MobileMenu from '@/Components/MainPage/MobileMenu/MobileMenu';
import { useAuthStore } from '@/store/store';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Profile.module.scss';
import Layout from '../Layout';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
  const [menu, setMenu] = useState(false);
  const { getUpdateUser, userInfo, setUserInfo, isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      city: userInfo?.city === null ? '' : userInfo?.city,
      date_of_birth:
        userInfo?.date_of_birth === null ? '' : userInfo?.date_of_birth,
      email: userInfo?.email,
      firstname: userInfo?.firstname === null ? '' : userInfo?.firstname,
      lastname: userInfo?.lastname === null ? '' : userInfo?.lastname,
      phone: userInfo?.phone === null ? '' : userInfo?.phone,
      username: userInfo?.username === null ? '' : userInfo?.username,
    },
  });

  const onSubmit = (data: any) => {
    toast.success(isLang === 'ru' ? 'Данные сохранены' : 'data saved');
    setUserInfo(
      data.city,
      data.date_of_birth,
      data.email,
      data.firstname,
      userInfo !== null ? userInfo.id : null,
      userInfo !== null ? userInfo.isFirstLog : null,
      data.lastname,
      data.phone,
      userInfo !== null ? userInfo.role : null,
      userInfo !== null ? userInfo.state : null,
      data.username
    );
    getUpdateUser(
      data.city,
      data.date_of_birth,
      data.email,
      data.firstname,
      data.lastname,
      data.phone,
      userInfo !== null ? userInfo.state : null,
      data.username
    );
  };

  console.log(userInfo);

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
            <p>{isLang === 'ru' ? 'Пользователь' : 'User'}</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder={isLang === 'ru' ? 'Ваш логин' : 'Your login.'}
              {...register('username', {
                required: true,
              })}
            />
            {errors.username && errors.username.type === 'required' && (
              <p className={styles.errorMsg}>
                {isLang === 'ru'
                  ? 'Поле не заполнено'
                  : 'The field is incomplete.'}
              </p>
            )}
            <input
              type="text"
              placeholder={isLang === 'ru' ? 'Имя' : 'Name'}
              {...register('firstname', {
                required: true,
              })}
            />
            {errors.firstname && errors.firstname.type === 'required' && (
              <p className={styles.errorMsg}>
                {isLang === 'ru'
                  ? 'Поле не заполнено'
                  : 'The field is incomplete.'}
              </p>
            )}
            <input
              type="text"
              placeholder={isLang === 'ru' ? 'Фамилия' : 'Last Name.'}
              {...register('lastname', {
                required: true,
              })}
            />
            {errors.lastname && errors.lastname.type === 'required' && (
              <p className={styles.errorMsg}>
                {isLang === 'ru'
                  ? 'Поле не заполнено'
                  : 'The field is incomplete.'}
              </p>
            )}
            <input
              type="email"
              placeholder={isLang === 'ru' ? 'Эл. почта' : 'Email.'}
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <p className={styles.errorMsg}>
                {isLang === 'ru'
                  ? 'Поле не заполнено'
                  : 'The field is incomplete.'}
              </p>
            )}
            <input
              type="text"
              placeholder={isLang === 'ru' ? 'Номер Телефона' : 'Phone Number.'}
              {...register('phone', {
                required: true,
              })}
            />
            {errors.phone && errors.phone.type === 'required' && (
              <p className={styles.errorMsg}>
                {isLang === 'ru'
                  ? 'Поле не заполнено'
                  : 'The field is incomplete.'}
              </p>
            )}
            <input
              type="text"
              placeholder={isLang === 'ru' ? 'Город' : 'City.'}
              {...register('city', {
                required: true,
              })}
            />
            {errors.city && errors.city.type === 'required' && (
              <p className={styles.errorMsg}>
                {isLang === 'ru'
                  ? 'Поле не заполнено'
                  : 'The field is incomplete.'}
              </p>
            )}
            <input
              type="text"
              placeholder={isLang === 'ru' ? 'Дата рождения' : 'Date of birth.'}
              {...register('date_of_birth', {
                required: true,
              })}
            />
            {errors.date_of_birth &&
              errors.date_of_birth.type === 'required' && (
                <p className={styles.errorMsg}>
                  {isLang === 'ru'
                    ? 'Поле не заполнено'
                    : 'The field is incomplete.'}
                </p>
              )}
            {/* <input
              type="text"
              placeholder="Город"
              {...register('city', {
                required: true,
              })}
            />
            {errors.city && errors.city.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )} */}
            {/* <input
              type="text"
              placeholder="Моя семья и те люди кто к ней относится"
              {...register('family', {
                required: true,
              })}
            />
            {errors.family && errors.family.type === 'required' && (
              <p className={styles.errorMsg}>Поле не заполнено</p>
            )} */}
            <button type="submit">Сохранить</button>
          </form>
        </div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Profile;
