import Button from './Button'
import styles from './styles/layout.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttonContainer}>
        <Button href='/cv' name='Curriculum Vitae'/>
        <Button href='/computer-art' name='Computer Art'/>
        <Button href='/videos' name='Videos'/>
        <Button href='/publications' name='Publications'/>
      </div>
    </div>
  )
}