import styles from './physarum.module.css'
import WebGLCanvas from '../../components/WebGLCanvas'

export default function Physarum() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>
          At some point in the near future, this will be a showcase of some of my personal projects. Until then, enjoy this color-shifting rectangle!
        </h1>
        <div className={styles.container}>
          <WebGLCanvas/>
        </div>
      </main>
    </div>
  )
}
