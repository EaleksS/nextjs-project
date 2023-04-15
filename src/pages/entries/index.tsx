import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import styles from './Entries.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import SettingsMainPageMobile from '@/Components/Main/SettigsMainPageMobile/SettingsMainPageMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import EntriesModal from '@/Components/Entries/EntriesModal/EntriesModal';
import { useEntriesStore } from '@/store/entriesStore';
import Sidebar from '@/Components/Sidebar/Sidebar';
import { useAuthStore } from '@/store/store';
import DateSelect from '@/Components/Entries/EntriesModal/DateSelect/DateSelect';
import Select from 'react-select';
import CheckBox from '@/Components/UI/CheckBox/CheckBox';
import { GoPlus } from 'react-icons/go';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useSearchStore } from '@/store/SearchStore';
import hospital_logo from '../../Assets/images/hospital.png';
import Image from 'next/image';
import { Doctor } from '@/services/doctor.service';

const Entries = () => {
  const { getAllCenter, isCenter } = useSearchStore();
  const { isLang } = useAuthStore();
  const { entries, getGeoLocation, getIsDoctors, isDoctors, isLocation } =
    useEntriesStore();

  useEffect(() => {
    getAllCenter();
    getIsDoctors();
    Doctor.getRegister().then((res) => console.log(res));
  }, []);

  const optionsMap: { value: string; label: string }[] = [];

  const options: { value: string; label: string }[] = [];

  isCenter &&
    isCenter.map((e) => optionsMap.push({ value: e.address, label: e.name }));

  isDoctors &&
    isDoctors.map((e) =>
      options.push({
        value: e.email,
        label: `${e.firstname} ${e.lastname} - ${e.role}`,
      })
    );

  const [menu, setMenu] = useState(false);
  const [menuActive, setMenuActive] = useState('Предстоящие');
  const [settings, setSettings] = useState(false);
  const [openPlus, setOpenPlus] = useState(false);
  const [isSelectNav, setIsSelectNav] = useState<'History' | 'Upcoming'>(
    'Upcoming'
  );

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeBegin, setSelectedTimeBegin] = useState<Date | null>(null);
  const [selectedTimeEnd, setSelectedTimeEnd] = useState<Date | null>(null);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const [selectValueMap, setSelectValueMap] = useState<string | null>(null);
  const [openMap, setOpenMap] = useState<boolean>(true);

  const [isLat, setIsLat] = useState<number>();

  useEffect(() => {
    selectValueMap && getGeoLocation(selectValueMap);
  }, [selectValueMap]);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({ latitude, longitude });
        console.log(latitude, longitude);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA',
    libraries: ['places'],
  });

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const defaultCenter = {
    lat: location && location.latitude,
    lng: location && location.longitude,
  };

  return (
    <Layout title="Записи">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />

        <div className={styles.content}>
          <div className={styles.entries}>
            <div className={styles.search_entries}>
              {/* <label>
                <BsSearch className={styles.BsSearch} />
                <input
                  type="text"
                  placeholder={
                    isLang === 'ru' ? 'Найти записи' : 'Find entries'
                  }
                />
              </label> */}
              <button onClick={() => setOpenPlus(true)}>
                <GoPlus />
              </button>
            </div>

            <div className={styles.nav}>
              <div className={styles.btns}>
                <button
                  className={
                    isSelectNav === 'Upcoming' ? styles.active_nav : ' '
                  }
                  onClick={() => setIsSelectNav('Upcoming')}
                >
                  {isLang === 'ru' ? 'Предстоящие' : 'Upcoming'}
                </button>
                <button
                  className={
                    isSelectNav === 'History' ? styles.active_nav : ' '
                  }
                  onClick={() => setIsSelectNav('History')}
                >
                  {isLang === 'ru' ? 'История' : 'History'}
                </button>
              </div>
            </div>
            <div className={styles.items}>
              {isSelectNav === 'Upcoming' &&
                [1, 2, 3].map((e, i) => (
                  <div className={styles.item} key={i + 100}>
                    <div>
                      <h2>Название: Название</h2>
                      <h2>Ведущий: Ведущий</h2>
                      <h2>Специальность: Специальность</h2>
                    </div>
                    <div className={styles.bottom}>
                      <div>
                        <h2>Дата</h2>
                        <h2>1:0 - 2:0</h2>
                      </div>
                      <div className={styles.address}>
                        <h2>адрес</h2>
                      </div>
                    </div>
                  </div>
                ))}
              {isSelectNav === 'History' &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
                  <div className={styles.item} key={i + 100}>
                    <div>
                      <h2>Название: Название</h2>
                      <h2>Ведущий: Ведущий</h2>
                      <h2>Специальность: Специальность</h2>
                    </div>
                    <div className={styles.bottom}>
                      <div>
                        <h2>Дата</h2>
                        <h2>1:0 - 2:0</h2>
                      </div>
                      <div className={styles.address}>
                        <h2>адрес</h2>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {openPlus && (
            <motion.div
              className={styles.modalCreateEntries}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                setOpenPlus(false);
                setOpenMap(true);
              }}
            >
              {openMap ? (
                <motion.div
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.25 }}
                  className={styles.createEntriesMap}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.selectCenter}>
                    <p>Выберите центр</p>
                    <div className={styles.btn}>
                      <Select
                        placeholder="Центр"
                        options={optionsMap}
                        className={styles.select}
                        onChange={(e) => setSelectValueMap(e?.value)}
                      />
                      <button onClick={() => setOpenMap(false)}>Дальше</button>
                    </div>
                  </div>
                  <div className={styles.map}>
                    {location !== null && isLoaded && (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={
                          selectValueMap
                            ? isLocation && isLocation
                            : defaultCenter
                        }
                        zoom={14}
                      >
                        <Marker
                          position={
                            selectValueMap
                              ? isLocation && isLocation
                              : defaultCenter
                          }
                        />
                      </GoogleMap>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className={styles.createEntriesContent}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.selectCenter}>
                    <button
                      className={styles.btn}
                      onClick={() => setOpenMap(true)}
                    >
                      Выбрать другой центр
                    </button>
                    <div className={styles.center_info}>
                      <Image src={hospital_logo} alt="logo" />
                      <p>
                        {isCenter &&
                          isCenter
                            .filter((i) => i.address === selectValueMap)
                            .map((e) => (
                              <React.Fragment key={e.address}>
                                {e.name}, <br /> {e.address} <br /> Рейтинг:{' '}
                                {e.rating}
                              </React.Fragment>
                            ))}
                      </p>
                    </div>
                    <p className={styles.p}>
                      {isCenter &&
                        isCenter
                          .filter((i) => i.address === selectValueMap)
                          .map((e) => e.description)}
                    </p>
                  </div>
                  <div className={styles.centerSettings}>
                    <input
                      type="text"
                      placeholder="Введите название события"
                      className={styles.input}
                    />
                    <Select
                      placeholder="Специалист"
                      options={options}
                      className={styles.select}
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
                    <div className={styles.btn}>
                      <button>Создать</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`${styles.mobile_version}`}
        style={openPlus ? { overflow: 'hidden' } : {}}
      >
        <AnimatePresence>
          {settings && (
            <SettingsMainPageMobile
              settings={settings}
              setSettings={setSettings}
            />
          )}
        </AnimatePresence>
        <HeaderMobile
          menu={menu}
          setMenu={setMenu}
          setOpenPlus={setOpenPlus}
          isPlus={true}
        />
        <div className={styles.menu}>
          <button
            className={menuActive === 'Предстоящие' ? styles.active_btn : ' '}
            onClick={() => setMenuActive('Предстоящие')}
          >
            Предстоящие
          </button>
          <button
            className={menuActive === 'История' ? styles.active_btn : ' '}
            onClick={() => setMenuActive('История')}
          >
            История
          </button>
        </div>
        <div className={styles.content}>
          {menuActive === 'Предстоящие' ? (
            entries.map((i) => (
              <div className={styles.block} key={i.id}>
                <div>
                  <h2>Название: {i.name}</h2>
                  <h2>Ведущий: {i.lead}</h2>
                  <h2>Специальность: {i.specialty}</h2>
                </div>
                <div className={styles.bottom}>
                  <div>
                    <h2>{i.date}</h2>
                    <h2>
                      {i.begin} - {i.end}
                    </h2>
                  </div>
                  <div className={styles.address}>
                    <h2>{i.address}</h2>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className={styles.block}>
                <div>
                  <h2>Название: name</h2>
                  <h2>Ведущий: vedushiy</h2>
                  <h2>Специальность: service</h2>
                </div>
                <div className={styles.bottom}>
                  <div>
                    <h2>20/12/2024</h2>
                    <h2>14:00 - 15:00</h2>
                  </div>
                  <div className={styles.address}>
                    <h2>Адрес</h2>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <FooterMobile />
        <AnimatePresence>
          {openPlus && <EntriesModal setOpenPlus={setOpenPlus} />}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Entries;
