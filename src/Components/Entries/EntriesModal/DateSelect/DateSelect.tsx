import React, { useState, FC } from 'react';
import styles from './DateSelect.module.scss';
import { DatePicker } from 'rsuite';

interface IDateSelect {
  selectedDate: null | Date;
  selectedTimeBegin: null | Date;
  selectedTimeEnd: null | Date;
  setSelectedDate: (e: any) => void;
  setSelectedTimeBegin: (e: any) => void;
  setSelectedTimeEnd: (e: any) => void;
}

const DateSelect: FC<IDateSelect> = ({
  selectedDate,
  selectedTimeBegin,
  selectedTimeEnd,
  setSelectedDate,
  setSelectedTimeBegin,
  setSelectedTimeEnd,
}) => {
  const [errormsg, setErrormsg] = useState('');

  return (
    <>
      <div className={styles.container}>
        <DatePicker
          style={{ width: '100%' }}
          placeholder="Дата:"
          value={selectedDate}
          onChange={(e: any) => {
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
          style={{ width: '100%', margin: '20px 0', position: 'static' }}
          placeholder="Начало:"
          value={selectedTimeBegin}
          onChange={(e) => setSelectedTimeBegin(e)}
          editable={false}
        />
        <DatePicker
          format="HH:mm"
          ranges={[]}
          style={{ width: '100%' }}
          placeholder="Конец:"
          value={selectedTimeEnd}
          onChange={(e) => setSelectedTimeEnd(e)}
          editable={false}
        />
      </div>
    </>
  );
};

export default DateSelect;
