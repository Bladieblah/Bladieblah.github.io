import Button from './Button'
import styles from './styles/layout.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttonContainer}>
        <Button href='/cv' name='Curriculum Vitae'/>
        <Button href='/physarum' name='Computer Art'/>
        <Button href='/music' name='Music'/>
        <Button href='/publications' name='Publications'/>
      </div>
    </div>
  )
}