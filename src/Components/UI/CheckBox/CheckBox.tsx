import FormControlLabel from '@mui/material/FormControlLabel';
import React, { FC } from 'react';
import { IOSSwitch } from './IOSSwitch';

interface ICheckBox {
  checked: boolean;
  setChecked: (bool: boolean) => void;
}

const CheckBox: FC<ICheckBox> = ({ checked, setChecked }) => {
  return (
    <FormControlLabel
      control={
        <IOSSwitch
          sx={{ m: 1 }}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      label=""
    />
  );
};

export default CheckBox;
