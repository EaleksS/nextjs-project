// import { IconButton, InputAdornment } from '@mui/material';
// import { TextFieldProps } from '@mui/material/TextField/TextField';
import React from 'react';

// import styles from './Input.module.scss';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { OutlinedInput } from '@material-ui/core';
// import { OutlinedInputProps } from '@material-ui/core/OutlinedInput/OutlinedInput';

// export interface CustomInputProps extends OutlinedInputProps, React.AriaAttributes {
// 	label?: string;
// 	error?: boolean;
// 	errorMessage?: string;
// }

// const Input = React.forwardRef(
// 	(
// 		{
// 			error,
// 			className,
// 			errorMessage,
// 			label,
// 			type = 'text',
// 			style,
// 			onChange,
// 			...rest
// 		}: CustomInputProps & TextFieldProps,
// 		ref,
// 	): React.ReactElement => {
// 		const classNames = `${styles['input']} ${styles[className ? className : '']}`;
// 		const [showPassword, setShowPassword] = useState(true);
// 		const [value, setValue] = useState<number | string>();
// 		const handleClickShowPassword = () => {
// 			setShowPassword(true);
// 		};
// 		const handleMouseDownPassword = () => {
// 			setShowPassword(false);
// 		};
// 		const checkType =
// 			type === 'password' && showPassword ? 'password' : type === 'number' ? 'number' : 'text';
// 		const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
// 			onChange && onChange(e);
// 			setValue(type === 'number' ? +e.target.value : e.target.value);
// 		};
// 		return (
// 			<>
// 				<OutlinedInput
// 					onChange={handleChange}
// 					fullWidth
// 					classes={{ notchedOutline: styles['input-notchedOutline'], root: styles['input-root'] }}
// 					label={label}
// 					style={{ color: '#454545', ...style }}
// 					error={error && error}
// 					className={classNames}
// 					type={checkType}
// 					value={value}
// 					endAdornment={
// 						type === 'password' && (
// 							<InputAdornment position="end">
// 								<IconButton
// 									aria-label="toggle password visibility"
// 									onClick={handleClickShowPassword}
// 									onMouseDown={handleMouseDownPassword}
// 									sx={{
// 										color: '#454545',
// 									}}
// 									edge="end"
// 								>
// 									{showPassword ? <VisibilityOff /> : <Visibility />}
// 								</IconButton>
// 							</InputAdornment>
// 						)
// 					}
// 					{...rest}
// 				/>
// 			</>
// 		);
// 	},
// );

// export default Input;
