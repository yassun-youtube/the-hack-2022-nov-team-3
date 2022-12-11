/** @jsxImportSource @emotion/react */
'use client'

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useRouter } from 'next/navigation'

// components
import { NormalButton, Hero } from '~/components'
import Title from '~/components/Title'

export default function Members({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { id: string }
}) {
  const router = useRouter()
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title text={searchParams.id} />
          <Hero
            userName={params.slug}
            mainHeroImage={'https://picsum.photos/900/600'}
            profileThumbnailImage={'https://loremflickr.com/g/320/240/man'}
            releaseDate={'2022/12/11'}
            lastUpdatedDate={'2022/12/11'}
          />
          <NormalButton
            variant="contained"
            clickHandler={() => {
              router.push('/')
            }}
          >
            一覧に戻る
          </NormalButton>
        </Box>
      </Container>
    </>
  )
}
