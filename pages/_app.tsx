import '../styles/globals.css'
import type { AppProps } from 'next/app'

const Header = dynamic(() => import ('../src/Header/Header'), {
  ssr: false
})

import Footer from '../src/Footer/Footer';
import dynamic from 'next/dynamic';

import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { UserContextProvider } from '../src/UserContext/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <UserContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </UserContextProvider>
      </Provider>
    </>
  )
}

export default MyApp
