import NavBar from './NavBar'
import styles from './styles/layout.module.css'

export default function FloatyBit() {
  return (
    <div className={styles.floatybit}>
      <div className={styles.nameContainer}>
        <div className={styles.name}>
          <a href='./'>Matthijs Wesseling</a>
        </div>
        <div className={styles.whoami}>
          <div className={styles.datascience}>Data Scientist</div>
          <div className={styles.coverup}/>
          <div className={styles.physics}>Physicist</div>
          <div className={styles.guitar}>Guitarist</div>
          <div className={styles.programmer}>Programmer</div>
        </div>
      </div>
      <NavBar/>
    </div>
  )
}