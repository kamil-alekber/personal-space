import { useState } from 'react'

export function useLocalStorage<T>(
  _key: string,
  _defaultValue?: T
): [T, (_val: T) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof localStorage !== 'undefined') {
      const item_str = localStorage.getItem(_key)

      // in case illegal JSON string is provided
      try {
        const item = JSON.parse(item_str ?? '')
        return item || _defaultValue
      } catch (error) {
        throw new Error(`Check local storage JSON:  ${error}`)
      }
    }
    return _defaultValue
  })

  function updateValue(_val: T) {
    localStorage.setItem(_key, JSON.stringify(_val))
    setValue(_val)
  }

  return [value, updateValue]
}
