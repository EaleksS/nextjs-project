import React, { useState } from 'react';
import styles from './Content.module.scss';
import { BsPinAngleFill } from 'react-icons/bs';
import MastersMessage from './MastersMessage/MastersMessage';
import { useRouter } from 'next/router';
import { useMessageStore } from '@/store/MessageStore';

type Props = {
  activeNav: string;
};

const Content = (props: Props) => {
  const activeNav = props.activeNav;
  const [isValue, setIsValue] = useState(0);
  const [isValueStart, setIsValueStart] = useState(0);
  const [isDelete, setIsDelete] = useState<any>([]);
  const [isFix, setIsFix] = useState<any>([]);
  const [contactId, setContactId] = useState(0);
  const [direction, setDirection] = useState('any');
  const [count, setCount] = useState(0);

  const router = useRouter();

  const { message } = useMessageStore();

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

  const handleTouchMove = (x: number) => {
    if (isValueStart > x) {
      setIsValue((res) => {
        if (direction === 'right') {
          if (Math.sign(res) === -1) {
            return 0;
          }
        }
        return res - 13;
      });
      setIsValueStart(x + 0.01);

      if (count === 0) {
        setDirection('left');
      }

      setCount((res) => res + 1);
    } else {
      setIsValue((res) => {
        if (direction === 'left') {
          if (Math.sign(res) === 1) {
            return 0;
          }
        }
        return res + 13;
      });
      setIsValueStart(x - 0.01);

      if (count === 0) {
        setDirection('right');
      }
      setCount((res) => res + 1);
    }
  };

  return (
    <div className={styles.contacts}>
      {activeNav === 'Messages'
        ? array2
            .sort((a: any, b: any) => b.fix - a.fix)
            .map((i) => (
              <div
                className={styles.contact}
                onClick={() => router.push(`/message/${i.id}#bottom_message`)}
                key={i.id}
                style={
                  i.id === contactId
                    ? {
                        transform: `translateX(${
                          isValue > 0
                            ? direction === 'right'
                              ? isValue < 200
                                ? isValue
                                : 200
                              : 0
                            : direction === 'left'
                            ? isValue < -200
                              ? -200
                              : isValue
                            : 0
                        }px)`,
                        transition: 'background .5s ',
                        background: `${
                          isValue < -230
                            ? 'rgba(64, 231, 49, 0.75)'
                            : 200 < isValue && isValue
                            ? '#FF8181'
                            : '#fff'
                        }`,
                      }
                    : { transform: `translateX(0px)` }
                }
                onTouchStart={(e) => {
                  setIsValueStart(e.touches[0].clientX);
                  setContactId(i.id);
                }}
                onTouchMove={(e) => handleTouchMove(e.touches[0].clientX)}
                onTouchEnd={() => {
                  console.log(isValue);
                  if (isValue > 100 && direction === 'right') {
                    setIsDelete((res: number[]) => [...res, Number(contactId)]);
                  }
                  if (isValue < -120 && direction === 'left') {
                    setIsFix((res: number[]) => [...res, contactId]);
                  }
                  setDirection('any');
                  setCount(0);
                  setIsValue(0);
                }}
              >
                <img src="/profile.png" alt="logo" />

                <div className={styles.info}>
                  <h3>{i.name}</h3>
                  <div className={styles.truncate}>
                    <p className={styles.truncate_text}>
                      {i.messages.length > 0
                        ? i.messages[i.messages.length - 1].message
                        : 'Сообщений нету'}
                    </p>
                  </div>
                </div>
                <div className={styles.notification}>
                  {i.messages.length ? i.messages.length : null}
                  {i.fix && (
                    <BsPinAngleFill className={styles.BsPinAngleFill} />
                  )}
                </div>
              </div>
            ))
        : message.map((i, index) => (
            <MastersMessage key={index} index={index} />
          ))}
    </div>
  );
};

export default Content;
