import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import { useAuthStore } from '@/store/store';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Profile.module.scss';
import Layout from '../Layout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AiOutlineDownload } from 'react-icons/ai';
import Sidebar from '@/Components/Sidebar/Sidebar';
import img_logo from '../../Assets/images/user-139.svg';
import Image from 'next/image';

const Profile = () => {
  const [menu, setMenu] = useState(false);
  const {
    getUpdateUser,
    userInfo,
    setUserInfo,
    isLang: lang,
    getAddImagerUser,
    isImage,
  } = useAuthStore();

  const [isLang, setisLang] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = () => {
    const fileList = fileInputRef.current?.files;
    if (fileList && userInfo) {
      const formData = new FormData();
      formData.append('file', fileList[0]);
      formData.append('id', String(userInfo.id));
      console.log(formData);
      getAddImagerUser(formData);
    }
  };

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
      state: userInfo?.state === null ? '' : userInfo?.state,
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
      data.state,
      data.username
    );
    getUpdateUser(
      data.city,
      data.date_of_birth,
      data.email,
      data.firstname,
      data.lastname,
      data.phone,
      data.state,
      data.username,
      userInfo !== null ? userInfo.role : null
    );
  };

  // console.log(selectImage);

  return (
    <Layout title="prifile">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div>profile</div>
      </div>
      <div className={styles.mobile_version}>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        <div className={styles.content}>
          <div className={styles.user_info}>
            {/* <img src="/profile2.png" alt="info" /> */}
            <div className={styles.imgLogo}>
              {isImage ? (
                <Image src={isImage} alt="logo" className={styles.img} />
              ) : (
                <Image className={styles.img} src={img_logo} alt="logo" />
              )}
              <div className="input__wrapper">
                <input
                  className="input input__file"
                  type="file"
                  name="file"
                  id="input__file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileInputChange}
                  ref={fileInputRef}
                />
                <label htmlFor="input__file" className="input__file-button">
                  <span className="input__file-icon-wrapper">
                    <AiOutlineDownload style={{ fontSize: '30px' }} />
                  </span>
                  <span className="input__file-button-text">
                    Выберите картинку
                  </span>
                </label>
              </div>
            </div>
            <p>{userInfo?.role ? userInfo.role : 'Пользователь'}</p>
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
              placeholder={isLang === 'ru' ? 'Страна' : 'City.'}
              {...register('state', {
                required: true,
              })}
            />
            {errors.state && errors.state.type === 'required' && (
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
