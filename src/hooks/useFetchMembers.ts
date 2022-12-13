// メンバー一覧の情報を取得するhooks

import { useQuery } from '@tanstack/react-query'
import { client } from '~/libs'
import { SuccessResponse, Member, ErrorResponse } from '~/types'

type Data = SuccessResponse<Member[]>

export function useFetchMembers() {
  const query = useQuery<Data, ErrorResponse>({
    queryKey: ['members', 'member'],
    queryFn: () =>
      client.getContents({
        appUid: 'members',
        modelUid: 'member',
      }),
  })

  return query
}
