import React, { useState } from "react";
import styles from "../../styles/Map.module.scss";
import CenterInfo from "@/Components/Map/CenterInfo/CenterInfo";
import NavBar from "@/Components/Map/NavBar/NavBar";
import Content from "@/Components/Map/Content/Content";

type Props = {};

const Map = (props: Props) => {
  const [infoCenter, setInfoCenter] = useState(false);
  return (
    <div className={styles.main_container}>
      <NavBar />
      <div className={styles.cont}>
        <Content infoCenter={infoCenter} setIngoCenter={setInfoCenter} />
        {infoCenter && <CenterInfo />}
      </div>
    </div>
  );
};

export default Map;
