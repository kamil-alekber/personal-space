import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a>Start Page</a>
        </Link>
      </li>
      <li>
        <Link href="/novelty">
          <a>Novelty Page</a>
        </Link>
      </li>
    </ul>
  )
}
