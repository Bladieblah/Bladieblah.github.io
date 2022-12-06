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
    <article className={styles.content}>
      <section className={styles.description}>
        <h2>{props.company}</h2>
        <h3>{props.function}</h3>
        {props.children}
      </section>
      <section className={styles.date}>
        <p>{props.city}</p>
        <p>{props.dates}</p>
      </section>
    </article>
  )
}