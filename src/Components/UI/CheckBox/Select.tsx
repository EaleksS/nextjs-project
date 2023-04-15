import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC, ReactNode, useState } from 'react';

interface Props {
  className: string;
}

export const SelectBox: FC = ({ className }: Props): JSX.Element => {
  const [age, setAge] = useState<string | number>('');

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  return (
    <FormControl className={className} fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={1}>Ten</MenuItem>
        <MenuItem value={2}>Twenty</MenuItem>
        <MenuItem value={3}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
