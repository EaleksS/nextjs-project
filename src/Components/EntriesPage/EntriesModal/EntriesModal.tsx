import React, { useState, FC } from 'react';
import { BsSearch } from 'react-icons/bs';
import DateSelect from './DateSelect/DateSelect';
import styles from './EntriesModal.module.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import { motion } from 'framer-motion';
import { useEntriesStore } from '@/store/entriesStore';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#FF8181' : '#FF8181',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
interface IEntriesModal {
  setOpenPlus: (prev: boolean) => void;
}

const EntriesModal: FC<IEntriesModal> = ({ setOpenPlus }) => {
  const { addEntries } = useEntriesStore();

  const [isOnline, setIsOnline] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [center, setCenter] = useState('');
  const [enroll, setEnroll] = useState('');
  const [language, setLanguage] = useState('');
  const [visitName, setVisitName] = useState('');

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeBegin, setSelectedTimeBegin] = useState<Date | null>(null);
  const [selectedTimeEnd, setSelectedTimeEnd] = useState<Date | null>(null);

  const handleCreate = () => {
    if (
      country &&
      city &&
      center &&
      enroll &&
      language &&
      visitName &&
      selectedDate &&
      selectedTimeBegin &&
      selectedTimeEnd
    ) {
      addEntries({
        id: Math.random(),
        name: visitName,
        lead: enroll,
        specialty: 'Врач',
        date: selectedDate
          ? `${selectedDate?.getDate()}/${
              selectedDate?.getMonth() + 1
            }/${selectedDate?.getFullYear()}`
          : '',
        begin: `${selectedTimeBegin?.getHours()}:${selectedTimeBegin?.getMinutes()}`,
        end: `${selectedTimeEnd?.getHours()}:${selectedTimeEnd?.getMinutes()}`,
        address: `${country}, ${city}`,
        translator: checked1,
        giveOneDayNotice: checked2,
        lang: language,
        center: center,
      });
      setOpenPlus(false);
    }
  };

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => setOpenPlus(false)}
    >
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.block}>
          <label>
            <BsSearch className={styles.BsSearch} />
            <input
              type="text"
              placeholder="Страна Город и тд Центр неврологии"
            />
          </label>
          {/* <input
            type="text"
            placeholder="Страна:"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            placeholder="Город:"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Центр:"
            value={center}
            onChange={(e) => setCenter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Записаться к:"
            value={enroll}
            onChange={(e) => setEnroll(e.target.value)}
          />
          <input
            type="text"
            placeholder="Язык визита:"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <div className={styles.visit}>
            <p>Визит:</p>
            <div>
              <button
                className={isOnline ? styles.active : ' '}
                onClick={() => setIsOnline(true)}
              >
                Онлайн
              </button>
              <button
                className={!isOnline ? styles.active : ' '}
                onClick={() => setIsOnline(false)}
              >
                Офлайн
              </button>
            </div>
          </div> */}
        </div>
        <div className={styles.block}>
          <input
            className={styles.label}
            type="text"
            placeholder="Введите название визита"
            value={visitName}
            onChange={(e) => setVisitName(e.target.value)}
          />
          <DateSelect
            selectedDate={selectedDate}
            selectedTimeBegin={selectedTimeBegin}
            selectedTimeEnd={selectedTimeEnd}
            setSelectedDate={setSelectedDate}
            setSelectedTimeBegin={setSelectedTimeBegin}
            setSelectedTimeEnd={setSelectedTimeEnd}
          />
          <div className={styles.radio}>
            <div>
              <p>Требуется ли переводчик:</p>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked1}
                    onChange={(e) => setChecked1(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div>
              <p>Уведомить за день:</p>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked2}
                    onChange={(e) => setChecked2(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div>
              <p>Добавить аккаунт:</p>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked3}
                    onChange={(e) => setChecked3(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
            <div>
              <p>Прикрепить файл:</p>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked4}
                    onChange={(e) => setChecked4(e.target.checked)}
                  />
                }
                label=""
              />
            </div>
          </div>
          <div className={styles.create}>
            <button
              onClick={() => handleCreate()}
              className={
                country &&
                city &&
                center &&
                enroll &&
                language &&
                visitName &&
                selectedDate &&
                selectedTimeBegin &&
                selectedTimeEnd
                  ? styles.active
                  : ''
              }
            >
              Создать
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EntriesModal;
