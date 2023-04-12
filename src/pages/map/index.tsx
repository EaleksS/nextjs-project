import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Map.module.scss';
import CenterInfo from '@/Components/Map/CenterInfo/CenterInfo';
import NavBar from '@/Components/Map/NavBar/NavBar';
import Content from '@/Components/Map/Content/Content';
import Layout from '../Layout';
import Sidebar from '@/Components/Sidebar/Sidebar';
// import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import { FaMapMarkerAlt } from 'react-icons/fa';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Select from 'react-select';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdCloseCircle } from 'react-icons/io';

const optionsMap = [
  { value: { lat: 40, lng: 0, zoom: 2.5, name: 'center' }, label: 'Вся карта' },
  { value: { lat: 62, lng: 90, zoom: 3.8, name: 'russia' }, label: 'Россия' },
  {
    value: { lat: 62.036785, lng: 129.737342, zoom: 18, name: 'russia' },
    label:
      'ул. Петра Алексеева, 11, Якутск, Респ. Саха (Якутия), Россия, 677027',
  },
  {
    value: { lat: 62, lng: 90, zoom: 3.8, name: 'russia' },
    label: 'Россия, якутск, ',
  },
  { value: { lat: 40, lng: 260, zoom: 3.8, name: 'usa' }, label: 'США' },
];

const optionsMapCityRussia = [
  {
    value: { lat: 55.755826, lng: 37.6173, zoom: 5, name: 'moscow' },
    label: 'Москва',
  },
  {
    value: {
      lat: 59.9342802,
      lng: 30.3350986,
      zoom: 10,
      name: 'saint-petersburg',
    },
    label: 'Санкт-Петербург',
  },
  {
    value: { lat: 62.033333, lng: 129.733333, zoom: 12, name: 'yakutsk' },
    label: 'Якутск',
  },
];

const optionsMapCityRussiaYakutskCenter = [
  {
    value: {
      lat: 62.0133,
      lng: 129.673333,
      zoom: 15,
      name: '2',
    },
    label: 'Центр 1',
  },
  {
    value: { lat: 62.033333, lng: 129.733333, zoom: 15, name: '3' },
    label: 'Центр 2',
  },
];

const Map: FC = () => {
  const [infoCenter, setInfoCenter] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isOpenInfoCenterName, setIsOpenInfoCenterName] = useState<
    null | string
  >(null);

  const selectRef = useRef(null);

  const [selectValueMap, setSelectValueMap] = useState<{
    lat: number;
    lng: number;
    zoom: number;
    name: string;
  } | null>();

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
      // console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  if (optionsMap !== null) {
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA',
  });

  const defaultCenter = {
    lat:
      selectValueMap === null || selectValueMap === undefined
        ? location?.latitude
        : selectValueMap?.lat,
    lng:
      selectValueMap === null || selectValueMap === undefined
        ? location?.longitude
        : selectValueMap?.lng,
  };

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <Layout title="Карта">
      <div
        className={styles.container}
        onClick={() => setIsOpenInfoCenterName(null)}
      >
        <Sidebar menu={menu} setMenu={setMenu} />
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '100px',
              left: '100px',
              zIndex: 10000,
            }}
          >
            <Select
              placeholder="Местоположение"
              options={optionsMap}
              className={styles.select}
              onChange={(e) => setSelectValueMap(e?.value)}
            />
            <Select
              placeholder="Город"
              options={selectValueMap && optionsMapCityRussia}
              isDisabled={!selectValueMap}
              className={styles.select2}
              onChange={(e) => setSelectValueMap(e?.value)}
            />
            <Select
              placeholder="Центр"
              options={
                optionsMapCityRussia && optionsMapCityRussiaYakutskCenter
              }
              isDisabled={!selectValueMap}
              className={styles.select2}
              ref={selectRef}
              onChange={(newValue) => {
                setSelectValueMap(newValue?.value);
              }}
            />
          </div>
          {location !== null && isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              onZoomChanged={() => console.log(0)}
              zoom={
                selectValueMap === null || selectValueMap === undefined
                  ? 12
                  : selectValueMap?.zoom
              }
            >
              <div onClick={(e) => e.stopPropagation()}>
                {optionsMapCityRussiaYakutskCenter.map((e) => (
                  <Marker
                    position={{
                      lat: e.value.lat,
                      lng: e.value.lng,
                    }}
                    onClick={() =>
                      setTimeout(() => {
                        setIsOpenInfoCenterName(e.label);
                      }, 100)
                    }
                  >
                    <AnimatePresence>
                      {isOpenInfoCenterName === e.label && (
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className={styles.info_center}
                        >
                          <div
                            className={styles.close}
                            onClick={() => setIsOpenInfoCenterName(null)}
                          >
                            <IoMdCloseCircle />
                          </div>
                          <h1 className={styles.name}>{e.label}</h1>
                          <table className={styles.table}>
                            <tbody>
                              <tr>
                                <td>Рейтинг: </td>
                                <td>10</td>
                              </tr>
                              <tr>
                                <td>Страна:</td>
                                <td>Россия </td>
                              </tr>
                              <tr>
                                <td>Город:</td>
                                <td>Якутск</td>
                              </tr>
                              <tr>
                                <td>Адрес:</td>
                                <td>Лермонтова 0</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className={styles.about}>
                            <b>Описание: </b>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem praesentium quidem provident,
                            asperiores sunt cum aspernatur quis voluptatem at
                            beatae!
                          </p>

                          <a href=".#">Показать на google картах</a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Marker>
                ))}
              </div>
            </GoogleMap>
          )}
        </div>
      </div>
      <div className={styles.mobile_container}>
        {/* <NavBar /> */}
        <HeaderMobile menu={menu} setMenu={setMenu} />
        <div className={styles.cont}>
          {location !== null && isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={14}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          )}
        </div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

const Marker2: any = () => (
  <div className="marker">
    <FaMapMarkerAlt style={{ color: 'green' }} />
  </div>
);

export default Map;
