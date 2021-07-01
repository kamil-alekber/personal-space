import React, { useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  defaultValue?: T
): [T, (val: T) => void] {
  const [value, setValue] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const item_str = localStorage.getItem(key)

      // in case illegal JSON string is provided
      try {
        const item = JSON.parse(item_str)
        return item || defaultValue
      } catch (error) {
        throw new Error(`Check local storage JSON:  ${error}`)
      }
    }
    return defaultValue
  })

  function updateValue(_val: T) {
    localStorage.setItem(key, JSON.stringify(_val))
    setValue(_val)
  }

  return [value, updateValue]
}
