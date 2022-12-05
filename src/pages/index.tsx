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
          I'm like really cool and you should hire me and give me lots of money pls :3. Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money! Give me money!
        </p>
      </div>
    </>
  )
}