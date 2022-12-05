import styles from './styles/button.module.css'

type ButtonProps = {
  name: string,
  href: string,
  float?: 'left' | 'right' | 'none' | 'inline-start' | 'inline-end',
};

const Button = (props: ButtonProps) => {
  return <div className={styles.buttonOuter} style={{ float: props.float ?? 'none' }}>
    <div>
      <a href={ props.href }>
        { props.name }
      </a>
    </div>
  </div>
}

export default Button