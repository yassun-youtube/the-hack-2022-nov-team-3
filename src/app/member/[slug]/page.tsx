/** @jsxImportSource @emotion/react */

'use client'

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useRouter } from 'next/navigation'

// components
import { NormalButton } from '~/components'
import Title from '~/components/Title'

export default function Members() {
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
          <Title text={'hogehoge'} />

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
