import styles from './styles/cvitem.module.css'
import { ReactNode } from 'react'

type CVProps = {
  company: string,
  function: string,
  city: string,
  dates: string,
  children: ReactNode,
}

export default function CvItem(props: CVProps) {
  return (
    <article className={styles.item}>
      <div>
        <section className={styles.description}>
          <h2>{props.company}</h2>
          <h3>{props.function}</h3>
        </section>
        <section className={styles.date}>
          <p>{props.city}</p>
          <p>{props.dates}</p>
        </section>
      </div>
      <div className={styles.content}>
        {props.children}
        <div className={styles.spacing}/>
      </div>
    </article>
  )
}