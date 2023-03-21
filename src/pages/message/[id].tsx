import styles from '../../styles/Message_id.module.scss';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Layout from '../Layout';
import Image from 'next/image';
import profileImg from '@/Assets/images/profile.png';
import messageImg from '@/Assets/images/message_img.jpg';
import { FiPaperclip, FiClock, FiBellOff } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi';
import { TiVolumeMute } from 'react-icons/ti';
import { useRouter } from 'next/router';

const data = [
  {
    id: 1,
    me: true,
    message: 'Привет',
  },
  {
    id: 2,
    me: false,
    message: 'Как дела?',
  },
  {
    id: 3,
    me: true,
    message: 'Хорошо',
  },
  {
    id: 4,
    me: false,
    message: 'Что делаешь?',
  },
  {
    id: 5,
    me: true,
    message: 'Ничего',
  },
  {
    id: 6,
    me: false,
    message: 'Понятно',
  },
];

const Message = () => {
  const textareaRef: any = useRef(null);
  const [currentValue, setCurrentValue] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const [idp, setidp]: any = useState(null);

  useEffect(() => {
    if (currentValue) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [currentValue]);

  useEffect(() => {
    if (id) setidp(id);

    if (idp) router.push('#bottom_message');
  }, [id, idp]);

  return (
    <Layout title="Main Page">
      {/* <div className={styles.container}>
        <NavBar menu={menu} setMenu={setMenu} />
        <div className={styles.main_container}>
          <Header setSettings={setSettings} settin={settings} />
          <div className={styles.content}>
            <OptionsForUser menu={menu} className="" />
            <div className={styles.content_container}></div>
            {settings && <SettingsProfile />}
          </div>
        </div>
      </div> */}
      <div className={styles.mobile_version}>
        <div className={styles.header_message}>
          <Image src={profileImg} alt="img" priority={true} />
        </div>
        <Image
          src={messageImg}
          alt="wallpaper"
          className={styles.message_img}
          priority={true}
        />
        <div className={styles.content}>
          {data.map((mess) => {
            return (
              <div
                key={mess.id}
                className={`${styles.message} ${mess.me && styles.me}`}
              >
                <h2>{mess.message}</h2>
              </div>
            );
          })}
          <div id="bottom_message"></div>
        </div>

        <div className={styles.mobile_footer_main_container}>
          {currentValue && (
            <div className={styles.sendBlock}>
              <p>
                Отправить без звука <FiBellOff />
              </p>
              <p>
                Отправить позже <FiClock />
              </p>
            </div>
          )}
          <div className={styles.entry_field}>
            <FiPaperclip className={styles.FiPaperclip} />
            <textarea
              ref={textareaRef}
              className={styles.textarea}
              value={currentValue}
              placeholder="Написать"
              onChange={(e) => setCurrentValue(e.target.value)}
            />
            {!currentValue ? (
              <MdKeyboardVoice className={styles.MdKeyboardVoice} />
            ) : (
              <span className={styles.HiArrowUp}>
                <HiArrowUp />
              </span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Message;
