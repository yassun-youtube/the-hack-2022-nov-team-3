// メンバー一覧の情報を取得するhooks
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { client } from '~/libs'
import { MemberJson } from '~/types'

type Data = MemberJson[]

type Props = {
  skip: number
  limit: number
}

export function useFetchMembers({ skip, limit }: Props) {
  const query = useQuery<Data, AxiosError>({
    queryKey: ['member'],
    queryFn: async () => {
      try {
        const result = await client.get(`/json/member.json`)
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
