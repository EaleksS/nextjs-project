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
  {
    value: { lat: 40, lng: 0, zoom: 2.5, name: 'all-map' },
    label: 'Вся карта',
  },
  {
    value: { lat: 62, lng: 90, zoom: 3.8, name: 'countries' },
    label: 'Россия',
  },
  {
    value: {
      lat: 62.036785,
      lng: 129.737342,
      zoom: 18,
      name: 'center',
      name_center: 'Центр 1',
    },
    label:
      'ул. Петра Алексеева, 11, Якутск, Респ. Саха (Якутия), Россия, 677027 - Центр 1',
  },
  {
    value: {
      lat: 62.0308611,
      lng: 129.6492819,
      zoom: 18,
      name: 'center',
      name_center: 'Центр 2',
    },
    label:
      'ул. Билибина, 10, корпус 1, Якутск, Респ. Саха (Якутия), Россия, 677000 - Центр 2',
  },
  {
    value: { lat: 35.098007, lng: -103.702161, zoom: 5, name: 'countries' },
    label: 'США',
  },
  {
    value: {
      lat: 41.838315,
      lng: -87.795752,
      zoom: 18,
      name: 'center',
      name_center: 'Центр 3',
    },
    label: '8400 W 31st St, Brookfield, IL 60513 - Центр 3',
  },
];

const Map: FC = () => {
  const [infoCenter, setInfoCenter] = useState(false);
  const [menu, setMenu] = useState(false);

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
    lat: location?.latitude,
    lng: location?.longitude,
  };

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <Layout title="Карта">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
          {location !== null && isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={13}
            >
              <Marker position={defaultCenter}></Marker>
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
