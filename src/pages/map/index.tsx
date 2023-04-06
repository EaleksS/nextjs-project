import React, { FC, useEffect, useState } from 'react';
import styles from './Map.module.scss';
import CenterInfo from '@/Components/Map/CenterInfo/CenterInfo';
import NavBar from '@/Components/Map/NavBar/NavBar';
import Content from '@/Components/Map/Content/Content';
import Layout from '../Layout';
import Sidebar from '@/Components/Sidebar/Sidebar';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { green } from '@mui/material/colors';

const MY_API_KEY = 'AIzaSyCbJBvd9XxWov5yDkGi-IikZRnP3SEjQzU';

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
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (location) {
      Geocode.fromLatLng(location.latitude, location.longitude)
        .then((response) =>
          console.log('Address:', response.results[0].formatted_address)
        )
        .catch((error) => console.log('Error', error));
    }
  }, [location]);

  const defaultCenter = {
    lat: location && location.latitude,
    lng: location && location.longitude,
  };

  return (
    <Layout title="Карта">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div style={{ height: '100vh', width: '100%' }}>
          {location !== null && (
            <GoogleMapReact
              bootstrapURLKeys={{ key: MY_API_KEY }}
              defaultCenter={defaultCenter}
              defaultZoom={12}
            >
              <Marker lat={location.latitude} lng={location.longitude} />
            </GoogleMapReact>
          )}
        </div>
      </div>
      <div className={styles.mobile_container}>
        <NavBar />
        <div className={styles.cont}>
          {/* <Content infoCenter={infoCenter} setIngoCenter={setInfoCenter} /> */}
          {infoCenter && <CenterInfo />}
        </div>
      </div>
    </Layout>
  );
};

const Marker: any = () => (
  <div className="marker">
    <FaMapMarkerAlt style={{ color: 'green' }} />
  </div>
);

export default Map;
