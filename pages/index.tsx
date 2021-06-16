import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function StartPage() {
  const catalog = []

  for (let i = 0; i < 15; i++) {
    catalog.push({
      type: 'Микрокомпьютер',
      name: 'Raspberry Pi 4 Model B (4GB)',
      slug: 'raspberry-pi-4-model-b-4gb',
      price: 10000,
      imgUrl: 'raspberry.jpg',
    })
  }

  return (
    <div>
      <Head>
        <title>Start Page</title>
      </Head>
      <section>
        <h3>Микро-компьютеры</h3>
        <ul className={styles.catalog}>
          {catalog.map((item) => {
            return (
              <li className={styles.catalog_item}>
                <img src={item.imgUrl} alt="" />
                <div className={styles.catalog_item_description}>
                  <small className="type">{item.type}</small>
                  <span className="name">{item.name}</span>
                  <span className="price">{item.price}</span>

                  <div className="actions">
                    <Link href={`/product/${item.slug}`}>
                      <a>Подробней </a>
                    </Link>
                    <a> В корзину</a>
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
