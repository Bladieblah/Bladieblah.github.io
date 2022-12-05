import Head from 'next/head'

import FloatyBit from './FloatyBit'
import MainCanvas from './MainCanvas'
import NavBar from './NavBar'
import { LayoutProps } from '../types'
import styles from './styles/layout.module.css'

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
            <>
              <NavBar/>
              { children }
            </>
          </MainCanvas>
        </div>
      </div>
    </div>
  )
}