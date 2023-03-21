import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useAuthStore } from '@/store/store';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import SelectLang from '@/Components/SelectLang/SelectLang';

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
  const { user } = useAuthStore();

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === null) {
      router.push('/auth/login');
    } else {
      setLoading(false);
    }
  }, [user?.email]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          http-equiv="Content-Security-Policy"
          content="
    default-src 'self';
    connect-src http://135.125.169.95:8090;
    script-src 'self' http://135.125.169.95:8090;
    img-src 'self' http://135.125.169.95:8090;
    frame-ancestors 'self';
    style-src 'self';
    font-src 'self'; "
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        {!loading ? children : <div>Loading...</div>}
      </main>
      <ToastContainer />
      <SelectLang />
    </>
  );
};

export default Layout;
