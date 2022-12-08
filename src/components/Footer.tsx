import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from './styles/layout.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.links}>
        <a href='https://github.com/Bladieblah'><FontAwesomeIcon icon={faGithub}/> Bladieblah</a>
        <span>|</span>
        <a href='mailto:recruitment.mwesseling@gmail.com'><FontAwesomeIcon icon={faEnvelope}/> recruitment.mwesseling@gmail.com</a>
        <span className={styles.split}>|</span> <br className={styles.newline}/>
        <a href='https://www.linkedin.com/in/matthijs-wesseling-779879199/'><FontAwesomeIcon icon={faLinkedin}/> Matthijs Wesseling</a>
        <span>|</span>
        {/* <a href='https://matthijswesseling.nl'><FontAwesomeIcon icon={faEarth}/> matthijswesseling.nl</a> */}
        <a href='https://www.youtube.com/channel/UCdSqZpO3e_3n0cF4njgaMRQ/videos'><FontAwesomeIcon icon={faYoutube}/> Matthijs Wesseling</a>
      </p>
    </div>
  )
}
