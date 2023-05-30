import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '../src/Header/Header';
import Footer from '../src/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>

      <Component {...pageProps} />

      <Footer />
    </>
  )
}

export default MyApp
