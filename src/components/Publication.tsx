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
    <div className={styles.wrapper}>
      <a href={props.arxiv}>
        <article className={styles.publication}>
          <h1>{props.title}</h1>
          <div className={styles.content}>
            <div className={styles.abstract}>
              <div className={styles.image}>
                <img src={props.img} alt='thumbnail'/>
              </div>
              {props.children}
            </div>
          </div>
      </article>
      </a>
    </div>
  )
}
