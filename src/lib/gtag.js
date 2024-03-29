import Script from 'next/script';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const pageview = (url) => {
  if (!GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export function Analytics() {
  return (
    <>
      {GA_TRACKING_ID && (
        <>
          <Script id="load" defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
          <Script id="ga" defer strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
              console.info('analytics loaded');
            `}
          </Script>
        </>
      )}
    </>
  )
}