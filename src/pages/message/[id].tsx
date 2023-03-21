import styles from '../../styles/Message_id.module.scss';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Layout from '../Layout';
import Image from 'next/image';
import profileImg from '@/Assets/images/profile.png';
import { FiPaperclip } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import { useRouter } from 'next/router';

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
          <Image src={profileImg} alt="img" />
        </div>
        <div className={styles.content}>
          <div className={`${styles.message}`}>
            <h2>Привет</h2>
          </div>
          <div className={`${styles.message} ${styles.me}`}>
            <h2>Как дела?</h2>
          </div>
          <div className={`${styles.message}`}>
            <h2>Хорошо</h2>
          </div>
          <div className={`${styles.message} ${styles.me}`}>
            <h2>Что делаешь?</h2>
          </div>
          <div className={`${styles.message}`}>
            <h2>Ничего</h2>
          </div>
          <div className={`${styles.message} ${styles.me}`}>
            <h2>Понятно</h2>
          </div>
          <div className={`${styles.message}`}>
            <h2>Привет</h2>
          </div>
          <div className={`${styles.message} ${styles.me}`}>
            <h2>Как дела?</h2>
          </div>
          <div className={`${styles.message}`}>
            <h2>Хорошо</h2>
          </div>
          <div className={`${styles.message} ${styles.me}`}>
            <h2>Что делаешь?</h2>
          </div>
          <div className={`${styles.message}`}>
            <h2>Ничего</h2>
          </div>
          <div className={`${styles.message} ${styles.me}`}>
            <h2>Понятно</h2>
          </div>
          <div className={`${styles.message}`}>
            <h2>Привет</h2>
          </div>
          <div className={`${styles.message} ${styles.me}`}>
            <h2>Как дела?</h2>
          </div>
          <div className={`${styles.message}`}>
            <h2>Хорошо</h2>
          </div>
          <div className={`${styles.message} ${styles.me}`}>
            <h2>Что делаешь?</h2>
          </div>
          <div className={`${styles.message}`}>
            <h2>Ничего</h2>
          </div>
          <div className={`${styles.message} ${styles.me}`}>
            <h2>Понятно</h2>
          </div>
          <div id="bottom_message"></div>
        </div>

        <div className={styles.mobile_footer_main_container}>
          <div className={styles.entry_field}>
            <FiPaperclip className={styles.FiPaperclip} />
            <textarea
              ref={textareaRef}
              className={styles.textarea}
              value={currentValue}
              placeholder="Написать"
              onChange={(e) => setCurrentValue(e.target.value)}
            />
            <MdKeyboardVoice className={styles.MdKeyboardVoice} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Message;
