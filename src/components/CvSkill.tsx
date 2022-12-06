import styles from './styles/cvitem.module.css'
import { ReactNode } from 'react'

type SkillProps = {
  name: string,
  children: ReactNode,
}

export default function CvSkill(props: SkillProps) {
  return (
    <article className={styles.content}>
      <section className={styles.skillname}>
        {props.name}
      </section>
      <section className={styles.skilldesc}>
        {props.children}
      </section>
    </article>
  )
}