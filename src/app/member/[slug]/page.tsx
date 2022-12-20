/** @jsxImportSource @emotion/react */
'use client'

// 参考
// https://zenn.dev/nishiurahiroki/articles/7e61590892499b

import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useRouter, notFound } from 'next/navigation'

// components
import { NormalButton, Hero, Profile, Title, LinkList, SkillList, TagList } from '~/components'

// types
import { Member } from '~/types'

// hooks
import { useFetchMember } from '~/hooks'

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isError, isLoading } = useFetchMember({ slug: params.slug })
  const router = useRouter()

  if (isError) {
    notFound()
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 5,
          }}
        >
          {isLoading ? <>...loading</> : ''}
          {isError ? <>Error!!!</> : ''}
          {data ? (
            <>
              <Title text={data.name} />
              <Hero
                userName={data.name}
                mainHeroImage={data?.mainImage?.src}
                profileThumbnailImage={data?.thumbnail?.src}
                releaseDate={data._sys.createdAt}
                lastUpdatedDate={data._sys?.updatedAt}
              />
              <Title text={'プロフィール'} />
              <Profile text={data.profile} />

              <Title text={'スキル'} />
              <SkillList years_of_use={data.years_of_use} />

              <Title text={'リンク集'} />
              <LinkList links={data.links} />

              <Title text={'タグ'} />
              <TagList skill={data.skill} hobby={data.hobby} prefectures={data.prefectures} />
            </>
          ) : (
            ''
          )}

          <Box
            sx={{
              my: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <NormalButton variant="contained" clickHandler={() => router.push('/')}>
              一覧に戻る
            </NormalButton>
          </Box>
        </Box>
      </Container>
    </>
  )
}
