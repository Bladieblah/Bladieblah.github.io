import styles from './styles/index.module.css'

export default function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.about}>
        <div className={styles.image}>
          <img src='/me.jpg' alt='me.jpg'/>
        </div>
        <h1>About Me</h1>
        <p>
          Welcome to my website! I am a Physicist / Data Scientist / Data Engineer with a passion for music and programming. I am currently working at a consulancy called BigData Republic, where I assist companies with a wide variety of data-related challenges.
        </p>
        <p>
          On this website you can find my Curriculum Vitae, a list of my scientific publications and some of my personal projects. These include guitar covers I recorded for youtube and computer generated art.
        </p>
        <p>
          For inquiries, feel free to reach out on linked in or via email, both of which can be found in the footer!
        </p>
      </div>
    </div>
  )
}
