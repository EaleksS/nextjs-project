import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import DateSelect from './DateSelect/DateSelect';
import styles from './EntriesModal.module.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
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

const EntriesModal = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.block}>
          <label>
            <BsSearch className={styles.BsSearch} />
            <input type="text" placeholder="Поиск..." />
          </label>
          <input type="text" placeholder="Страна:" />
          <input type="text" placeholder="Город:" />
          <input type="text" placeholder="Центр:" />
          <input type="text" placeholder="Записаться к:" />
          <input type="text" placeholder="Язык визита:" />
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
          </div>
        </div>
        <div className={styles.block}>
          <input
            className={styles.label}
            type="text"
            placeholder="Введите название визита"
          />
          <DateSelect />
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
            <button>Создать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntriesModal;
