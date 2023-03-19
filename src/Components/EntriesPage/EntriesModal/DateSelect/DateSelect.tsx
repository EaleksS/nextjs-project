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
  const [errormsg, setErrormsg] = useState('');

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
          onChange={(e: any) => {
            // e > new Date().setMonth(new Date().getMonth() + 3)
            //   ? setErrormsg('Дату можно выбрать только на 3 месяца вперед')
            //   : e > new Date().setDate(new Date().getDate() - 1)
            //   ? setSelectedDate(e) setErrormsg('')
            //   : setErrormsg('Нельзя выбрать дату только вперед');
            if (e > new Date().setMonth(new Date().getMonth() + 3)) {
              setSelectedDate(null);
              setErrormsg('Дату можно выбрать только на 3 месяца вперед');
            } else {
              if (e > new Date().setDate(new Date().getDate() - 1)) {
                setSelectedDate(e);
                setErrormsg('');
              } else {
                setSelectedDate(null);
                setErrormsg('Указана прошедшая дата');
              }
            }
          }}
          editable={false}
        />

        <p className={styles.errormsg}>{errormsg}</p>

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
