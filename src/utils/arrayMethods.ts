interface ListItemIdxParam {
  id: string
}
type err = Error | null

export function findListItemIdx(
  id: string,
  list: ListItemIdxParam[]
): [number, err] {
  const idx = list.findIndex((item) => item.id === id)

  let err: err = null
  if (idx === -1) {
    err = new Error(`Could not find item with following id: ${id}`)
  }

  return [idx, err]
}
