import styles from '../../styles/Message_id.module.scss';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Layout from '../Layout';
import Image from 'next/image';
import profileImg from '@/Assets/images/profile.png';
import messageImg from '@/Assets/images/message_img.jpg';
import { FiPaperclip, FiClock, FiBellOff } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { IMessage, useMessageStore } from '@/store/MessageStore';
import ModalContent from '@/Components/MessagePage/Mobile/ModalContent/ModalContent';
import { AnimatePresence } from 'framer-motion';

const Message = () => {
  const textareaRef: any = useRef(null);
  const [currentValue, setCurrentValue] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const [idp, setidp]: any = useState(null);
  const [touchMessage, setTouchMessage] = useState(false);
  const [touchSend, setTouchSend] = useState(false);
  const [isTouchIdMessage, setIsTouchIdMessage]: any = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openChangeValue, setOpenChangeValue] = useState(false);
  const [changeValue, setChangeValue] = useState('');

  const [messageData, setmessageData] = useState<IMessage[]>([]);
  const [messageDelete, setMessageDelete] = useState<number[]>([]);
  const { message, addMessages, changeMessage } = useMessageStore();

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
    }, 500);
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

  const handleClickTimeSend = () => {
    let currentValueTime = currentValue;
    setCurrentValue('');

    setTimeout(() => {
      addMessages(currentValueTime, Number(idp));
      if (idp) router.push('#bottom_message');
    }, 2000);
  };

  // console.log(message);

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
              setOpenChangeValue(false);
            }}
          ></div>
        )}

        <div className={styles.header_message}>
          <Image
            src={profileImg}
            alt="img"
            priority={true}
            onClick={() => setOpenModal(true)}
          />
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
            ?.messages.filter((i) => {
              let flag = true;

              messageDelete.forEach((j) => {
                if (i.id === j) {
                  flag = false;
                }
              });

              return flag;
            })
            .map((mess) => {
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
                  {mess.id === isTouchIdMessage &&
                    touchMessage &&
                    openChangeValue && (
                      <div className={styles.changeValue}>
                        <span
                          className={styles.HiArrowUp}
                          onClick={() => {
                            changeValue &&
                              changeMessage(changeValue, idp, mess.id);
                            setOpenChangeValue(false);
                            setIsTouchIdMessage(null);
                            setTouchMessage(false);
                          }}
                        >
                          <AiOutlineCheck />
                        </span>
                        <input
                          type="text"
                          placeholder="изменения"
                          value={changeValue}
                          onChange={(e) => setChangeValue(e.target.value)}
                        />
                      </div>
                    )}
                  {mess.id === isTouchIdMessage && touchMessage && (
                    <div
                      className={`${styles.messageBlock} ${
                        mess.me && styles.messageBlockMe
                      }`}
                    >
                      <p
                        style={{ opacity: 0.5 }}
                        onClick={() => {
                          setIsTouchIdMessage(null);
                          setTouchMessage(false);
                        }}
                      >
                        Ответить
                      </p>
                      <p
                        onClick={() => {
                          navigator.clipboard.writeText(mess.message);
                          setIsTouchIdMessage(null);
                          setTouchMessage(false);
                        }}
                      >
                        Скопировать
                      </p>
                      <p
                        className={!mess.me ? styles.pIMe : ''}
                        onClick={() => {
                          mess.me && setOpenChangeValue(true);
                        }}
                      >
                        Изменить
                      </p>
                      <p
                        style={{ color: '#F18383' }}
                        onClick={() => {
                          setMessageDelete((prev) => [...prev, mess.id]);
                          setIsTouchIdMessage(null);
                          setTouchMessage(false);
                        }}
                      >
                        Удалить
                      </p>
                      <p
                        style={{ opacity: 0.5 }}
                        onClick={() => {
                          setIsTouchIdMessage(null);
                          setTouchMessage(false);
                        }}
                      >
                        Выбрать
                      </p>
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
              <p onClick={() => handleClickSend()}>
                Отправить без звука <FiBellOff />
              </p>
              <p onClick={() => handleClickTimeSend()}>
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
      <AnimatePresence>
        {openModal && <ModalContent setOpenModal={setOpenModal} />}
      </AnimatePresence>
    </Layout>
  );
};

export default Message;
