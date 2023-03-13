import OptionsForUser from "@/Components/MainPage/OptionsForUser/OptionsForUser";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "../styles/Message.module.scss";
import { AnimatePresence } from "framer-motion";
import NavBar from "@/Components/NavBar/NavBar";
import FooterMobile from "@/Components/FooterMobile/FooterMobile";
import MobileMenu from "@/Components/MainPage/MobileMenu/MobileMenu";
import Navigation from "@/Components/MessagePage/Mobile/Navigation/Navigation";
import Content from "@/Components/MessagePage/Mobile/Content/Content";
import ContentDesktop from "@/Components/MessagePage/Desktop/ContentDesktop";

const array = [
  {
    id: 1,
    message: "Я созванивались с ней и не один раз, она ведет себя ",
    name: "Олег",
    fix: false,
  },
  {
    id: 2,
    message: "Попробуй так",
    name: "Саша",
    fix: true,
  },
  {
    id: 3,
    message: "Не было сообщений",
    name: "Георгий",
    fix: false,
  },
  {
    id: 4,
    message: "Не было сообщений",
    name: "Коля",
    fix: false,
  },
];

const Message = () => {
  const [menu, setMenu] = useState(false);
<<<<<<< HEAD
  const [activeNav, setActiveNav] = useState("Контакты");
=======
  const [activeNav, setActiveNav] = useState('Контакты');

  const [isValue, setIsValue] = useState(0);
  const [isValueStart, setIsValueStart] = useState(0);
  const [isDelete, setIsDelete] = useState<any>([]);
  const [isFix, setIsFix] = useState<any>([]);
  const [contactId, setContactId] = useState(0);
  const [direction, setDirection] = useState('any');
  const [count, setCount] = useState(0);

  const array2 = array
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
      setIsValue((res) => res - 13);
      setIsValueStart(x + 0.01);
      if (count === 0) {
        setDirection('left');
      }

      setCount((res) => res + 1);
    } else {
      setIsValue((res) => res + 13);
      setIsValueStart(x - 0.01);
      if (count === 0) {
        setDirection('right');
      }
      setCount((res) => res + 1);
    }
  };
>>>>>>> a1400455976cfa5bb1fe97748e67cc0de767bed7

  return (
    <div className={styles.container}>
      <NavBar menu={menu} setMenu={setMenu} />
      <div className={styles.main_container}>
        <OptionsForUser menu={menu} className={styles.menu} />
        <ContentDesktop activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
      <div className={styles.main_container_mobile}>
        <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
        <Content array={array} activeNav={activeNav} />
        <FooterMobile />
      </div>
      <AnimatePresence>
        {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Message;
