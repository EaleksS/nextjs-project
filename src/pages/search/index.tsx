import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { FC, useState } from 'react';
import Layout from '../Layout';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import styles from './Search.module.scss';
import Sidebar from '@/Components/Sidebar/Sidebar';
import { IoSearch } from 'react-icons/io5';
import { FaStar, FaRegStar } from 'react-icons/fa';
import hospital_logo from '../../Assets/images/hospital.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Search: FC = () => {
  const [menu, setMenu] = useState(false);
  const [isSelect, setIsSelect] = useState('center');
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const router = useRouter();

  return (
    <Layout title="Search">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div className={styles.content}>
          <div className={styles.nav}>
            <div className={styles.search}>
              <IoSearch className={styles.icon} />
              <input type="text" placeholder="Поиск..." />
            </div>
            <div className={styles.bottom_nav}>
              <h6
                className={isSelect === 'center' ? styles.active : ''}
                onClick={() => setIsSelect('center')}
              >
                Центр и специалисты:
              </h6>
              <h6
                className={isSelect !== 'center' ? styles.active : ''}
                onClick={() => setIsSelect('clinic')}
              >
                Клиника:
              </h6>
            </div>
          </div>
          <div className={styles.result_search}>
            <div className={styles.items}>
              {isSelect === 'center' ? (
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
                  <div
                    key={e + 1000}
                    className={styles.item}
                    onClick={() => router.push('/center')}
                  >
                    <div className={styles.stars}>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <div className={styles.info}>
                      <Image src={hospital_logo} alt="logo" />

                      <table>
                        <tbody>
                          <tr>
                            <td>Название:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Страна:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Город:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Колличество специалистов:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Онлайн методы лечения:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Оффлайн методы лечения:</td>
                            <td>...</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className={styles.item}
                  onClick={() => router.push('/clinic')}
                >
                  <div className={styles.stars}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <div className={styles.info}>
                    <Image src={hospital_logo} alt="logo" />
                    <table>
                      <tbody>
                        <tr>
                          <td>Название:</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>Страна:</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>Город:</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>Методы лечения:</td>
                          <td>...</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile_container}>
        <div className={styles.content}>
          <HeaderMobile
            menu={menu}
            setMenu={setMenu}
            isSearch={true}
            setIsOpenSearch={setIsOpenSearch}
            isOpenSearch={isOpenSearch}
          />
          <div className={styles.nav}>
            <div className={styles.bottom_nav}>
              <h6
                className={isSelect === 'center' ? styles.active : ''}
                onClick={() => setIsSelect('center')}
              >
                Центр и специалисты:
              </h6>
              <h6
                className={isSelect !== 'center' ? styles.active : ''}
                onClick={() => setIsSelect('clinic')}
              >
                Клиника:
              </h6>
            </div>
          </div>
          <div className={styles.result_search}>
            <div className={styles.items}>
              {isSelect === 'center' ? (
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
                  <div
                    key={e + 1000}
                    className={styles.item}
                    onClick={() => router.push('/center')}
                  >
                    <div className={styles.stars}>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <div className={styles.info}>
                      <Image src={hospital_logo} alt="logo" />

                      <table>
                        <tbody>
                          <tr>
                            <td>Название:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Страна:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Город:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Колличество специалистов:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Онлайн методы лечения:</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>Оффлайн методы лечения:</td>
                            <td>...</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className={styles.item}
                  onClick={() => router.push('/clinic')}
                >
                  <div className={styles.stars}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <div className={styles.info}>
                    <Image src={hospital_logo} alt="logo" />
                    <table>
                      <tbody>
                        <tr>
                          <td>Название:</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>Страна:</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>Город:</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>Методы лечения:</td>
                          <td>...</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <FooterMobile />
      </div>
    </Layout>
  );
};

export default Search;
