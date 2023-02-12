import { useEffect } from 'react';
import { useRouter } from "next/router";

import { existsGaId, pageview } from '../lib/gtag';

export default function usePageView() {
  const router = useRouter()

  useEffect(() => {
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path) => {
      pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}