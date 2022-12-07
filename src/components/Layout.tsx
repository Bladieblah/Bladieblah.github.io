import Head from 'next/head'

import FloatyBit from './FloatyBit'
import MainCanvas from './MainCanvas'
import { LayoutProps } from '../types'
import styles from './styles/layout.module.css'
import Footer from './Footer'

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ margin: 'auto', width: '100%' }}>
      <div style={{ margin: 'auto', maxWidth: '1124px' }}>
        <div className={styles.container}>
          <Head>
            <title>BladieblahCom</title>
            <meta name="description" content="My website"/>
            <link rel="icon" href="/favicon.ico"/>
          </Head>
          <FloatyBit/>
          <MainCanvas>
              { children }
              <Footer/>
          </MainCanvas>
        </div>
      </div>
    </div>
  )
}