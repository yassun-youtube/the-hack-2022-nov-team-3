/** @jsxImportSource @emotion/react */
'use client'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { css } from '@emotion/react'
import { useRouter } from 'next/navigation'
import Typography from '@mui/material/Typography'

// components
import { NormalButton, Title, Section } from '~/components'

export default function NotFound() {
  const router = useRouter()
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Section>
          <Title text={'Not Found'} />
          <Typography
            component="p"
            css={css`
              padding: 40px 0 100px;
              font-size: 22px;
            `}
          >
            お探しのページが見つかりませんでした
            <br />
            URLが間違っているか、ページが存在しません。
          </Typography>
          <NormalButton variant="contained" clickHandler={() => router.push('/')}>
            トップページへ戻る
          </NormalButton>
        </Section>
      </Container>
    </>
  )
}
