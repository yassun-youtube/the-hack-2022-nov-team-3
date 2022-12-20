// メンバー一覧の情報を取得するhooks
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { client } from '~/libs'
import { MemberJson } from '~/types'

type Data = MemberJson[]

export function useFetchMembers() {
  const query = useQuery<Data, AxiosError>({
    queryKey: ['members'],
    queryFn: async () => {
      try {
        const result = await client.get(`/json/member.json`)
        return result.data
      } catch (e) {
        throw e
      }
    },
    cacheTime: 1000 * 60 * 3, // 3分
    staleTime: 1000 * 60 * 3, // 3分
  })

  return query
}
