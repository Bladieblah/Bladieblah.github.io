import Head from 'next/head'

import FloatyBit from './FloatyBit'
import MainCanvas from './MainCanvas'
import { LayoutProps } from '../types'
import styles from './styles/layout.module.css'

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ margin: 'auto', width: '100%' }}>
      <div style={{ margin: 'auto', maxWidth: '1124px' }}>
        <div className={styles.container}>
          <Head>
<<<<<<< HEAD
            <title>Matthijs Wesseling</title>
            <meta name="description" content="My website"/>
=======
            <title>BladieblahCom</title>
            <meta name="description" content="My website, built by me using Next.js"/>
>>>>>>> c2a4440a83152251bfd0213bf406ebe237228462
            <link rel="icon" href="/favicon.ico"/>
          </Head>
          <FloatyBit/>
          <MainCanvas>
              { children }
          </MainCanvas>
        </div>
      </div>
    </div>
  )
}