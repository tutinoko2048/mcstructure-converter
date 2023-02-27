export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const pageview = (url) => {
  if (!GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};


export function Analytics() {
  console.info(1, GA_TRACKING_ID);
  return (
    <>
      {GA_TRACKING_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
              console.info('analytics loaded');
            `}}
          />
        </>
      )}
    </>
  )
}