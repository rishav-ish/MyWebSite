import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add any global initialization here
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
