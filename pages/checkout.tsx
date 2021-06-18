import { useBasket } from '../hooks/useBasket'
import styles from '../styles/Checkout.module.css'

export default function Checkout() {
  const basket = useBasket()
  return (
    <div>
      <h3>Оформление заказа</h3>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault()
          const inputFields = [
            'name',
            'familyName',
            'country',
            'address',
            'city',
            'region',
            'postcode',
            'phone',
            'email',
            'details',
            'delivery_type',
          ]
          const inputFieldValues = {}

          for (let i = 0; i < inputFields.length; i++) {
            inputFieldValues[inputFields[i]] = e.target[inputFields[i]].value
          }
          console.log(inputFieldValues)
        }}
        className={styles.checkout_form}
      >
        <div className={styles.checkout_form_input_group}>
          <h3>Форма заказа</h3>
          <label htmlFor="name">Имя </label>
          <input id="name" type="text" name="name" />
          <label htmlFor="family-name">Фамилия </label>
          <input id="family-name" type="text" name="familyName" />
          <label htmlFor="country">Страна/регион</label>
          <input
            type="text"
            value="Казахстан"
            id="country"
            name="country"
            disabled
          />
          <label htmlFor="address">Адрес</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Номер дома и название улицы"
          />
          <label htmlFor="city">Населенный пункт</label>
          <input type="text" id="city" name="city" />
          <label htmlFor="region">Область район</label>
          <input type="text" id="region" name="region" />
          <label htmlFor="postcode">Почтовый индекс</label>
          <input type="text" id="postcode" name="postcode" />
          <label htmlFor="phone">Телефон</label>
          <input type="text" id="phone" name="phone" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <h3>Детали</h3>
          <label htmlFor="details">Примечание к заказу (необязательно)</label>
          <textarea rows={5} cols={50} name="details" id="details" />
        </div>
        <table className={styles.checkout_order}>
          <thead>
            <th>
              <h3>Ваш заказ</h3>
            </th>
            <tr>
              <th className="product-name">Товар</th>
              <th className="product-total">Цена</th>
            </tr>
          </thead>
          <tbody>
            {basket.items.map((item) => {
              return (
                <tr className="item" key={item.id}>
                  <td className="item_name">
                    {item.name}
                    <a
                      onClick={() => {
                        basket.removeItem(item)
                      }}
                    >
                      x
                    </a>
                  </td>
                  <td className="item_total">{item.price}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <hr />
            <tr>
              <th>Подытог</th>
              <td>{basket.totalPrice}</td>
            </tr>
            <hr />
            <tr>
              <th>Доставка</th>
              <dt>
                <div>
                  <input
                    type="radio"
                    id="local_pickup"
                    name="delivery_type"
                    value="local_pickup"
                  />
                  <label htmlFor="local_pickup">Самовызов</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="delivery_type"
                    id="shipping"
                    value="shipping"
                  />
                  <label htmlFor="shipping">Доставка</label>
                </div>
              </dt>
            </tr>
          </tfoot>
          <hr />
          <button type="submit">Продолжить</button>
        </table>
      </form>
    </div>
  )
}
