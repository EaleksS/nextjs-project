import React, { FC, useEffect } from 'react';
import styles from './RegisterCenter.module.scss';
import { Box, Button, TextField, TextareaAutosize } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useCenterStore } from '@/store/CenterStore';

const RegisterCenter: FC = () => {
  const { isCode, getRegisterCentre } = useCenterStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      city: '',
      rating: '',
      state: '',
      center: '',
      address: '',
      description: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    getRegisterCentre(
      data.address,
      data.city,
      data.description,
      data.center,
      data.rating,
      data.state
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
            Регистрация Центра
          </p>
          <div className={styles.right}>
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('center', { required: true })}
              label="Название центра"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.center)}
              helperText={
                errors.center?.type === 'required' && 'Поле не заполнено'
              }
            />
            <TextField
              id="outlined-basic"
              label="Страна"
              variant="outlined"
              fullWidth
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
              fullWidth
              {...register('city', { required: true })}
              label="Город"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.city)}
              helperText={
                errors.city?.type === 'required' && 'Поле не заполнено'
              }
            />
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('address', { required: true })}
              label="Адрес"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.address)}
              helperText={
                errors.address?.type === 'required' && 'Поле не заполнено'
              }
            />
            <TextField
              id="outlined-basic"
              fullWidth
              {...register('rating', { required: true })}
              label="Рейтинг"
              variant="outlined"
              className={styles.input}
              error={Boolean(errors.rating)}
              helperText={
                errors.rating?.type === 'required' && 'Поле не заполнено'
              }
            />
            <TextareaAutosize
              aria-label="Описание"
              minRows={2}
              maxRows={4}
              placeholder="Описание"
              style={{
                width: '100%',
                resize: 'none',
                outline: 'none',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '1rem',
                borderColor: 'rgba(0,0,0,.2)',
              }}
              {...register('description', { required: 'Поле не заполнено' })}
            />
            <span
              style={{
                marginTop: '-7px',
                marginLeft: '14px',
                fontSize: '0.85rem',
                fontWeight: '400',
                color: '#d32f2f',
              }}
            >
              {errors.description &&
                errors.description.type === 'required' &&
                errors.description.message}
            </span>
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

export default RegisterCenter;
