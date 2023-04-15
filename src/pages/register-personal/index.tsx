import React, { FC } from 'react';
import styles from './RegisterPersonal.module.scss';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

const RegisterPersonal: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      city: '',
      date_of_birth: '',
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      username: '',
      state: '',
      center: '',
      password: '',
      timeStart: '',
      timeEnd: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success(
      '🦄 Вы подали заявку. Ваш запрос будет рассмотрен в течении 72х часов и выслан вам на почту ',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      }
    );
    // reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Box
          component="form"
          noValidate={false}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: 'grid',
            gap: '10px',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div className={styles.left}>
            <TextField
              id="outlined-basic"
              label="Имя"
              fullWidth
              variant="outlined"
              className={styles.input}
              {...register('firstname', {
                required: true,
              })}
              error={Boolean(errors.firstname)}
              helperText={
                errors.firstname?.type === 'required' && 'Поле не заполнено'
              }
            />
            <TextField
              id="outlined-basic"
              label="Фамилия"
              fullWidth
              variant="outlined"
              className={styles.input}
              {...register('lastname', {
                required: true,
              })}
              error={Boolean(errors.lastname)}
              helperText={
                errors.lastname?.type === 'required' && 'Поле не заполнено'
              }
            />
            <TextField
              id="outlined-basic"
              label="Логин"
              fullWidth
              variant="outlined"
              className={styles.input}
              {...register('username', {
                required: true,
              })}
              error={Boolean(errors.username)}
              helperText={
                errors.username?.type === 'required' && 'Поле не заполнено'
              }
            />

            <TextField
              id="outlined-basic"
              label="Страна"
              fullWidth
              variant="outlined"
              className={styles.input}
              {...register('state', {
                required: true,
              })}
              error={Boolean(errors.state)}
              helperText={
                errors.state?.type === 'required' && 'Поле не заполнено'
              }
            />
            <TextField
              id="outlined-basic"
              label="Город"
              fullWidth
              variant="outlined"
              className={styles.input}
              {...register('city', {
                required: true,
              })}
              error={Boolean(errors.city)}
              helperText={
                errors.city?.type === 'required' && 'Поле не заполнено'
              }
            />
            <TextField
              id="outlined-basic"
              label="Дата рождения"
              fullWidth
              className={styles.input}
              {...register('date_of_birth', {
                required: true,
              })}
              error={Boolean(errors.date_of_birth)}
              helperText={
                errors.date_of_birth?.type === 'required' && 'Поле не заполнено'
              }
            />
          </div>
          <div className={styles.right}>
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('email', { required: true })}
              label="Эл. Почта"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.email)}
              helperText={
                errors.email?.type === 'required' && 'Поле не заполнено'
              }
              // disabled
            />
            <TextField
              id="outlined-basic"
              label="Номер телефона"
              variant="outlined"
              fullWidth
              className={styles.input}
              {...register('phone', {
                required: true,
              })}
              error={Boolean(errors.phone)}
              helperText={
                errors.phone?.type === 'required' && 'Поле не заполнено'
              }
            />
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('center', { required: true })}
              label="Центр"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.center)}
              helperText={
                errors.center?.type === 'required' && 'Поле не заполнено'
              }
              // disabled
            />
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('timeStart', { required: true })}
              label="Начало работы"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.timeStart)}
              helperText={
                errors.timeStart?.type === 'required' && 'Поле не заполнено'
              }
              // disabled
            />
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('timeEnd', { required: true })}
              label="Конец работы"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.timeEnd)}
              helperText={
                errors.timeEnd?.type === 'required' && 'Поле не заполнено'
              }
              // disabled
            />
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('password', { required: true })}
              label="Пароль"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.password)}
              helperText={
                errors.password?.type === 'required' && 'Поле не заполнено'
              }
              // disabled
            />
          </div>
          <Button type="submit" fullWidth className={styles.btn}>
            Отправить запрос
          </Button>
        </Box>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default RegisterPersonal;
