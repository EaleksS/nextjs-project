import Sidebar from '@/Components/Sidebar/Sidebar';
import Layout from '@/pages/Layout';
import { FC, useState } from 'react';
import styles from './Privacy.module.scss';
import Select from 'react-select';

const optionsHidden = [
  { value: 'Open', label: 'Открыт' },
  { value: 'Hidden', label: 'Скрыт' },
];

const defaultOptionHidden = { value: 'Open', label: 'Открыт' };

const optionsPodpican = [
  { value: 'Sasha', label: 'Саша' },
  { value: 'Anton', label: 'Антон' },
];

const defaultOptionPodpican = { value: 'Open', label: 'Открыт' };

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'lightgray',
    primary: 'gray',
  },
});

const Privacy: FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Layout title="Конфиденциальность (пароль и безопасность)">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div className={styles.content}>
          <div className={styles.nav}>
            <button className={styles.back}>Назад</button>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.acc}>
                <p>Аккаунт</p>
                <Select
                  options={optionsHidden}
                  defaultValue={defaultOptionHidden}
                  className={styles.select}
                  isSearchable={false}
                  theme={customTheme}
                />
              </div>
              <hr />

              <div className={styles.podpicky}>
                <p>Аккаунты на которых подписан</p>
                <div className={styles.send}>
                  <Select
                    options={optionsPodpican}
                    defaultValue={defaultOptionPodpican}
                    className={styles.select}
                    theme={customTheme}
                  />
                  <button>Написать</button>
                </div>
              </div>
              <hr />
              <div className={styles.podpicky}>
                <p>Заблокированные аккаунты</p>
                <div className={styles.send}>
                  <Select
                    options={optionsPodpican}
                    defaultValue={defaultOptionPodpican}
                    className={styles.select}
                    theme={customTheme}
                  />
                  <button>Разблокировать</button>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.btns}>
                <button className={styles.btn}>Не беспокить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
