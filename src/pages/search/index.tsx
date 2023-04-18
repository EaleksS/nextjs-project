import HeaderMobile from '@/Components/HeaderMobile/HeaderMobile';
import React, { FC, useEffect, useState } from 'react';
import Layout from '../Layout';
import FooterMobile from '@/Components/FooterMobile/FooterMobile';
import styles from './Search.module.scss';
import Sidebar from '@/Components/Sidebar/Sidebar';
import { IoSearch } from 'react-icons/io5';
import { FaStar, FaRegStar } from 'react-icons/fa';
import hospital_logo from '../../Assets/images/hospital.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSearchStore } from '@/store/SearchStore';
import { useCenterStore } from '@/store/CenterStore';

const Search: FC = () => {
  const [menu, setMenu] = useState(false);
  const [isSelect, setIsSelect] = useState('center');
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isValueSearch, setIsValueSearch] = useState<string>('');

  const router = useRouter();

  const { getAllCenter, isCenter } = useSearchStore();
  const { setIsSelectCenter } = useCenterStore();

  useEffect(() => {
    getAllCenter();
  }, []);

  // const raitingMath = (rate) => {
  //   const MIN_RATING = 0; // lowest rating on 5-point scale
  //   const MAX_RATING = 5; // highest rating on 5-point scale
  //   const min = 0; // lowest rating on original scale
  //   const max = Infinity; // highest rating on original scale

  //   // Example rating on original scal

  //   let mappedRating = Math.ceil(((rate - min) / (max - min)) * 4 + 0);
  //   return mappedRating; // Output: 5
  // };

  return (
    <Layout title="Search">
      <div className={styles.container}>
        <Sidebar menu={menu} setMenu={setMenu} />
        <div className={styles.content}>
          <div className={styles.nav}>
            <div className={styles.search}>
              <IoSearch className={styles.icon} />
              <input
                type="text"
                placeholder="Поиск..."
                value={isValueSearch}
                onChange={(e) => setIsValueSearch(e.target.value)}
              />
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
              {isSelect === 'center' && isCenter ? (
                isCenter
                  .filter((e) =>
                    e.name
                      .toLowerCase()
                      .split(' ')
                      .join('')
                      .includes(isValueSearch.toLowerCase().split(' ').join(''))
                  )
                  .map((e, i) => {
                    return (
                      <div
                        key={i + 1000}
                        className={styles.item}
                        onClick={() => {
                          setIsSelectCenter(e.name);
                          router.push('/center');
                        }}
                      >
                        <div className={styles.stars}>
                          {[0, 1, 2, 3, 4].map((r) => {
                            if (e.rating > r) {
                              return <FaStar key={r + 10000} />;
                            }
                            return <FaRegStar key={r + 10000} />;
                          })}
                        </div>
                        <div className={styles.info}>
                          <Image src={hospital_logo} alt="logo" />
                          <table>
                            <tbody>
                              <tr>
                                <td>Название:</td>
                                <td>{e.name}</td>
                              </tr>
                              <tr>
                                <td>Страна:</td>
                                <td>{e.state}</td>
                              </tr>
                              <tr>
                                <td>Город:</td>
                                <td>{e.city}</td>
                              </tr>
                              <tr>
                                <td>Адрес:</td>
                                <td>{e.address}</td>
                              </tr>
                              {/* <tr>
                            <td>Колличество специалистов:</td>
                            <td>{e.}</td>
                          </tr>
                          <tr>
                            <td>Онлайн методы лечения:</td>
                            <td>{e.name}</td>
                          </tr>
                          <tr>
                            <td>Оффлайн методы лечения:</td>
                            <td>{e.name}</td>
                          </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })
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
