import styles from './styles/cv.module.css'

type CVProps = {
  url: string,
  children: JSX.Element|string,
}

export default function CvItem(props: CVProps) {
  return (
    <div className={styles.cvitem}>
        <div className={styles.cvimage} style={{backgroundImage: `url(${props.url})`}}/>
        <div className={styles.cvtext}>
          { props.children }
        </div>
    </div>
  )
}