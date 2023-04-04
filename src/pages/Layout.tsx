import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useAuthStore } from '@/store/store';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import SelectLang from '@/Components/SelectLang/SelectLang';
import { log } from 'console';

interface ILayout {
  children: ReactNode;
  title: string;
  description?: string;
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const Layout: FC<ILayout> = ({
  children,
  title,
  description = 'description',
}) => {
  const { user, getImageUser, userInfo } = useAuthStore();

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === null) {
      router.push('/auth/login');
    } else {
      if (userInfo?.id) getImageUser(userInfo?.id);
      setLoading(false);
    }
  }, [user?.email]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        {!loading ? children : <div>Loading...</div>}
      </main>
      <ToastContainer autoClose={1500} />
      <SelectLang />
    </>
  );
};

export default Layout;
