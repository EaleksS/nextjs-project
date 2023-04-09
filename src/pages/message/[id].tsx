import styles from './Message_id.module.scss';
import React, { FC, useEffect, useRef, useState } from 'react';
import Layout from '../Layout';
import Image from 'next/image';
import profileImg from '@/Assets/images/profile.png';
import messageImg from '@/Assets/images/message_img.jpg';
import { FiPaperclip, FiClock, FiBellOff } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { IMessage, useMessageStore } from '@/store/MessageStore';
import ModalContent from '@/Components/Message/Mobile/ModalContent/ModalContent';
import { AnimatePresence } from 'framer-motion';

const Message: FC = () => {
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
  const [IdChangeValue, setIdChangeValue]: any = useState(null);
  const [answerValue, setAnswerValue] = useState('');
  const [openAnswerValue, setOpenAnswerValue] = useState(false);

  const [messageData, setmessageData] = useState<IMessage[]>([]);
  const { message, addMessages, changeMessage, deleteMessage, answerMessage } =
    useMessageStore();

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
    if (!openAnswerValue && !IdChangeValue) {
      addMessages(currentValue, Number(idp));
    }

    if (openAnswerValue && !IdChangeValue) {
      answerMessage(currentValue, answerValue, idp);
      setOpenAnswerValue(false);
      setAnswerValue('');
      closeTouch();
    }

    if (currentValue && IdChangeValue) {
      changeMessage(currentValue, idp, IdChangeValue);
      setIdChangeValue(null);
      setCurrentValue('');
      setOpenChangeValue(false);
      closeTouch();
    }

    setCurrentValue('');
    if (idp) router.push('#bottom_message');
  };

  const handleClickTimeSend = () => {
    let currentValueTime = currentValue;
    setCurrentValue('');

    // setTimeout(() => {
    //   addMessages(currentValueTime, Number(idp));
    //   if (idp) router.push('#bottom_message');
    // }, 2000);
  };

  const closeTouch = () => {
    setIsTouchIdMessage(null);
    setTouchMessage(false);
  };

  return (
    <Layout title="Сообщение">
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
            ?.messages.map((mess) => {
              return (
                <div
                  key={mess.id}
                  className={`${styles.message} ${mess.me && styles.me}`}
                >
                  {!mess.answer && (
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
                  )}
                  {mess.answer && (
                    <div
                      className={styles.answer}
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
                      <h2 className={styles.answerMess}>{mess.answer}</h2>
                      <h2>{mess.message}</h2>
                    </div>
                  )}
                  {mess.id === isTouchIdMessage && touchMessage && (
                    <div
                      className={`${styles.messageBlock} ${
                        mess.me && styles.messageBlockMe
                      }`}
                    >
                      <p
                        onClick={() => {
                          setAnswerValue(mess.message);
                          setOpenAnswerValue(true);
                        }}
                      >
                        <label htmlFor="sendMessage">Ответить</label>
                      </p>
                      <p
                        onClick={() => {
                          navigator.clipboard.writeText(mess.message);
                          closeTouch();
                        }}
                      >
                        Скопировать
                      </p>
                      <p
                        className={!mess.me ? styles.pIMe : ''}
                        onClick={() => {
                          mess.me && setOpenChangeValue(true);
                          mess.me && setIdChangeValue(mess.id);
                        }}
                      >
                        <label htmlFor="sendMessage">Изменить</label>
                      </p>
                      <p
                        style={{ color: '#F18383' }}
                        onClick={() => {
                          // setMessageDelete((prev) => [...prev, mess.id]);
                          deleteMessage(idp, mess.id);
                          closeTouch();
                        }}
                      >
                        Удалить
                      </p>
                      <p
                        style={{ opacity: 0.5 }}
                        onClick={() => {
                          closeTouch();
                        }}
                      >
                        Переслать
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
          style={
            touchSend || openChangeValue || openAnswerValue
              ? { zIndex: '3' }
              : { zIndex: '2' }
          }
        >
          {currentValue && touchSend && !IdChangeValue && (
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
              id="sendMessage"
              ref={textareaRef}
              className={styles.textarea}
              value={currentValue}
              placeholder={openChangeValue ? 'Изменить сообщение' : 'Написать'}
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
