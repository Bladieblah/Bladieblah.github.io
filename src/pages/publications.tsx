import Publication from '../components/Publication'
import styles from './styles/publications.module.css'

export default function Publications() {
  return (
    <div className={styles.publications}>
      <Publication 
        title='An objective collapse model without state dependent stochasticity'
        img='/paper_2208.11584.png'
        arxiv='https://arxiv.org/abs/2208.11584'
      >
        <p>
          The impossibility of describing measurement in quantum mechanics while using a quantum me- chanical model for the measurement machine, remains one of its central problems. Objective collapse theories attempt to resolve this problem by proposing alterations to Schrödinger{`'`}s equation.
        </p>
        <p> 
          Here, we present a minimal model for an objective collapse theory that, in contrast to previous proposals, does not employ state dependent stochastic terms in its construction. It is an explicit proof of prin- ciple that it is possible for Born{`'`}s rule to emerge from a stochastic evolution in which no properties of the stochastic process depend on the state being evolved. We propose the presented model as a basis from which more realistic objective collapse theories can be constructed.
        </p>
      </Publication>
    </div>
  )
}