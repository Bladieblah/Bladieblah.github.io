import styles from './styles/cv.module.css'
import { ReactNode } from 'react'

type CVProps = {
  url: string,
  children: ReactNode,
}

export default function CvItem(props: CVProps) {
  return (
    <div className={styles.cvitem}>
        <div className={styles.cvimage} style={{backgroundImage: `url(${props.url})`}}/>
        <div className={styles.cvtext}>
          <p style={{display: 'block'}}>
            { props.children }
          </p>
        </div>
    </div>
  )
}