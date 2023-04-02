import React, { useState, FC } from 'react';
import { BsSearch } from 'react-icons/bs';
import DateSelect from './DateSelect/DateSelect';
import styles from './EntriesModal.module.scss';
import { motion } from 'framer-motion';
import { useEntriesStore } from '@/store/entriesStore';
import CheckBox from '@/Components/UI/CheckBox/CheckBox';

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
              <CheckBox checked={checked1} setChecked={setChecked1} />
            </div>
            <div>
              <p>Уведомить за день:</p>
              <CheckBox checked={checked2} setChecked={setChecked2} />
            </div>
            <div>
              <p>Добавить аккаунт:</p>
              <CheckBox checked={checked3} setChecked={setChecked3} />
            </div>
            <div>
              <p>Прикрепить файл:</p>
              <CheckBox checked={checked4} setChecked={setChecked4} />
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
