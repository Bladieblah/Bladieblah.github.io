import styles from './styles/layout.module.css'

export default function FloatyBit() {
  return (
    <div className={styles.floatybit}>
      <div className={styles.name}><a href='./'>Matthijs Wesseling</a></div>
      <div className={styles.jobtitle}>Data Scientist</div>
    </div>
  )
}