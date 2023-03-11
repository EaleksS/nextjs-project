import { FormControlLabel, Typography } from '@mui/material';
import React from 'react';
import styles from './CheckBox.module.scss';
import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface CheckboxPropsType extends CheckboxProps {
	label?: string | JSX.Element;
}

const CustomCheckbox = ({ label, checkedIcon, ...rest }: CheckboxPropsType) => {
	return (
    <FormControlLabel
      label={
        <Typography className={styles['check-box_label']}>{label}</Typography>
      }
      control={
        <MuiCheckbox
          {...rest}
          className={styles['check-box_root']}
          style={{ color: 'black' }}
          defaultChecked
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
      }
    />
  );
};
export default CustomCheckbox;
