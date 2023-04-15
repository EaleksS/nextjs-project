import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { FC, useState } from 'react';
import Layout from '../Layout';
import styles from './Settings.module.scss';
import Sidebar from '@/Components/Sidebar/Sidebar';
import { MdLiveHelp, MdSecurity, MdWallpaper } from 'react-icons/md';
import { IoLanguageSharp, IoNotifications } from 'react-icons/io5';
import { FcEditImage, FcInvite, FcOvertime } from 'react-icons/fc';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { TbSchoolBell } from 'react-icons/tb';
import { useRouter } from 'next/router';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaLanguage, FaShoppingBasket } from 'react-icons/fa';
import { BsPersonFillLock } from 'react-icons/bs';
import { GoShield } from 'react-icons/go';
import { SiGooglemessages } from 'react-icons/si';

const Settings: FC = () => {
  const [menu, setMenu] = useState(false);

  const router = useRouter();

  return (
    <Layout title="Settings">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />

        <div className={styles.content}>
          <HeaderMobile menu={menu} setMenu={setMenu} />
          <div className={styles.items}>
            <div className={styles.item}>
              <GoShield className={styles.icon} />
              <p>Безопасность</p>
            </div>
            <div
              className={styles.item}
              onClick={() => router.push('/settings/privacy')}
            >
              <BsPersonFillLock className={styles.icon} />
              <p>Конфиденциальность</p>
            </div>
            <div className={styles.item}>
              <TbSchoolBell className={styles.icon} style={{ color: 'red' }} />
              <p>Уведомления</p>
            </div>
            <div className={styles.item}>
              <AiOutlineQuestionCircle
                className={styles.icon}
                style={{ color: '#87CEFA' }}
              />
              <p>Помощь</p>
            </div>
            <div className={styles.item}>
              <FaLanguage className={styles.icon} />
              <p>Язык</p>
            </div>

            <div className={styles.item}>
              <FaShoppingBasket
                className={styles.icon}
                style={{ color: 'orange' }}
              />
              <p>Покупки</p>
            </div>
            <div className={styles.item}>
              <SiGooglemessages className={styles.icon} />
              <p>Приглашения</p>
            </div>
            <div className={styles.item}>
              <FcEditImage className={styles.icon} />
              <p>Обои</p>
            </div>
          </div>
        </div>
        <FooterMobile />
      </div>
      {/* <div className={styles.mobile_container}>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        <div className={styles.content}>Settings</div>
        <FooterMobile />
      </div> */}
    </Layout>
  );
};

export default Settings;
