import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Home from '../src/Home/Home'
import Footer from '../src/Footer/Footer'

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>

    <Home />


    </div>
  )
}

export default HomePage
