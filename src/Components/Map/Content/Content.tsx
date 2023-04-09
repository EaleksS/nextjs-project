import React, { useCallback, useRef } from 'react';
import styles from './Content.module.scss';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

type Props = {
  infoCenter?: boolean;
  setIngoCenter?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Content = (props: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCbJBvd9XxWov5yDkGi-IikZRnP3SEjQzU',
  });
  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  const center = {
    lat: 44,
    lng: -80,
  };
  return (
    <div>
      {isLoaded && isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <></>
        </GoogleMap>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default Content;
