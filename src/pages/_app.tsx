import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script async type="text/javascript" src="/plugins/jQuery/jquery.min.js"></Script>
      <Script async type="text/javascript" src="/plugins/bootstrap/bootstrap.min.js" defer />
      <Script async type="text/javascript" src="/plugins/slick/slick.min.js" />
      <Script async type="text/javascript" src="/plugins/slick/slick-animation.min.js" />
      <Script async type="text/javascript" src="/plugins/colorbox/jquery.colorbox.js" />
      <Script async type="text/javascript" src="/plugins/shuffle/shuffle.min.js" defer />
      {/* <Script async type="text/javascript" src="/js/script.js" /> */}
    <Component {...pageProps} />
  </>
  )
}
