import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Item, useBasket } from '../hooks/useBasket'

export default function StartPage() {
  const router = useRouter()
  const basket = useBasket()
  const catalog: Item[] = []

  for (let i = 0; i < 15; i++) {
    catalog.push({
      type: 'microcomputer',
      userType: 'Микро-компьютер',
      name: 'Raspberry Pi 4 Model B (4GB)',
      slug: 'raspberry-pi-4-model-b-4gb',
      price: 10000,
      userPrice: '10,000 тг.',
      imgUrl: 'raspberry.jpg',
    })
  }

  for (let i = 0; i < 15; i++) {
    catalog.push({
      type: 'accessories',
      userType: 'Комплектующие',
      name: 'Raspberry Pi 3 case',
      slug: 'raspberry-pi-3-case',
      price: 2500,
      userPrice: '2,500 тг.',
      imgUrl: 'raspberry_case.jpeg',
    })
  }

  return (
    <div>
      <Head>
        <title>Start Page</title>
      </Head>
      <section>
        <ul className={styles.category}>
          <li>
            <Link href="/">
              <a>Все</a>
            </Link>
          </li>
          <li>
            <Link href="?type=microcomputer">
              <a>Микро-компьютеры</a>
            </Link>
          </li>
          <li>
            <Link href="?type=accessories">
              <a>Комплектующие</a>
            </Link>
          </li>
          <li>
            <Link href="?type=recipes">
              <a>Рецепты</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.catalog}>
          {catalog
            .filter(
              (item) => item.type === router.query.type || !router.query.type
            )
            .map((item) => {
              return (
                <li className={styles.catalog_item}>
                  <img src={item.imgUrl} alt="" />
                  <div className={styles.catalog_item_description}>
                    <small className="type">{item.userType}</small>
                    <span className="name">{item.name}</span>
                    <span className="price">{item.userPrice}</span>

                    <div className={styles.catalog_item_description_actions}>
                      <Link href={`/product/${item.slug}`}>
                        <a>Подробней </a>
                      </Link>
                      <a
                        onClick={() => {
                          basket.addItem(item)
                        }}
                      >
                        {' '}
                        В корзину
                      </a>
                    </div>
                  </div>
                </li>
              )
            })}
        </ul>
      </section>
    </div>
  )
}
