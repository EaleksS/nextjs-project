import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Map.module.scss';
import CenterInfo from '@/Components/Map/CenterInfo/CenterInfo';
import NavBar from '@/Components/Map/NavBar/NavBar';
import Content from '@/Components/Map/Content/Content';
import Layout from '../Layout';
import Sidebar from '@/Components/Sidebar/Sidebar';
import { FaMapMarkerAlt } from 'react-icons/fa';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polygon,
  StandaloneSearchBox,
} from '@react-google-maps/api';

const Map: FC = () => {
  const [infoCenter, setInfoCenter] = useState(false);
  const [menu, setMenu] = useState(false);
  const [location, setLocation] = useState(null);

  const [isLat, setIsLat] = useState<number>(0);
  const [isLng, setIsLng] = useState<number>(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({ latitude, longitude });
        setIsLat(latitude);
        setIsLng(longitude);
      });
    } else {
      // console.log('Geolocation is not supported by this browser.');
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
    lat: location?.latitude,
    lng: location?.longitude,
  };

  const [searchBox, setSearchBox] = useState(null);

  const onPlacesChanged = () => {
    console.log(searchBox.getPlaces());
    // defaultCenter.lat = searchBox.getPlaces()[0]?.geometry?.location?.lat();
    // defaultCenter.lng = searchBox.getPlaces()[0]?.geometry?.location?.lng();
    setIsLat(searchBox.getPlaces()[0]?.geometry?.location?.lat());
    setIsLng(searchBox.getPlaces()[0]?.geometry?.location?.lng());
    // setIsSouth(searchBox.getPlaces()[0]?.geometry?);
    // setIsNorth(longitude);
  };

  const handleSearchBoxLoad = (ref) => {
    setSearchBox(ref);
  };

  return (
    <Layout title="Карта">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
          {location !== null && isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{ lat: isLat, lng: isLng }}
              zoom={14}
            >
              <StandaloneSearchBox
                onLoad={handleSearchBoxLoad}
                onPlacesChanged={onPlacesChanged}
              >
                <input
                  type="text"
                  placeholder="Customized your placeholder"
                  style={{
                    boxSizing: 'border-box',
                    border: `1px solid transparent`,
                    width: `270px`,
                    height: `40px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    margin: 'center',
                    textOverflow: `ellipses`,
                    position: 'absolute',
                    top: '40px',
                    marginLeft: '50%',
                  }}
                />
              </StandaloneSearchBox>
              <Marker position={{ lat: isLat, lng: isLng }} clickable></Marker>
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
