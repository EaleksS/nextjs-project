import React from 'react';
import styles from '../styles/ForgotPassword.module.scss';
import { Input } from '@/Components/UiKit/Input/Input';
import Button from '@/Components/UiKit/Button/Button';
import { routerConstants } from '@/Constants/RouterConstants';

const ForgotPassword = () => {
	return (
		<>
			<div className={'background-auth-wrapper'} />
			<div className={styles['container']}>
				<div className={`auth-container ${styles['forgot-password-container']}`}>
					<h1>Забыли пароль</h1>
					<span>Введите телефон или почту которая была использована ранее:</span>
					<Input placeholder={'Телефон или эл.почта'} type={'text'} />
					<Button>Продолжить</Button>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
