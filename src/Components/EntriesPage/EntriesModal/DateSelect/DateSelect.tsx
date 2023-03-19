import React, { useState } from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from './DateSelect.module.scss';
import { DatePicker } from 'rsuite';

const DateSelect = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeBegin, setSelectedTimeBegin] = useState<Date | null>(null);
  const [selectedTimeEnd, setSelectedTimeEnd] = useState<Date | null>(null);

  return (
    <>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <div className={styles.container}>
        {/* <DatePicker
            className={`${styles.DatePicker} ${
              selectedDate !== null && styles.Active
            }`}
            label="Дата:"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
          /> */}
        {/* <TimePicker
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
          /> */}

        <DatePicker
          style={{ width: 300 }}
          placeholder="Дата:"
          value={selectedDate}
          onChange={(e: any) => setSelectedDate(e)}
          editable={false}
        />
        <DatePicker
          format="HH:mm"
          ranges={[]}
          style={{ width: 300, margin: '20px 0' }}
          placeholder="Начало:"
          value={selectedTimeBegin}
          onChange={(e) => setSelectedTimeBegin(e)}
          editable={false}
        />
        <DatePicker
          format="HH:mm"
          ranges={[]}
          style={{ width: 300 }}
          placeholder="Конец:"
          value={selectedTimeEnd}
          onChange={(e) => setSelectedTimeEnd(e)}
          editable={false}
        />
      </div>
      {/* </LocalizationProvider> */}
    </>
  );
};

export default DateSelect;
