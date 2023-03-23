import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Script type="text/javascript" src="/plugins/jQuery/jquery.min.js" />
    <Script type="text/javascript" src="/plugins/bootstrap/bootstrap.min.js" defer />

    <Script type="text/javascript" src="/plugins/slick/slick.min.js" />
    <Script type="text/javascript" src="/plugins/slick/slick-animation.min.js" />

    <Script type="text/javascript" src="/plugins/colorbox/jquery.colorbox.js" />
    {/* <!--type="text/javascript"  shuffle --> */}
    <Script type="text/javascript" src="/plugins/shuffle/shuffle.min.js" defer />
    <Script type="text/javascript" src="/js/script.js" />

    <Component {...pageProps} />
  </>
  
  )
}
