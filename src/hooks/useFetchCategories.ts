// カテゴリ一覧の情報を取得するhooks
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { client } from '~/libs'
import { CategoryJson } from '~/types'

type Data = CategoryJson[]

type Props = {
  category: 'hobby' | 'skill' | 'prefectures'
}

export function useFetchCategories({ category }: Props) {
  const query = useQuery<Data, AxiosError>({
    queryKey: ['category', category],
    queryFn: async () => {
      try {
        const result = await client.get(`/json/${category}.json`)
        return result.data
      } catch (e) {
        throw e
      }
    },
    cacheTime: 1000 * 60 * 5, // 5分
    staleTime: 1000 * 60 * 5, // 5分
  })

  return query
}
