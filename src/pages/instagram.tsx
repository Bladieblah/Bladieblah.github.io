import Script from "next/script";
import { useEffect, useState } from "react";
import styles from './styles/instagram.module.css'
import { html } from '../instagram_html'


const videos: string[] = [
  "CvF8lBmMzNZ",
  "Cv-ZuKCtaP0",
  "Ctw-2u-A7np",
  "CsHUyxfgD0Y",
  "Cr9ClsxAijr",
]

export default function Instragram() {
  const [position, setPosition] = useState(0);

  const [htmlLeft, setLeft] = useState(html((videos[(position) % videos.length])));
  const [htmlMain, setMain] = useState(html((videos[(position + 1) % videos.length])));
  const [htmlRight, setRight] = useState(html((videos[(position + 2) % videos.length])));

  const clickLeft = () => {
    console.log("Left!")
    setPosition((position - 1 + videos.length) % videos.length)
    console.log(position)
  }
  const clickRight = () => {
    console.log("Right!")
    setPosition((position + 1) % videos.length)
    console.log(position)
  }

  useEffect(() => {
    setLeft(html((videos[(position) % videos.length])))
    setMain(html((videos[(position + 1) % videos.length])))
    setRight(html((videos[(position + 2) % videos.length])))
  })

  return (
    <div className={styles.content}>
      <div onClick={clickLeft} className={styles.left}>
        {htmlLeft}
      </div>
      <div className={styles.main}>
        {htmlMain}
      </div>
      <div onClick={clickRight} className={styles.right}>
        {htmlRight}
      </div>
      <Script id="script" src="/embed_insta.js"/>
    </div>
  )
}