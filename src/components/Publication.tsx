import { ReactNode } from 'react'
import styles from './styles/publications.module.css'

type PublicationProps = {
  title: string,
  arxiv: string,
  img: string,
  children: ReactNode,
}

export default function Publication(props: PublicationProps) {
  return (
    <article className={styles.publication}>
        <h1>{props.title}</h1>
        <div className={styles.content}>
          <div>
            {props.children}
          </div>
          <img src={props.img}/>
        </div>
    </article>
  )
}