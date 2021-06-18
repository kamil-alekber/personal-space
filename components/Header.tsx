import Link from 'next/link'
import React from 'react'
import { useBasket } from '../hooks/useBasket'
import styles from '../styles/Header.module.css'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export function Header() {
  const basket = useBasket()
  const basketAmount = basket.items.length
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
        {basketAmount ? (
          <Link href="/checkout">
            <a>
              <Button variant="outlined" color="primary">
                {basket.totalPrice}тг
                {basketAmount > 1
                  ? ` ${basketAmount} товара`
                  : ` ${basketAmount} товар`}
                <ShoppingCartIcon />
              </Button>
            </a>
          </Link>
        ) : (
          'Пустая корзина'
        )}
      </div>
    </header>
  )
}
