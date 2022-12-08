import Publication from '../components/Publication'
import styles from './styles/publications.module.css'

export default function Publications() {
  return (
    <div className={styles.publications}>
      <Publication 
        title={`The inconsistency of linear dynamics and Born's rule`}
        img='/paper_2106.10136.png'
        arxiv='https://arxiv.org/abs/2106.10136'
      >
        <p>
          Modern experiments using nanoscale devices come ever closer to bridging the divide between the quantum and classical realms, bringing experimental tests of objective collapse theories that propose alterations to Schrödinger{`'`}s equation within reach. Such objective collapse theories aim to explain the emergence of classical dynamics in the thermodynamic limit and hence resolve the inconsistency that exists within the axioms of quantum mechanics.
        </p>
        <p>
          Here, we show that requiring the emergence of Born{`'`}s rule for relative frequencies of measurement outcomes without imposing them as part of any axiom, implies that such objective collapse theories cannot be linear. Previous suggestions for a proof of the emergence of Born{`'`}s rule in classes of problems that include linear objective collapse theories are analysed and shown to include hidden assumptions.
        </p>
      </Publication>
      <Publication 
        title='An objective collapse model without state dependent stochasticity'
        img='/paper_2208.11584.png'
        arxiv='https://arxiv.org/abs/2208.11584'
      >
        <p>
          The impossibility of describing measurement in quantum mechanics while using a quantum mechanical model for the measurement machine, remains one of its central problems. Objective collapse theories attempt to resolve this problem by proposing alterations to Schrödinger{`'`}s equation.
        </p>
        <p> 
          Here, we present a minimal model for an objective collapse theory that, in contrast to previous proposals, does not employ state dependent stochastic terms in its construction. It is an explicit proof of principle that it is possible for Born{`'`}s rule to emerge from a stochastic evolution in which no properties of the stochastic process depend on the state being evolved. We propose the presented model as a basis from which more realistic objective collapse theories can be constructed.
        </p>
      </Publication>
    </div>
  )
}