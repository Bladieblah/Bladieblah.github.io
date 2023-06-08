import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import styles from './buddhabrot.module.css'

export default function Buddhabrot() {
  return (
    <div className={styles.content}>
      <h1>The Buddhabrot Fractal</h1>
      <p>
      The classic Mandelbrot fractal is rendered using the quadratic equation:
      
      <Latex>{`$$z_{n+1} = z_n^2 + c$$`}</Latex>

      Here, <Latex>{"$c$"}</Latex> is a constant determined by the location of the pixel. By iterating this equation, a sequence of coordinates in the complex plane is generated. During the iteration, many points will eventually grow exponentially in magnitude and escape to infinity. The escape time is determined by how long it takes for the absolute value of <Latex>{"$z$"}</Latex> to reach a certain threshold, indicating that it has escaped to infinity. Points that do not escape are considered to be inside the Mandelbrot set and are typically rendered as black. By selecting an appropriate color scheme, captivating images can be created.
      </p>
      <p>
        This approach only uses a small part of the available information, as all details about the path except for the length are discarded. The Buddhabrot fractal takes a different approach to rendering the set, by drawing the entire path of all the points that escape. This greatly increases the computational cost of rendering the fractal. In the classical rendering, the contribution of long paths only becomes significant when deep zooms are generated. In the case of the Buddhabrot however, these paths contribute even when fully zoomed out. Resolving this issue requires proper sampling of the constant <Latex>{"$c$"}</Latex>.
      </p>
      <img src='/buddhabrot/buddha_4.jpg' alt='Buddha 4'/>
      <p>
        The sampling problem becomes especially apparent when trying to zoom in on the Buddhabrot. The initial values of <Latex>{"$c$"}</Latex> that contribute to the image are generally spread out across the complex plane, and finding these contributing areas can be very difficult. 
      </p>
      <img src='/buddhabrot/buddha_0.jpg' alt='Buddha 0'/>
      <p>
        One method to speed up rendering the fractal is the <a href='https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm'>metropolis hastings algorithm</a>. This famous algorithm was first used in the field of statistical physics and allows for sampling of complicated probability distributions. In the context of the buddhabrot fractal, it helps selecting points that contribute to the image. The basic idea of the algorithm is to take an initial point <Latex>{"$c$"}</Latex> and perturb it. New candidate coordinates are accepted based on a scoring function. By choosing the correct scoring function, rendering the Buddhabrot fractal can be sped up significantly.
      </p>
      <img src='/buddhabrot/buddha_1.jpg' alt='Buddha 1'/>
      <img src='/buddhabrot/buddha_2.jpg' alt='Buddha 2'/>
      <img src='/buddhabrot/buddha_3.jpg' alt='Buddha 3'/>
    </div>
  )
}