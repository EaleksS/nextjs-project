import React, { FC, useState } from 'react';
import styles from './ModalContent.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaEllipsisH } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

interface IModalContent {
  setOpenModal: (bool: boolean) => void;
}

const ModalContent: FC<IModalContent> = ({ setOpenModal }) => {
  const [openEllipsisBlock, setOpenEllipsisBlock] = useState(false);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={styles.container}
      onClick={() => setOpenEllipsisBlock(false)}
    >
      <AiFillCloseCircle
        className={styles.close}
        onClick={() => setOpenModal(false)}
      />
      <div className={styles.ellipsisBlock}>
        <FaEllipsisH
          className={styles.ellipsis}
          onClick={(e) => {
            e.stopPropagation();
            setOpenEllipsisBlock((prev) => !prev);
          }}
        />
        <AnimatePresence>
          {openEllipsisBlock && (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0, y: -100, x: 45 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0, y: -100, x: 45 }}
              transition={{ duration: 0.25 }}
            >
              <p>Заблокировать</p>
              <p>Удалить чат</p>
              <p>Удалить историю чата</p>
              <p>Добавить в избранное</p>
              <p>Закрепить</p>
              <p>Изменить</p>
              <p>Пожаловаться</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.profile}>
        <p>Был(а) онлайн...</p>
        <img
          src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          alt="logo"
        />
      </div>
      <p className={styles.status}>
        Статус: Работник сайта, врач и тд Если сотрудник то место то запрашивать
        место работы
      </p>
      <div className={styles.btn}>
        <button>Аудиовызов</button>
        <button>Видеовызов</button>
      </div>
      <p className={styles.info}>
        Запланировать встречу / и она вноситя в календарь или позвонить сейчас
      </p>
      <div className={styles.gallery}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <img key={i} src="https://placehold.co/400x400" alt="placeholder" />
        ))}
      </div>
    </motion.div>
  );
};

export default ModalContent;
