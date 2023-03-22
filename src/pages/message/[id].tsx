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
import { IMessage, useMessageStore } from '@/store/MessageStore';

interface ImessageData {
  messageData: IMessage[];
  setmessageData: (e: IMessage[]) => void;
}

const Message = () => {
  const textareaRef: any = useRef(null);
  const [currentValue, setCurrentValue] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const [idp, setidp]: any = useState(null);
  const [touchMessage, setTouchMessage] = useState(false);
  const [touchSend, setTouchSend] = useState(false);
  const [isTouchIdMessage, setIsTouchIdMessage]: any = useState(null);

  const [messageData, setmessageData] = useState<IMessage[]>([]);
  const { message, addMessages } = useMessageStore();

  useEffect(() => {
    setmessageData(message);
  }, []);

  let timerId: any = null;

  const asd = (id: number) => {
    timerId = setTimeout(() => {
      setIsTouchIdMessage(id);
      setTouchMessage(true);
    }, 1000);
  };

  let timerIdSend: any = null;

  const handleTouchSend = () => {
    timerIdSend = setTimeout(() => {
      setTouchSend(true);
    }, 1000);
  };

  useEffect(() => {
    if (currentValue) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
    if (!currentValue) {
      setTouchSend(false);
    }
  }, [currentValue]);

  useEffect(() => {
    if (id) setidp(id);

    if (idp) router.push('#bottom_message');
  }, [id, idp]);

  const handleClickSend = () => {
    addMessages(currentValue, Number(idp));
    setCurrentValue('');
    if (idp) router.push('#bottom_message');
  };

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
        {(touchMessage || touchSend) && (
          <div
            className={styles.layout}
            onClick={() => {
              setIsTouchIdMessage(null);
              setTouchMessage(false);
              setTouchSend(false);
            }}
          ></div>
        )}

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
          {messageData
            .filter((e) => e.id === Number(idp))[0]
            ?.messages.map((mess) => {
              return (
                <div
                  key={mess.id}
                  className={`${styles.message} ${mess.me && styles.me}`}
                >
                  <h2
                    onTouchStart={() => {
                      asd(mess.id);
                    }}
                    onTouchEnd={() => {
                      clearTimeout(timerId);
                    }}
                    style={
                      mess.id === isTouchIdMessage && touchMessage
                        ? { zIndex: '100' }
                        : { zIndex: '1' }
                    }
                  >
                    {mess.message}
                  </h2>
                  {mess.id === isTouchIdMessage && touchMessage && (
                    <div
                      className={`${styles.messageBlock} ${
                        mess.me && styles.messageBlockMe
                      }`}
                    >
                      <p>Ответить</p>
                      <p>Скопировать</p>
                      <p>Изменить</p>
                      <p style={{ color: '#F18383' }}>Удалить</p>
                      <p>Выбрать</p>
                    </div>
                  )}
                </div>
              );
            })}
          <div id="bottom_message"></div>
        </div>

        <div
          className={styles.mobile_footer_main_container}
          style={touchSend ? { zIndex: '3' } : { zIndex: '2' }}
        >
          {currentValue && touchSend && (
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
              <span
                className={styles.HiArrowUp}
                onTouchStart={() => handleTouchSend()}
                onTouchEnd={() => clearTimeout(timerIdSend)}
                onClick={() => handleClickSend()}
              >
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
