import queryString from 'query-string'

type Props = {
  skill?: string
  hobby?: string
  prefectures?: string
  page?: string
}

const getQueryParams = (p: URLSearchParams, key: string): { [key: string]: string } => {
  const r = p.get(key)
  return r ? { [key]: r } : {}
}

export const setQueryParams = (args: Props): string => {
  let params = new URL(window.location.href).searchParams
  const obj = {
    ...getQueryParams(params, 'skill'),
    ...getQueryParams(params, 'hobby'),
    ...getQueryParams(params, 'prefectures'),
    ...getQueryParams(params, 'page'),
    ...args,
  }
  return queryString.stringify(obj)
}
