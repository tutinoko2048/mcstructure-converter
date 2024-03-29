import '../styles/globals.css'
import Head from 'next/head';
import { useEffect } from "react";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
const clientSideEmotionCache = createEmotionCache();

import { GA_TRACKING_ID, pageview } from '../src/lib/gtag';
import { Analytics } from '../src/lib/gtag';

import { SnackbarContextProvider } from '../src/snackbar/Snackbar';

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;
  
  useEffect(() => {
    if (!GA_TRACKING_ID) return;
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      
      <Analytics/>
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarContextProvider>
          <Component {...pageProps} />
        </SnackbarContextProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}