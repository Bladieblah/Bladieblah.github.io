import styles from './styles/button.module.css'

type ButtonProps = {
  name: string,
  href: string,
};

const Button = (props: ButtonProps) => {
  return <div className={styles.buttonOuter}>
    <div>
      <a href={ props.href }>
        { props.name }
      </a>
    </div>
  </div>
}

export default Button