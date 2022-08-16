import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link exact to="/">Home</Link>
      </li>
      <li className={styles.item}>
        <Link exact to="/empresa">Empresa</Link>
      </li>
      <li className={styles.item}>
        <Link exact to="/contato">Home</Link>
      </li>
    </ul>
  )
}

export default Navbar