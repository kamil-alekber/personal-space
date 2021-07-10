import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

interface IOpts {
  replace?: boolean
}

export function useQueryParam(
  _key: string,
  _val?: string
): [string, (_param: string, _opts?: IOpts) => void] {
  const router = useRouter()
  const param = (router.query[_key] as string) ?? _val ?? ''

  function setParam(_param: string, _opts?: IOpts) {
    let n_query: ParsedUrlQuery = {}

    Object.keys(router.query).forEach((item) => {
      if (item !== _key) {
        n_query[item] = router.query[item]
      }
    })
    if (_param) {
      n_query[_key] = _param
    }

    _opts?.replace
      ? router.replace({ pathname: router.pathname, query: n_query })
      : router.push({ pathname: router.pathname, query: n_query })
  }

  return [param, setParam]
}
