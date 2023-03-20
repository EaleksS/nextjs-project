import Image from "next/image";
import styles from "./FooterMobile.module.scss";
import home from "../../Assets/images/home.png";
import message from "../../Assets/images/message.png";
import find from "../../Assets/images/find.png";
import Link from "next/link";
import extraCall from "../../Assets/images/Ellipse 474.png";

type Props = {};

const FooterMobile = (props: Props) => {
  return (
    <div className={styles.mobile_footer_main_container}>
      <div className={styles.links_container}>
        <Link href="/">
          <Image src={home} alt="" className={styles.home} />
        </Link>
        <Link href="/message">
          <Image src={message} alt="" className={styles.msg} />
        </Link>
        <Image src={find} alt="" className={styles.find} />
      </div>
      <div className={styles.bg_for_extra_call}>
        <div className={styles.help} />
        <div className={styles.extra_call_container}>
          <Image src={extraCall} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
