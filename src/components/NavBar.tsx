import Button from './Button'
import styles from './styles/layout.module.css'

export default function NavBar() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <div>
          <Button href='/cv' name='Curriculum Vitae' float='left'/>
          <Button href='/physarum' name='Computer Art' float='left'/>
        </div>
        <div>
          <Button href='/music' name='Music' float='right'/>
          <Button href='/publications' name='Publications' float='right'/>
        </div>
      </div>
    </div>
  )
}