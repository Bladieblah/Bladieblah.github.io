import CvItem from '../components/CvItem'
import styles from './cv.module.css'

export default function CV() {
  return (
    <div className={styles.container}>
      <CvItem url='/dymelogo.png'>
        Dyme is a startup, founded in Amsterdam in 2017, that aims to help people gain control over their finances. I started out part-time in the second year of my Master&aposs degree and continued full-time after I graduated. As a Data Scientist, I developed multiple crucial algorithms for Dyme. Examples are ML models for detecting subscriptions and for categorising transactions. 
      </CvItem>
      <CvItem url='/uva.png'>
        After completing my Bachelor&aposs thesis, I worked as a student assistent for my supervisor. I developed a pipeline for processing data from 
      </CvItem>
      <CvItem url='/python.svg'>
        Python I good at
      </CvItem>
    </div>
  )
}