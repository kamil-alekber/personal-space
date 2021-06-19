import { useBasket } from '../hooks/useBasket'
import styles from '../styles/Checkout.module.css'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

export default function Checkout() {
  const basket = useBasket()
  const countedBasket: { [name: string]: { count: number; total: number } } = {}

  for (let i = 0; i < basket.items.length; i++) {
    const item = basket.items[i]

    if (!countedBasket[item.name]) {
      countedBasket[item.name] = { count: 0, total: 0 }
    }

    countedBasket[item.name] = {
      count: countedBasket[item.name].count + 1,
      total: countedBasket[item.name].total + item.price,
    }
  }

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
          <FormControl required margin="dense">
            <InputLabel htmlFor="name">Имя</InputLabel>
            <Input id="name" name="name" />
          </FormControl>

          <FormControl required margin="dense">
            <InputLabel htmlFor="family-name">Фамилия</InputLabel>
            <Input id="family-name" name="familyName" />
          </FormControl>

          <FormControl required margin="dense">
            <InputLabel htmlFor="country">Страна</InputLabel>
            <Input id="country" name="country" disabled value="Казахстан" />
          </FormControl>

          <FormControl required margin="dense">
            <InputLabel htmlFor="region">Область район</InputLabel>
            <Input id="region" name="region" />
          </FormControl>

          <FormControl required margin="dense">
            <InputLabel htmlFor="city">Населенный пункт</InputLabel>
            <Input id="city" name="city" />
          </FormControl>

          <FormControl required margin="dense">
            <InputLabel htmlFor="address">Адрес</InputLabel>
            <Input
              id="address"
              name="address"
              placeholder="Номер дома и название улицы"
            />
          </FormControl>

          <FormControl required margin="dense">
            <InputLabel htmlFor="postcode">Почтовый индекс</InputLabel>
            <Input id="postcode" name="postcode" type="number" />
          </FormControl>

          <FormControl required margin="dense">
            <InputLabel htmlFor="phone">Телефон</InputLabel>
            <Input id="phone" name="phone" type="number" />
          </FormControl>

          <FormControl required margin="dense">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" name="email" />
          </FormControl>

          <h3>Детали</h3>

          <FormControl margin="dense">
            <InputLabel htmlFor="details">Примечание к заказу</InputLabel>
            <Input multiline id="details" name="details" />
          </FormControl>
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
            {Object.keys(countedBasket).map((product, i) => {
              return (
                <tr className="item" key={i}>
                  <td
                    className="item_name"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    [x{countedBasket[product].count}] {product}
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        basket.removeItem(product)
                      }}
                    >
                      <IndeterminateCheckBoxIcon />
                    </a>
                  </td>
                  <td className="item_total">{countedBasket[product].total}</td>
                </tr>
              )
            })}
          </tbody>
          <hr />
          <tfoot>
            <tr>
              <th>Итог:</th>
              <td>{basket.totalPrice}</td>
            </tr>
          </tfoot>
          <Button
            disabled={!basket.totalPrice}
            type="submit"
            variant="contained"
            color="primary"
          >
            Продолжить
          </Button>
        </table>
      </form>
    </div>
  )
}
