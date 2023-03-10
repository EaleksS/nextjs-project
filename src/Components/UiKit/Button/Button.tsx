import { Button, ButtonProps } from '@mui/material';
import React from 'react';
import styles from './Button.module.scss';

export type IButton = ButtonProps & {
	className?: string;
	children: string;
};

const CustomButton = ({ children, className, ...rest }: IButton): React.ReactElement => {
	const classNames = `${styles['button']} ${styles[className ? className : '']}`;
	return (
		<Button variant="contained" {...rest} className={classNames}>
			<span className={styles['button_text']}>{children}</span>
		</Button>
	);
};
export default CustomButton;
