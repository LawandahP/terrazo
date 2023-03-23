import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <script async type="text/javascript" src="/plugins/jQuery/jquery.min.js"></script>
      <script async type="text/javascript" src="/plugins/bootstrap/bootstrap.min.js" defer />s
      <script async type="text/javascript" src="/plugins/slick/slick.min.js" />
      <script async type="text/javascript" src="/plugins/slick/slick-animation.min.js" />
      <script async type="text/javascript" src="/plugins/colorbox/jquery.colorbox.js" />
      <script async type="text/javascript" src="/plugins/shuffle/shuffle.min.js" defer />
      <script async type="text/javascript" src="/js/script.js" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}
