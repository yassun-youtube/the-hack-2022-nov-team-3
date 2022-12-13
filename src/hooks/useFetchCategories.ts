// メンバー一覧の情報を取得するhooks

import { useQuery } from '@tanstack/react-query'
import { client } from '~/libs'
import { SuccessResponse, Category, ErrorResponse } from '~/types'

type Data = SuccessResponse<Category[]>

type Props = {
  category: 'hobby' | 'skill' | 'prefectures'
}

export function useFetchCategories({ category }: Props) {
  const query = useQuery<Data, ErrorResponse>({
    queryKey: ['members', category],
    queryFn: () => {
      return client.getContents({
        appUid: 'members',
        modelUid: category,
      })
    },
  })

  return query
}
