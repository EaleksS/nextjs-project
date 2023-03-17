import FooterMobile from "@/Components/FooterMobile/FooterMobile";
import HeaderMobile from "@/Components/MainPage/HeaderMobile/HeaderMobile";
import MobileMenu from "@/Components/MainPage/MobileMenu/MobileMenu";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Layout from "../Layout";

const Access = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Layout title="Доступ">
      <div>
        <AnimatePresence>
          {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
        <HeaderMobile menu={menu} setMenu={setMenu} />
        {/* <div className={styles.content}>
          
        </div> */}
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Access;
