import { GetStaticPaths } from 'next'
import { Item } from '../../hooks/useBasket'
import { getProduct, getProductIds } from '../../utils/content'
import styles from '../../styles/Product.module.css'

export default function Product(props: { product?: Item }) {
  return (
    <div>
      <div className={styles.main_info}>
        <img src={props?.product?.imgUrl} alt="" />
        <div>
          <h3>{props?.product?.name}</h3>
          <p>{props?.product.price} Тг</p>
          <small>Категория: {props?.product?.userType}</small>
        </div>
      </div>
      <hr />
      <div className={styles.product_description}>
        <h3>Характеристики</h3>
        <div
          className="characteristics"
          dangerouslySetInnerHTML={{ __html: props?.product?.content }}
        ></div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async function () {
  const paths = getProductIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const product = getProduct(params.id)
  return {
    props: {
      product,
    },
  }
}
