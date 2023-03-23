import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../../components/header'
import Hero from '../../components/hero'
import About from '../../components/about'
import Facts from '../../components/facts'
import Footer from '../../components/footer'
import Services from '../../components/services'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = '/js/script.js';
    script.async = true;
  
    document.head.appendChild(script);
  
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Prevics Terrazo Ltd</title>
        <meta name="description" content="Prevics Terrazo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" type="image/png" href="images/favicon.png" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Facts />
      <Services />
      <Footer />
    </>
  )
}
