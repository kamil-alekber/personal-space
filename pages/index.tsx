import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Item, useBasket } from '../hooks/useBasket'
import { getAllProducts } from '../utils/content'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export default function StartPage({ catalog }: { catalog: Item[] }) {
  const router = useRouter()
  const basket = useBasket()

  return (
    <div>
      <Head>
        <title>Start Page</title>
      </Head>
      <section>
        <br />
        <Tabs
          // value={0}
          // onChange={handleChange}
          variant="scrollable"
          indicatorColor="primary"
          textColor="primary"
          aria-label="disabled tabs example"
        >
          <Link href="?type=accessories">
            <a>
              <Tab label="Комплектующие" />
            </a>
          </Link>
          <Link href="?type=microcomputer">
            <a>
              <Tab label="Микро-компьютеры" />
            </a>
          </Link>
          <Link href="?type=recipes">
            <a>
              <Tab label="Рецепты" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Tab label="Все товары" />
            </a>
          </Link>
        </Tabs>
        <br />
        <br />

        <ul className={styles.catalog}>
          {catalog
            .filter(
              (item) => item.type === router.query.type || !router.query.type
            )
            .map((item) => {
              return (
                <li className={styles.catalog_item} key={item.id}>
                  <Link href={`/product/${item.id}`}>
                    <a>
                      <img src={item.imgUrl} alt="" />
                    </a>
                  </Link>
                  <div className={styles.catalog_item_description}>
                    <small className="type">{item.userType}</small>
                    <span className="name">{item.name}</span>
                    <span className="price">{item.price}</span>

                    <div className={styles.catalog_item_description_actions}>
                      <Link href={`/product/${item.id}`}>
                        <a>
                          <Button>Подробней</Button>
                        </a>
                      </Link>
                      <a
                        onClick={() => {
                          basket.addItem(item)
                        }}
                      >
                        <IconButton
                          size="small"
                          color="primary"
                          aria-label="add to shopping cart"
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
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
