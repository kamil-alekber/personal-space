import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Item, useBasket } from '../hooks/useBasket'
import { getAllProducts } from '../utils/content'

export default function StartPage({ catalog }: { catalog: Item[] }) {
  const router = useRouter()
  const basket = useBasket()

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
                <li className={styles.catalog_item} key={item.id}>
                  <img src={item.imgUrl} alt="" />
                  <div className={styles.catalog_item_description}>
                    <small className="type">{item.userType}</small>
                    <span className="name">{item.name}</span>
                    <span className="price">{item.price}</span>

                    <div className={styles.catalog_item_description_actions}>
                      <Link href={`/product/${item.id}`}>
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

export async function getStaticProps() {
  const catalog = getAllProducts()
  return {
    props: { catalog },
  }
}
