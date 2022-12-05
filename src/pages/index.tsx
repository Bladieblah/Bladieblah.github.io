import Button from '../components/Button'
import styles from './index.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src='/me.jpg' alt='idk'/>
      </div>

      <div style={{
        float: 'right',
        border: '2px solid white',
        borderRadius: '10px',
        margin: '70px',
        maxWidth: '500px',
        // position: 'absolute',
      }}>
        <p style={{
          fontSize: 28,
          margin: '20px',
        }}>About Me</p>
        <p style= {{
          margin: '20px',
          fontSize: '20px',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor eros scelerisque mauris placerat, sit amet pretium justo rutrum. Curabitur ut ligula eu nisi gravida aliquam. In sed tincidunt sapien. Maecenas vel lectus quam. Suspendisse potenti. Suspendisse sit amet magna non diam tempus viverra. Nunc scelerisque tincidunt tellus ac pharetra.

          Nunc maximus eros sit amet malesuada porttitor. Sed aliquam hendrerit mauris eget aliquam. Nam nec faucibus arcu, vitae scelerisque lorem. Proin vel eleifend arcu. Duis non vulputate ligula. Praesent velit diam, auctor id fringilla quis, vestibulum non elit. Integer blandit augue nec arcu efficitur dictum. Sed quam augue, facilisis nec volutpat in, vehicula nec felis.


        </p>
      </div>
    </>
  )
}