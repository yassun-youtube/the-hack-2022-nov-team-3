// メンバー一覧の情報を取得するhooks
// filterはこちら参照
// https://developers.newt.so/apis/cdn#section/Queries/Filters

import { useQuery } from '@tanstack/react-query'
import { client } from '~/libs'
import { SuccessResponse, Member, ErrorResponse } from '~/types'

type Data = SuccessResponse<Member[]>

type Props = {
  skip: number
  limit: number
}

const path = `/json/member.json`

export function useFetchMembers({ skip, limit }: Props) {
  const query = useQuery<Data, ErrorResponse>({
    queryKey: [path],
    queryFn: async () => {
      try {
        const result = await client.get(path)
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
