// カテゴリ一覧の情報を取得するhooks
// filterはこちら参照
// https://developers.newt.so/apis/cdn#section/Queries/Filters

import { useQuery } from '@tanstack/react-query'
import { client } from '~/libs'
import { SuccessResponse, Category, ErrorResponse } from '~/types'

type Data = SuccessResponse<Category[]>

type Props = {
  category: 'hobby' | 'skill' | 'prefectures'
}

export function useFetchCategories({ category }: Props) {
  const query = useQuery<Data, ErrorResponse>({
    queryKey: ['category', category],
    queryFn: async () => {
      try {
        const result = await client.get(`/json/${category}.json`)
        return result.data
      } catch (e) {
        throw e
      }
    },
    cacheTime: 1000 * 60 * 10, // 10分
    staleTime: 1000 * 60 * 10, // 10分
  })

  return query
}
