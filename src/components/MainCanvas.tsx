import { LayoutProps } from "../types"
import styles from './styles/layout.module.css'

export default function MainCanvas({ children }: LayoutProps) {
  return (
    <div className={styles.subContainer}>
      { children }
    </div>
  )
}