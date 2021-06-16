import Link from 'next/link'
import styles from '../styles/Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <h2>Я могу</h2>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <a>Каталог</a>
          </Link>
        </li>
        <li>
          <Link href="/novelty">
            <a>Политика конф.</a>
          </Link>
        </li>
        <li>
          <Link href="/novelty">
            <a>Контакты</a>
          </Link>
        </li>
        <li>
          <Link href="/novelty">
            <a>Учебный материал</a>
          </Link>
        </li>
      </ul>
      <div className={styles.header_basket}>5000тг 1 товар</div>
    </header>
  )
}
