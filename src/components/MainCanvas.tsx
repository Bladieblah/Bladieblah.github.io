import { LayoutProps } from "../types"
import Footer from "./Footer"
import styles from './styles/layout.module.css'

export default function MainCanvas({ children }: LayoutProps) {
  return (
    <div className={styles.canvas}>
      <div className={styles.canvasContents}>
        { children }
      </div>
      <Footer/>
    </div>
  )
}