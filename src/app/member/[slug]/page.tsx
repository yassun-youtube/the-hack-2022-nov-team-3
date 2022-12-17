/** @jsxImportSource @emotion/react */
'use client'

// 参考
// https://zenn.dev/nishiurahiroki/articles/7e61590892499b

import { use, cache } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useRouter, notFound } from 'next/navigation'

// components
import { NormalButton, Hero, Profile, Section,Title } from '~/components'

// libs
import { clientSDK } from '~/libs'

// types
import { Member } from '~/types'

const getData = cache(async (slug: string) => {
  try {
    const res = await clientSDK.getFirstContent<Member>({
      appUid: 'members',
      modelUid: 'member',
      query: {
        slug,
      },
    })
    return res
  } catch (e) {
    return null
  }
})

export default function Page({ params }: { params: { slug: string } }) {
  const data = use(getData(params.slug))
  const router = useRouter()
  if (!data) {
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
          <Title text={data.name} />
          <Hero
            userName={data.name}
            mainHeroImage={data?.mainImage?.src}
            profileThumbnailImage={data?.thumbnail?.src}
            releaseDate={data._sys.createdAt}
            lastUpdatedDate={data._sys?.updatedAt}
          />
          <Section>
            <Title text={'プロフィール'} />
            <Profile text={data.profile} />
          </Section>

          <Section>
            <Title text={'リンク集'} />
            <LinkList links={data.links} />
          </Section>

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
