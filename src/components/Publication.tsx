import { ReactNode } from 'react'
import styles from './styles/publication.module.css'

type PublicationProps = {
  title: string,
  arxiv: string,
  img: string,
  children?: ReactNode,
}

export default function Publication(props: PublicationProps) {
  return (
    <article className={styles.publication}>
        <h1>{props.title}</h1>
        <div className={styles.content}>
          <div className={styles.abstract}>
            {props.children}
          </div>
          <img src={props.img}/>
        </div>
    </article>
  )
}