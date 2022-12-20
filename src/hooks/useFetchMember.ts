// メンバー一覧の情報を取得するhooks
import { useQuery } from '@tanstack/react-query'
import { clientSDK } from '~/libs'
import { Member, ErrorResponse } from '~/types'

type Props = {
  slug: string
}

export function useFetchMember({ slug }: Props) {
  const query = useQuery<Member | null, ErrorResponse>({
    queryKey: ['member', slug],
    queryFn: async () => {
      try {
        const result = await clientSDK.getFirstContent<Member>({
          appUid: 'members',
          modelUid: 'member',
          query: {
            slug,
          },
        })
        if (result === null) {
          throw new Error('404 notFound')
        }
        return result
      } catch (e) {
        throw e
      }
    },
    enabled: !!slug,
    cacheTime: 1000 * 60 * 3, // 3分
    staleTime: 1000 * 60 * 3, // 3分
  })

  return query
}
