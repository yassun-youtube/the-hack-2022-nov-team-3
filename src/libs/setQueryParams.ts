import queryString from 'query-string'

type Props = {
  [key: string]: string[]
}

export const getQueryParam = (p: URLSearchParams, key: string): { [key: string]: string } => {
  const r = p.get(key)
  return r ? { [key]: r } : {}
}

export const setQueryParams = (args: Props): string => {
  const parsed = queryString.parse(location.search, { arrayFormat: 'comma' })
  for (const k in args) {
    parsed[k] = args[k]
  }
  return '?' + queryString.stringify(parsed, { arrayFormat: 'comma' })
}
