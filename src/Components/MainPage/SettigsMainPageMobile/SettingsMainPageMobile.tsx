import { AnimatePresence, motion } from 'framer-motion';
import styles from './SettingsMainPageMobile.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { Checkbox } from 'rsuite';
import { useState } from 'react';

type Props = {
  settings: boolean;
  setSettings: any;
};

const SettingsMainPageMobile = (props: Props) => {
  const settings = props.settings;
  const setSettings = props.setSettings;
  
  const [checked1, sethandleChange1] = useState(false);
  const [checked2, sethandleChange2] = useState(false);
  const [checked3, sethandleChange3] = useState(false);
  const [checked4, sethandleChange4] = useState(false);
  const [checked5, sethandleChange5] = useState(false);
  const [checked6, sethandleChange6] = useState(false);
  const [checked7, sethandleChange7] = useState(false);
  const [checked8, sethandleChange8] = useState(false);
  const [checked9, sethandleChange9] = useState(false);

  return (
    <div className={styles.settings_container}>
      <motion.div
        className={styles.exit}
        onClick={() => {
          setSettings(!settings);
        }}
      />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.main_container}
      >
        <h1>Ведущий центр:</h1>
        <hr />
        <div className={styles.item}>
          <h1>Тематика:</h1>
          <IoIosArrowDown className={styles.icon} />
        </div>
        <div className={styles.item}>
          <h1>Страна:</h1>
          <IoIosArrowDown className={styles.icon} />
        </div>
        <div className={styles.item}>
          <h1>Город:</h1>
          <IoIosArrowDown className={styles.icon} />
        </div>
        <hr />
        <div
          className={styles.item}
          onClick={() => sethandleChange1((prev) => !prev)}
        >
          <h1>Все:</h1>
          <Checkbox
            checked={checked1}
            // onChange={() => sethandleChange1((prev) => !prev)}
            inputProps={{ 'aria-label': 'controlled' }}
            className={styles.checkbox}
          />
        </div>
        <div
          className={styles.item}
          onClick={() => sethandleChange2((prev) => !prev)}
        >
          <h1>Новости:</h1>
          <Checkbox
            checked={checked2}
            // onChange={() => sethandleChange2((prev) => !prev)}
            inputProps={{ 'aria-label': 'controlled' }}
            className={styles.checkbox}
          />
        </div>
        <div
          className={styles.item}
          onClick={() => sethandleChange3((prev) => !prev)}
        >
          <h1>Инновации:</h1>
          <Checkbox
            checked={checked3}
            // onChange={() => sethandleChange3((prev) => !prev)}
            inputProps={{ 'aria-label': 'controlled' }}
            className={styles.checkbox}
          />
        </div>
        <div
          className={styles.item}
          onClick={() => sethandleChange4((prev) => !prev)}
        >
          <h1>Магазин:</h1>
          <Checkbox
            checked={checked4}
            // onChange={() => sethandleChange4((prev) => !prev)}
            inputProps={{ 'aria-label': 'controlled' }}
            className={styles.checkbox}
          />
        </div>
        <div
          className={styles.item}
          onClick={() => sethandleChange5((prev) => !prev)}
        >
          <h1>Лечение:</h1>
          <Checkbox
            checked={checked5}
            // onChange={() => sethandleChange5((prev) => !prev)}
            inputProps={{ 'aria-label': 'controlled' }}
            className={styles.checkbox}
          />
        </div>
        <div
          className={styles.item}
          onClick={() => sethandleChange6((prev) => !prev)}
        >
          <h1>Реабилитация:</h1>
          <Checkbox
            checked={checked6}
            // onChange={() => sethandleChange6((prev) => !prev)}
            inputProps={{ 'aria-label': 'controlled' }}
            className={styles.checkbox}
          />
        </div>
        <div
          className={styles.item}
          onClick={() => sethandleChange7((prev) => !prev)}
        >
          <h1>Советы от специалистов:</h1>
          <Checkbox
            checked={checked7}
            // onChange={() => sethandleChange7((prev) => !prev)}
            inputProps={{ 'aria-label': 'controlled' }}
            className={styles.checkbox}
          />
        </div>
        <div
          className={styles.item}
          onClick={() => sethandleChange8((prev) => !prev)}
        >
          <h1>Подписки:</h1>
          <Checkbox
            checked={checked8}
            // onChange={() => sethandleChange8((prev) => !prev)}
            inputProps={{ 'aria-label': 'controlled' }}
            className={styles.checkbox}
          />
        </div>
        <div
          className={styles.item}
          onClick={() => sethandleChange9((prev) => !prev)}
        >
          <h1>Советы от врачей:</h1>
          <Checkbox
            checked={checked9}
            // onChange={() => sethandleChange9((prev) => !prev)}
            inputProps={{ 'aria-label': 'controlled' }}
            className={styles.checkbox}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsMainPageMobile;
