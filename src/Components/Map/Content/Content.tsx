import React from "react";
import styles from "./Content.module.scss";

type Props = {
  infoCenter: boolean;
  setIngoCenter: React.Dispatch<React.SetStateAction<boolean>>;
};

const Content = (props: Props) => {
  const infoCenter = props.infoCenter;
  const setIngoCenter = props.setIngoCenter;
  return (
    <div
      className={styles.map_container}
      onClick={() => {
        setIngoCenter(!infoCenter);
      }}
    >
      ad
    </div>
  );
};

export default Content;
