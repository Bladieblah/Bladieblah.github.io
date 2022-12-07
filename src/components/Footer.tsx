import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles/layout.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href='https://github.com/Bladieblah'><FontAwesomeIcon icon={faGithub}/> Bladieblah</a>
      <a href='mailto:recruitment.mwesseling@gmail.com'><FontAwesomeIcon icon={faEnvelope}/> recruitment.mwesseling@gmail.com</a>
      <a href='https://www.linkedin.com/in/matthijs-wesseling-779879199/'><FontAwesomeIcon icon={faLinkedin}/> Matthijs Wesseling</a>
    </div>
  )
}