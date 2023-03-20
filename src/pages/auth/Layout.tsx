import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { FC, ReactNode, useEffect } from 'react';
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
  const { user, getSessionUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // getSessionUser();

    if (user !== null) {
      router.push('/');
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        {children}
        <ToastContainer />
      </main>
      <SelectLang />
    </>
  );
};

export default Layout;
