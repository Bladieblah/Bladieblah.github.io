import Link from 'next/link'
import styles from './computer.module.css'

export default function ComputerArt() {
  return (
    <div className={ styles.container }>
      <Link href='/computer-art/buddhabrot'><h1>Buddhabrot</h1></Link>
      <article>
        <p className={ styles.text}>
          The Buddhabrot is a gorgeous variation of the mandelbrot fractal. It much more challenging to render properly than the regular mandelbrot, especially once you start zooming in. I made my own implementation inspired by <a href='http://www.steckles.com/buddha/'>Alexander Boswell's version</a>. What sets my version apart, is the addition of a second window where you can select a region of the Mandelbrot to sample. This speeds up the rendering process, and makes it more interactive.
        </p>
        <div className={ styles.wrapper }>
          <img src='/buddhabrot/buddha_4.jpg' className={ styles.thumbnail }/>
        </div>
      </article>
    </div>
  )
}