import Head from 'next/head'
import styles from '../../styles/Physarum.module.css'
import WebGLCanvas from '../../components/WebGLCanvas'

export default function Physarum() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Physarum slime mold simulation</title>
        <meta name="description" content="Made by me :D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Welcome to the moldiest page on my site!
        </h1>
        <div className={styles.container}>
          <WebGLCanvas/>
        </div>
      </main>
    </div>
  )
}
