interface ListItemIdxParam {
  id: string
}

export function findListItemIdx(
  id: string,
  list: ListItemIdxParam[]
): [number, Error] {
  const idx = list.findIndex((item) => item.id === id)

  let err: Error = null
  if (idx === -1) {
    err = new Error(`Could not find item with following id: ${id}`)
  }

  return [idx, err]
}
