import styles from './Frase.module.css'


// Exemplos para estilizar o código

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
    </div>
  )
}

export default Frase