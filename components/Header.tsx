import Link from 'next/link'
import React from 'react'
import { useBasket } from '../hooks/useBasket'
import styles from '../styles/Header.module.css'

export function Header() {
  const basket = useBasket()

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
      <div className={styles.header_basket}>
        <Link href="/checkout">
          <a>
            {basket.totalPrice}тг {basket.items.length} товар
          </a>
        </Link>
      </div>
    </header>
  )
}
