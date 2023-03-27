import { IOSSwitch } from '@/Components/CheckBox/IOSSwitch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import DateSelect from '../DateSelect/DateSelect';
import styles from './ModalDots.module.scss';

interface IModalDots {
  setIsDots: (prev: boolean) => void;
}

const ModalDots: FC<IModalDots> = (props) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const [visitName, setVisitName] = useState('');

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeBegin, setSelectedTimeBegin] = useState<Date | null>(null);
  const [selectedTimeEnd, setSelectedTimeEnd] = useState<Date | null>(null);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
      onClick={() => props.setIsDots(false)}
    >
      <div
        className={styles.containerContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.content}>
          <div className={styles.visitInput}>
            <input
              type="text"
              placeholder="Введите название визита"
              value={visitName}
              onChange={(e) => setVisitName(e.target.value)}
            />
          </div>

          <DateSelect
            selectedDate={selectedDate}
            selectedTimeBegin={selectedTimeBegin}
            selectedTimeEnd={selectedTimeEnd}
            setSelectedDate={setSelectedDate}
            setSelectedTimeBegin={setSelectedTimeBegin}
            setSelectedTimeEnd={setSelectedTimeEnd}
          />
          <div className={styles.checkbox}>
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
          <div className={styles.btn}>
            <button>Создать</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalDots;
