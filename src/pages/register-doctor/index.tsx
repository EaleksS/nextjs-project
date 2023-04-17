import React, { FC, useEffect } from 'react';
import styles from './RegisterDoctor.module.scss';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useDoctorStore } from '@/store/DoctorStore';

const RegisterDoctor: FC = () => {
  const { isCode, getRegister } = useDoctorStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      phone: '',
      username: '',
      center: '',
      password: '',
      timeStart: '',
      timeEnd: '',
      type: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    getRegister(
      data.username,
      data.password,
      data.email,
      data.phone,
      data.timeEnd,
      data.timeStart,
      data.center,
      data.type
    );
  };

  useEffect(() => {
    if (isCode === 200 || isCode === 201) {
      toast.success(
        '🦄 Вы подали заявку. Ваш запрос будет рассмотрен в течении 72х часов и выслан вам на почту',
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
      return;
    }

    if (isCode !== null) {
      toast.error('Ошибка', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
  }, [isCode]);

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
            gridTemplateColumns: '1fr',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontSize: '20px',
              textTransform: 'uppercase',
              fontWeight: '600',
              letterSpacing: '3px',
            }}
          >
            Регистрация Доктора
          </p>
          <div className={styles.right}>
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('username', { required: true })}
              label="Логин"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.username)}
              helperText={
                errors.username?.type === 'required' && 'Поле не заполнено'
              }
            />
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
            />
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('type', { required: true })}
              label="Тип"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.type)}
              helperText={
                errors.type?.type === 'required' && 'Поле не заполнено'
              }
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

export default RegisterDoctor;
