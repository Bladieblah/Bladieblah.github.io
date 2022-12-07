import Button from '../components/Button'
import styles from './index.module.css'

export default function Home() {
  return (
    <>
      {/* <div className={styles.imageWrapper}>
        <img className={styles.image} src='/me.jpg' alt='idk'/>
      </div> */}

      <div style={{
        // float: 'right',
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
          Welcome to my website! As you can probably tell, I only just started building it so there is still much work left. Until I add more content, please take a look at my CV!
        </p>
      </div>
    </>
  )
}