import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { FC, ReactNode, useEffect } from 'react';
import { useAuthStore } from '@/store/store';
import { useRouter } from 'next/router';

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

  useEffect(() => {
    if (user === null) {
      router.push('/auth/login');
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
      <main className={roboto.className}>{children}</main>
    </>
  );
};

export default Layout;
