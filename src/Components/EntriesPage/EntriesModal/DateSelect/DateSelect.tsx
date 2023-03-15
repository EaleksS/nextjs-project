import React, { useState } from 'react';
import {
  LocalizationProvider,
  TimePicker,
  MobileTimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from './DateSelect.module.scss';

const DateSelect = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeBegin, setSelectedTimeBegin] = useState<Date | null>(null);
  const [selectedTimeEnd, setSelectedTimeEnd] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <DatePicker
          className={`${styles.DatePicker} ${
            selectedDate !== null && styles.Active
          }`}
          label="Дата:"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
        <TimePicker
          className={`${styles.TimePicker} ${
            selectedTimeBegin !== null && styles.Active
          }`}
          label="Начало:"
          value={selectedTimeBegin}
          onChange={(newValue) => setSelectedTimeBegin(newValue)}
        />
        <MobileTimePicker
          className={`${styles.MobileTimePicker} ${
            selectedTimeEnd !== null && styles.Active
          }`}
          label="Конец:"
          value={selectedTimeEnd}
          onChange={(newValue) => setSelectedTimeEnd(newValue)}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateSelect;
