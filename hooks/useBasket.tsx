import React, { FC, useContext, useState } from 'react'

export interface Item {
  type: string
  userType: string
  name: string
  slug: string
  price: number
  userPrice: string
  imgUrl: string
}

const BasketContext = React.createContext<{
  items: Item[]
  totalPrice: number
  addItem: (item: Item) => void
  removeItem: (item: Item) => void
}>({
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
})

export const BasketProvider: FC = function ({ children }) {
  const [items, setItems] = useState<Item[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  function addItem(item: Item) {
    const _items = [...items, item]
    setTotalPrice(totalPrice + item.price)
    setItems(_items)
  }

  function removeItem(item: Item) {
    const _items = items.filter((item) => item.name !== item.name)
    setTotalPrice(totalPrice - item.price)
    setItems(_items)
  }

  return (
    <BasketContext.Provider value={{ items, totalPrice, addItem, removeItem }}>
      {children}
    </BasketContext.Provider>
  )
}
export const useBasket = () => useContext(BasketContext)
