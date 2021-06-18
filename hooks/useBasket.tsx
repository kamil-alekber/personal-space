import React, { FC, useContext, useState } from 'react'

export interface Item {
  id: string
  type: string
  name: string
  slug: string
  price: number
  imgUrl: string
  userType: string
  content?: string
}

const BasketContext = React.createContext<{
  items: Item[]
  totalPrice: number
  addItem: (item: Item) => void
  removeItem: (name: string) => void
}>({
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
})

export const BasketProvider: FC = function ({ children }) {
  const [items, setItems] = useState<Item[]>(() => {
    let items = []

    if (typeof localStorage !== 'undefined') {
      const cartItems = localStorage?.getItem('cart')
      if (cartItems) items = JSON.parse(cartItems)
    }

    return items
  })
  const [totalPrice, setTotalPrice] = useState(
    items.reduce((total, item) => {
      return total + item.price
    }, 0)
  )

  function addItem(item: Item) {
    const _items = [...items, item]
    setTotalPrice(totalPrice + item.price)
    setItems(_items)
    localStorage.setItem('cart', JSON.stringify(_items))
  }

  function removeItem(_name: string) {
    const idx = items.findIndex((item) => item.name === _name)
    if (idx < 0) return
    const _items = [...items]
    const deletedItem = _items.splice(idx, 1)

    setTotalPrice(totalPrice - deletedItem[0].price)
    setItems(_items)
    localStorage.setItem('cart', JSON.stringify(_items))
  }

  return (
    <BasketContext.Provider value={{ items, totalPrice, addItem, removeItem }}>
      {children}
    </BasketContext.Provider>
  )
}
export const useBasket = () => useContext(BasketContext)
