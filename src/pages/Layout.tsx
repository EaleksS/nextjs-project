import Head from 'next/head';
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
  title: string;
  description?: string;
}

// const inter = Inter({ subsets: ['latin'] });

export const Layout: FC<ILayout> = ({
  children,
  title,
  description = 'description',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};
