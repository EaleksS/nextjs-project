import '@/styles/globals.css';
import '@/styles/reset.scss';
import '@/styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  
  const { setIsLang } = useAuthStore();
  useEffect(() => {
    setIsLang(window.navigator.language.slice(0, 2));
  }, []);

  return <Component {...pageProps} />;
}
