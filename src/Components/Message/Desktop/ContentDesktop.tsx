import {
  BsArrowDownLeft,
  BsPinAngleFill,
  BsSearch,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import { ImArrowDownLeft2 } from 'react-icons/im';
import styles from './Content.module.scss';
import { useAuthStore } from '@/store/store';
import { FC, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoCall } from 'react-icons/io5';
import { useMessageStore } from '@/store/MessageStore';
import { FiPaperclip } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi2';
import React from 'react';

interface IContentDesktop {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

const ContentDesktop: FC<IContentDesktop> = ({ activeNav, setActiveNav }) => {
  const { isLang: lang } = useAuthStore();
  const [isLang, setisLang] = useState('');
  const { message, addMessages, changeMessage, deleteMessage, answerMessage } =
    useMessageStore();
  const textareaRef: any = useRef(null);
  const [currentValue, setCurrentValue] = useState('');

  const [isDelete, setIsDelete] = useState<any>([]);
  const [isFix, setIsFix] = useState<any>([]);

  const [isSelectMessage, setIsSelectMessage] = useState<null | number>(null);
  const [openChangeValue, setOpenChangeValue] = useState(false);

  const [answerValue, setAnswerValue] = useState('');
  const [openAnswerValue, setOpenAnswerValue] = useState(false);
  const [renderScroll, setRenderScroll] = useState<number>(0);

  const sectionRef = useRef<HTMLDivElement>(null);

  function scrollToMyElement() {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollToMyElement();
  }, [renderScroll, isSelectMessage]);

  const array2 = message
    .filter((i) => {
      let flag = 0;
      isDelete.forEach((j: number) => {
        if (i.id === j) {
          flag = i.id;
        }
      });
      return i.id !== flag;
    })
    .map((g) => {
      let flag = g.fix;
      isFix.forEach((h: number) => {
        if (g.id === h) {
          flag = !flag;
        }
      });
      return { ...g, fix: flag };
    });

  const [isSelectDots, setIsSelectDots] = useState(false);
  const [isSelectDotsId, setIsSelectDotsId] = useState<null | number>(null);

  const [isSelectMess, setIsSelectMess] = useState(false);
  const [isSelectMessId, setIsSelectMessId] = useState<null | number>(null);

  const handleClickSend = () => {
    if (openChangeValue && isSelectMessId) {
      changeMessage(currentValue, isSelectMessage, isSelectMessId);
      setCurrentValue('');
      setOpenChangeValue(false);
      return;
    }
    if (openAnswerValue) {
      answerMessage(currentValue, answerValue, isSelectMessage);
      setOpenAnswerValue(false);
      setAnswerValue('');
      setCurrentValue('');
      return;
    }
    addMessages(currentValue, isSelectMessage);
    setCurrentValue('');
  };

  useEffect(() => {
    if (currentValue) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [currentValue]);

  useEffect(() => {
    setisLang(lang);
  }, [lang]);

  return (
    <div
      className={styles.content}
      onClick={() => {
        setIsSelectMess(false);
        setIsSelectDots(false);
      }}
    >
      <div className={styles.chat}>
        <div className={styles.circle}>
          <div></div>
        </div>
        <div
          className={styles.search_message}
          // style={{ borderTopLeftRadius: '20px' }}
        >
          <label>
            <BsSearch className={styles.BsSearch} />
            <input
              type="text"
              placeholder={isLang === 'ru' ? 'Найти сообщение' : 'Find message'}
            />
          </label>
        </div>

        <div className={styles.nav}>
          <button
            className={activeNav === 'Messages' ? styles.active_nav : ' '}
            onClick={() => setActiveNav('Messages')}
          >
            {isLang === 'ru' ? 'Сообщения' : 'Messages'}
          </button>
          <button
            className={activeNav === 'Calls' ? styles.active_nav : ' '}
            onClick={() => setActiveNav('Calls')}
          >
            {isLang === 'ru' ? 'Звонки' : 'Calls'}
          </button>
        </div>
        {activeNav === 'Messages' && (
          <div className={styles.messages}>
            {array2
              .sort((a: any, b: any) => b.fix - a.fix)
              .map((elem) => (
                <div
                  className={styles.message}
                  key={elem.id + 100}
                  onClick={() => setIsSelectMessage(elem.id)}
                >
                  <img
                    className={styles.img_user}
                    src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                    alt="img user"
                  />
                  <div className={styles.info}>
                    <h3>{elem.name}</h3>
                    <div className={styles.truncate}>
                      <p className={styles.truncate_text}>
                        {elem.messages.length > 0
                          ? elem.messages[elem.messages.length - 1].message
                          : 'Сообщений нету'}
                      </p>
                    </div>
                  </div>
                  <div className={styles.notification}>
                    {elem.messages.length ? elem.messages.length : null}
                    {elem.fix && (
                      <BsPinAngleFill className={styles.BsPinAngleFill} />
                    )}
                  </div>
                  <div
                    className={styles.dots}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSelectDots((prev) => !prev);
                      setIsSelectDotsId(elem.id);
                    }}
                  >
                    <BsThreeDotsVertical />
                  </div>
                  <AnimatePresence>
                    {isSelectDots && isSelectDotsId === elem.id && (
                      <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0, y: -40, x: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0, y: -40, x: 50 }}
                        transition={{ duration: 0.25 }}
                        className={styles.isSelectDots}
                      >
                        <p
                          onClick={() => {
                            setIsFix((res: number[]) => [...res, elem.id]);
                            setIsSelectDots(false);
                          }}
                        >
                          {elem.fix ? 'Открепить' : 'Закрепить'}
                        </p>
                        <p
                          onClick={() => {
                            setIsDelete((res: number[]) => [
                              ...res,
                              Number(elem.id),
                            ]);
                            setIsSelectDots(false);
                            setIsSelectMessage(null);
                          }}
                        >
                          Удалить
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
          </div>
        )}

        {activeNav === 'Calls' && (
          <div className={styles.calls}>
            <div className={styles.call}>
              <img
                className={styles.img_user}
                src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                alt="img user"
              />
              <div className={styles.info}>
                <h3>Erik</h3>
                <p>
                  <ImArrowDownLeft2
                    className={`${styles.icon} ${styles.success}`}
                  />
                  30 марта, 18:20
                </p>
              </div>
              <div className={styles.call_icon}>
                <IoCall />
              </div>
            </div>
            <div className={styles.call}>
              <img
                className={styles.img_user}
                src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                alt="img user"
              />
              <div className={styles.info}>
                <h3>Erik</h3>
                <p>
                  <ImArrowDownLeft2 className={`${styles.icon}`} />
                  30 марта, 18:20
                </p>
              </div>
              <div className={styles.call_icon}>
                <IoCall />
              </div>
            </div>
          </div>
        )}
      </div>
      {isSelectMessage === null ? (
        <div className={styles.search}>
          <div
            className={styles.search_message}
            style={{
              // borderTopRightRadius: '20px',
              borderBottomLeftRadius: '20px',
            }}
          >
            <h1>
              {isLang === 'ru'
                ? 'Введите профиль '
                : 'Specify the profile you want to send the message to'}
            </h1>
            <label>
              <BsSearch className={styles.BsSearch} />
              <input
                type="text"
                placeholder={
                  isLang === 'ru' ? 'Найти сообщение' : 'Find message'
                }
              />
            </label>
          </div>
        </div>
      ) : (
        <div className={styles.chat_message}>
          <div className={styles.chat_message__content}>
            {array2
              .filter((j) => j.id === isSelectMessage)[0]
              .messages.map((mess) => (
                <React.Fragment key={mess.id}>
                  <div
                    className={styles.chat__text}
                    style={mess.me ? { justifyContent: 'flex-end' } : {}}
                  >
                    {mess.answer ? (
                      <div
                        className={styles.answer}
                        onContextMenu={(e) => {
                          e.preventDefault();
                          setIsSelectMessId(mess.id);
                          setIsSelectMess(true);
                        }}
                      >
                        <p className={styles.answerMess}>{mess.answer}</p>
                        <p>{mess.message}</p>
                      </div>
                    ) : (
                      <p
                        className={styles.p}
                        onContextMenu={(e) => {
                          e.preventDefault();
                          setIsSelectMessId(mess.id);
                          setIsSelectMess(true);
                        }}
                      >
                        {mess.message}
                      </p>
                    )}
                    {mess.id === isSelectMessId && isSelectMess && (
                      <div
                        className={`${styles.messageBlock} ${
                          mess.me && styles.messageBlockMe
                        }`}
                        onClick={(e) => e.stopPropagation()}
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
                            setIsSelectMess(false);
                          }}
                        >
                          Скопировать
                        </p>
                        <p
                          style={!mess.me ? { opacity: 0.5 } : {}}
                          onClick={() => {
                            mess.me && setOpenChangeValue(true);
                          }}
                        >
                          <label htmlFor="sendMessage">Изменить</label>
                        </p>
                        <p
                          style={{ color: '#F18383' }}
                          onClick={() => {
                            // setMessageDelete((prev) => [...prev, mess.id]);
                            deleteMessage(isSelectMessage, mess.id);
                            setIsSelectMess(false);
                          }}
                        >
                          Удалить
                        </p>
                        <p
                          style={{ opacity: 0.5 }}
                          onClick={() => {
                            setIsSelectMess(false);
                          }}
                        >
                          Переслать
                        </p>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            <div ref={sectionRef}></div>
          </div>
          <div className={styles.chat_message__input}>
            <div className={styles.entry_field}>
              <FiPaperclip className={styles.FiPaperclip} />
              <textarea
                id="sendMessage"
                ref={textareaRef}
                className={styles.textarea}
                value={currentValue}
                placeholder={'Написать'}
                onChange={(e) => setCurrentValue(e.target.value)}
              />
              {!currentValue ? (
                <MdKeyboardVoice className={styles.MdKeyboardVoice} />
              ) : (
                <span
                  className={styles.HiArrowUp}
                  // onTouchStart={() => handleTouchSend()}
                  // onTouchEnd={() => clearTimeout(timerIdSend)}
                  onClick={() => {
                    handleClickSend();
                    !openChangeValue && setRenderScroll((prev) => prev + 1);
                  }}
                >
                  <HiArrowUp />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentDesktop;
